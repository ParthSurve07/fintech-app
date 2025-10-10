import { headers } from "next/headers"
import { Webhook } from 'svix'

export async function POST(req: Request) {
  const payLoad = await req.json()
  const heads = headers()
  const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET!);
}