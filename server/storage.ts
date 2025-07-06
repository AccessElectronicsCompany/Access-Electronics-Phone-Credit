import { quoteRequests, type QuoteRequest, type InsertQuoteRequest } from "@shared/schema";

export interface IStorage {
  createQuoteRequest(quoteRequest: InsertQuoteRequest): Promise<QuoteRequest>;
  getQuoteRequest(id: number): Promise<QuoteRequest | undefined>;
  getAllQuoteRequests(): Promise<QuoteRequest[]>;
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
}

export const storage = new MemStorage();
