import { quoteRequests, type QuoteRequest, type InsertQuoteRequest } from "../shared/schema";
import { db } from "./db";
import { eq, and, gt, desc } from "drizzle-orm";

export interface IStorage {
  createQuoteRequest(quoteRequest: InsertQuoteRequest): Promise<QuoteRequest>;
  getQuoteRequest(id: number): Promise<QuoteRequest | undefined>;
  getAllQuoteRequests(): Promise<QuoteRequest[]>;
  getRecentQuotesByUser(contactNumber: string, timeWindowMinutes: number): Promise<QuoteRequest[]>;
}

export class DatabaseStorage implements IStorage {
  async createQuoteRequest(insertQuoteRequest: InsertQuoteRequest): Promise<QuoteRequest> {
    const [quoteRequest] = await db
      .insert(quoteRequests)
      .values(insertQuoteRequest)
      .returning();
    return quoteRequest;
  }

  async getQuoteRequest(id: number): Promise<QuoteRequest | undefined> {
    const [quoteRequest] = await db
      .select()
      .from(quoteRequests)
      .where(eq(quoteRequests.id, id));
    return quoteRequest;
  }

  async getAllQuoteRequests(): Promise<QuoteRequest[]> {
    return await db
      .select()
      .from(quoteRequests)
      .orderBy(desc(quoteRequests.createdAt));
  }

  async getRecentQuotesByUser(contactNumber: string, timeWindowMinutes: number): Promise<QuoteRequest[]> {
    const cutoffTime = new Date(Date.now() - timeWindowMinutes * 60 * 1000);
    return await db
      .select()
      .from(quoteRequests)
      .where(
        and(
          eq(quoteRequests.contactNumber, contactNumber),
          gt(quoteRequests.createdAt, cutoffTime)
        )
      );
  }
}

export const storage = new DatabaseStorage();
