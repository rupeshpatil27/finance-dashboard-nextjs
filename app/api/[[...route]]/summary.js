import { z } from "zod";
import { createId } from "@paralleldrive/cuid2";
import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";

import { db } from "@/db/drizzle";
import { differenceInDays, subDays } from "date-fns";
import { sql, sum } from "drizzle-orm";
import { accounts, transactions } from "@/db/schema";

const app = new Hono().get(
  "/",
  clerkMiddleware(),
  zValidator(
    "query",
    z.object({
      from: z.string().optional(),
      to: z.string().optional(),
      accountId: z.string().optional(),
    }),
  ),
  async (c) => {
    const auth = getAuth(c);
    const { from, to, accountId } = c.req.valid("query");

    if (!auth?.userId) {
      return c.json({ error: "unauthorized" }, 401);
    }

    const defaultTo = new Date();
    const defaultFrom = subDays(defaultTo, 30);

    const startDate = from
      ? parse(from, "yyyy-MM-dd", new Date())
      : defaultFrom;

    const endDate = to ? parse(to, "yyyy-MM-dd", new Date()) : defaultTo;

    const periodLenght = differenceInDays(endDate, startDate) + 1;
    const lastPeriodStart = subDays(startDate, periodLenght);
    const lastPeriodEnd = subDays(endDate, periodLenght);

    async function fetchFinancialData(userId, startDate, endDate) {
      return await db
        .select({
          income:
            sql`SUM(CASE WHEN ${transactions.amount} >= 0 THEN ${transactions.amount}
        ELSE 0 END)`.mapWith(Number),
          expenses:
            sql`SUM(CASE WHEN ${transactions.amount} < 0 THEN ${transactions.amount}
        ELSE 0 END)`.mapWith(Number),
          remaining: sum(transactions.amount).mapWith(Number),
        })
        .from(transactions)
        .innerJoin(accounts);
    }

    const [currentPeriod] = await fetchFinancialData(
      auth.userId,
      startDate,
      endDate,
    );
    const [lastPeriod] = await fetchFinancialData(
      auth.userId,
      startDate,
      endDate,
    );

    const data = await db
      .select({ id: accounts.id, name: accounts.name })
      .from(accounts)
      .where(eq(accounts.userId, auth.userId));

    return c.json({ data });
  },
);

export default app;
