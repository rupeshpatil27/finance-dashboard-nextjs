import { account } from "@/db/schema";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
import { eq } from "drizzle-orm";
import { Hono } from "hono";

const app = new Hono().get("/", clerkMiddleware(), async (c) => {
  const auth = getAuth(c);

  if (!auth?.userId) {
    return c.json({ error: "unauthorized" }, 401);
  }

  const data = await db
    .select({ id: account.id, name: account.name })
    .from(account).where(eq(account.userId,auth.userId));

  return c.json({ data });
});

export default app;
