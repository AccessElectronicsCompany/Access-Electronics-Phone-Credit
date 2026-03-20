import "dotenv/config";
import express from "express";
import { storage } from "../server/storage";
import { insertQuoteRequestSchema } from "../shared/schema";
import { z } from "zod";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/api/quote-requests", async (req, res) => {
  try {
    const validatedData = insertQuoteRequestSchema.parse(req.body);
    const recentQuotes = await storage.getRecentQuotesByUser(validatedData.contactNumber, 30);

    if (recentQuotes.length >= 2) {
      const oldestRecentQuote = recentQuotes.sort(
        (a, b) => a.createdAt.getTime() - b.createdAt.getTime()
      )[0];
      const timeUntilNextAllowed = new Date(
        oldestRecentQuote.createdAt.getTime() + 30 * 60 * 1000
      );
      const minutesRemaining = Math.ceil(
        (timeUntilNextAllowed.getTime() - Date.now()) / (1000 * 60)
      );
      return res.status(429).json({
        message: `Quote request limit reached. You can submit another in ${minutesRemaining} minute(s).`,
        retryAfter: minutesRemaining,
      });
    }

    const quoteRequest = await storage.createQuoteRequest(validatedData);
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
    const quoteRequests = await storage.getAllQuoteRequests();
    res.json(quoteRequests);
  } catch (error) {
    console.error("GET /api/quote-requests error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/api/quote-requests/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const quoteRequest = await storage.getQuoteRequest(id);
    if (!quoteRequest) {
      res.status(404).json({ message: "Quote request not found" });
      return;
    }
    res.json(quoteRequest);
  } catch (error) {
    console.error("GET /api/quote-requests/:id error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default app;