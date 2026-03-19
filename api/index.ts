import "dotenv/config";
import express from "express";
import type { Express } from "express";
import { registerRoutes } from "../server/routes";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let initialized = false;

async function getApp(): Promise<Express> {
  if (!initialized) {
    await registerRoutes(app);
    initialized = true;
  }
  return app;
}

export default async function handler(req: any, res: any) {
  const application = await getApp();
  return application(req, res);
}