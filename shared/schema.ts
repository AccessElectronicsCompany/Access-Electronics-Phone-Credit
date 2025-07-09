import { pgTable, text, serial, integer, decimal, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const quoteRequests = pgTable("quote_requests", {
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
  condition: text("condition").notNull().default('NEW'),
  color: text("color").notNull(),
  quantity: integer("quantity").notNull(),
  originalPrice: decimal("original_price", { precision: 10, scale: 2 }).notNull(),
  creditAmount: decimal("credit_amount", { precision: 10, scale: 2 }).notNull(),
  deposit: decimal("deposit", { precision: 10, scale: 2 }).notNull().default('0'),
  depositMethod: text("deposit_method"),
  paymentTerm: integer("payment_term").notNull(), // 12, 24, or 36 months
  monthlyPayment: decimal("monthly_payment", { precision: 10, scale: 2 }).notNull(),
  totalAmount: decimal("total_amount", { precision: 10, scale: 2 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertQuoteRequestSchema = createInsertSchema(quoteRequests).omit({
  id: true,
  createdAt: true,
});

export type InsertQuoteRequest = z.infer<typeof insertQuoteRequestSchema>;
export type QuoteRequest = typeof quoteRequests.$inferSelect;
