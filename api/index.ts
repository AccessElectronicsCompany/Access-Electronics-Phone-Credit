import express from "express";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { pgTable, text, serial, integer, decimal, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { eq, and, gt, desc } from "drizzle-orm";
import { z } from "zod";
const quoteRequests = pgTable("quote_requests", {
  id: serial("id").primaryKey(),
  fullName: text("full_name").notNull(),
  contactNumber: text("contact_number").notNull(),
  email: text("email").notNull(),
  physicalAddress: text("physical_address").notNull(),
  city: text("city").notNull(),
  region: text("region").notNull(),
  country: text("country").notNull(),
  productName: text("product_name").notNull(),
  storageCapacity: text("storage_capacity").notNull(),
  condition: text("condition").notNull().default("NEW"),
  color: text("color").notNull(),
  quantity: integer("quantity").notNull(),
  originalPrice: decimal("original_price", { precision: 10, scale: 2 }).notNull(),
  creditAmount: decimal("credit_amount", { precision: 10, scale: 2 }).notNull(),
  deposit: decimal("deposit", { precision: 10, scale: 2 }).notNull().default("0"),
  depositMethod: text("deposit_method"),
  paymentTerm: integer("payment_term").notNull(),
  monthlyPayment: decimal("monthly_payment", { precision: 10, scale: 2 }).notNull(),
  totalAmount: decimal("total_amount", { precision: 10, scale: 2 }).notNull(),
  cartItems: text("cart_items"),
  isMultipleItems: text("is_multiple_items").notNull().default("false"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
const insertQuoteRequestSchema = createInsertSchema(quoteRequests).omit({ id: true, createdAt: true });
if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL must be set");
const sql = neon(process.env.DATABASE_URL);
const db = drizzle(sql, { schema: { quoteRequests } });
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.post("/api/quote-requests", async (req, res) => {
  try {
    const validatedData = insertQuoteRequestSchema.parse(req.body);
    const cutoff = new Date(Date.now() - 30 * 60 * 1000);
    const recentQuotes = await db.select().from(quoteRequests).where(and(eq(quoteRequests.contactNumber, validatedData.contactNumber), gt(quoteRequests.createdAt, cutoff)));
    if (recentQuotes.length >= 2) {
      const oldest = recentQuotes.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime())[0];
      const minutesRemaining = Math.ceil((oldest.createdAt.getTime() + 30 * 60 * 1000 - Date.now()) / 60000);
      return res.status(429).json({ message: `Quote limit reached. Try again in ${minutesRemaining} minute(s).`, retryAfter: minutesRemaining });
    }
    const [quoteRequest] = await db.insert(quoteRequests).values(validatedData).returning();
    res.json(quoteRequest);
  } catch (error) {
    console.error("POST /api/quote-requests error:", error);
    if (error instanceof z.ZodError) res.status(400).json({ message: "Validation error", errors: error.errors });
    else res.status(500).json({ message: "Internal server error" });
  }
});
app.get("/api/quote-requests", async (req, res) => {
  try {
    res.json(await db.select().from(quoteRequests).orderBy(desc(quoteRequests.createdAt)));
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});
app.get("/api/quote-requests/:id", async (req, res) => {
  try {
    const [q] = await db.select().from(quoteRequests).where(eq(quoteRequests.id, parseInt(req.params.id)));
    if (!q) return res.status(404).json({ message: "Not found" });
    res.json(q);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});
export default app;