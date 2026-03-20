import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertQuoteRequestSchema } from "../shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Create quote request
  app.post("/api/quote-requests", async (req, res) => {
    try {
      const validatedData = insertQuoteRequestSchema.parse(req.body);
      
      // Check rate limit: max 2 requests per user in 30 minutes
      const recentQuotes = await storage.getRecentQuotesByUser(validatedData.contactNumber, 30);
      
      if (recentQuotes.length >= 2) {
        const oldestRecentQuote = recentQuotes.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime())[0];
        const timeUntilNextAllowed = new Date(oldestRecentQuote.createdAt.getTime() + 30 * 60 * 1000);
        const minutesRemaining = Math.ceil((timeUntilNextAllowed.getTime() - Date.now()) / (1000 * 60));
        
        return res.status(429).json({ 
          message: `Quote request limit reached. You can submit another quote request in ${minutesRemaining} minute(s). Maximum 2 requests allowed every 30 minutes.`,
          retryAfter: minutesRemaining
        });
      }
      
      const quoteRequest = await storage.createQuoteRequest(validatedData);
      res.json(quoteRequest);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  // Get all quote requests
  app.get("/api/quote-requests", async (req, res) => {
    try {
      const quoteRequests = await storage.getAllQuoteRequests();
      res.json(quoteRequests);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Get quote request by ID
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
      res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
