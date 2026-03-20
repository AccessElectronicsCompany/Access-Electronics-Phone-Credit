import "dotenv/config";
import express from "express";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { quoteRequests, insertQuoteRequestSchema } from "../shared/schema";
import { eq, and, gt, desc } from "drizzle-orm";
import { z } from "zod";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL must be set");
}

const sql = neon(process.env.DATABASE_URL);
const db = drizzle(sql, { schema: { quoteRequests } });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/api/quote-requests", async (req, res) => {
  try {
    const validatedData = insertQuoteRequestSchema.parse(req.body);
    const cutoff = new Date(Date.now() - 30 * 60 * 1000);
    const recentQuotes = await db.select().from(quoteRequests).where(
      and(eq(quoteRequests.contactNumber, validatedData.contactNumber), gt(quoteRequests.createdAt, cutoff))
    );
    if (recentQuotes.length >= 2) {
      const oldest = recentQuotes.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime())[0];
      const nextAllowed = new Date(oldest.createdAt.getTime() + 30 * 60 * 1000);
      const minutesRemaining = Math.ceil((nextAllowed.getTime() - Date.now()) / (1000 * 60));
      return res.status(429).json({ message: `Quote limit reached. Try again in ${minutesRemaining} minute(s).`, retryAfter: minutesRemaining });
    }
    const [quoteRequest] = await db.insert(quoteRequests).values(validatedData).returning();
    res.json(quoteRequest);
  } catch (error) {
    console.error("POST /api/quote-requests error:", error);
    if (error instanceof z.ZodError) {
      res.status(400).json({ message: "Validation error", errors: error.errors });
    } else {
      res.status(500).json({ message: "Internal server error" });
    }
  }
});

app.get("/api/quote-requests", async (req, res) => {
  try {
    const all = await db.select().from(quoteRequests).orderBy(desc(quoteRequests.createdAt));
    res.json(all);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/api/quote-requests/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const [quoteRequest] = await db.select().from(quoteRequests).where(eq(quoteRequests.id, id));
    if (!quoteRequest) { res.status(404).json({ message: "Quote request not found" }); return; }
    res.json(quoteRequest);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

export default app;