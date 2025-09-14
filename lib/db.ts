// lib/db.ts
import { PrismaClient } from "@prisma/client";

declare global {
  // globalThis.prisma tipini belgilab qo‘yamiz
  // Shunda TypeScript xato bermaydi
  // va developmentda har safar yangi client ochilmaydi
  // (Hot reload paytida memory leak bo‘lishining oldini oladi)
  var prisma: PrismaClient | undefined;
}

export const db =
  globalThis.prisma ||
  new PrismaClient({
    log: ["query", "error", "warn"], // foydali loglar (ixtiyoriy)
  });

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
