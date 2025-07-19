import { quoteRequests, type QuoteRequest, type InsertQuoteRequest } from "@shared/schema";

export interface IStorage {
  createQuoteRequest(quoteRequest: InsertQuoteRequest): Promise<QuoteRequest>;
  getQuoteRequest(id: number): Promise<QuoteRequest | undefined>;
  getAllQuoteRequests(): Promise<QuoteRequest[]>;
  getRecentQuotesByUser(contactNumber: string, timeWindowMinutes: number): Promise<QuoteRequest[]>;
}

export class MemStorage implements IStorage {
  private quoteRequests: Map<number, QuoteRequest>;
  private currentId: number;

  constructor() {
    this.quoteRequests = new Map();
    this.currentId = 1;
  }

  async createQuoteRequest(insertQuoteRequest: InsertQuoteRequest): Promise<QuoteRequest> {
    const id = this.currentId++;
    const quoteRequest: QuoteRequest = {
      ...insertQuoteRequest,
      id,
      deposit: insertQuoteRequest.deposit || '0',
      depositMethod: insertQuoteRequest.depositMethod || null,
      createdAt: new Date(),
    };
    this.quoteRequests.set(id, quoteRequest);
    return quoteRequest;
  }

  async getQuoteRequest(id: number): Promise<QuoteRequest | undefined> {
    return this.quoteRequests.get(id);
  }

  async getAllQuoteRequests(): Promise<QuoteRequest[]> {
    return Array.from(this.quoteRequests.values());
  }

  async getRecentQuotesByUser(contactNumber: string, timeWindowMinutes: number): Promise<QuoteRequest[]> {
    const cutoffTime = new Date(Date.now() - timeWindowMinutes * 60 * 1000);
    const allQuotes = Array.from(this.quoteRequests.values());
    
    return allQuotes.filter(quote => 
      quote.contactNumber === contactNumber && 
      quote.createdAt > cutoffTime
    );
  }
}

export const storage = new MemStorage();
