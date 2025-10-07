import { db } from "@/index";
import { users } from "@/db/schema";

export async function GET() {
  await db.insert(users).values({
    clerkId: "test123",
    email: "test@example.com",
  });

  const result = await db.select().from(users);

  return Response.json(result);   
}
