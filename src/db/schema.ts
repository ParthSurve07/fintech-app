import { integer, jsonb, numeric, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  clerkId: text('clerk_id').notNull().unique(),
  email: text('email').notNull(),
  craetedAt: timestamp('created_at').defaultNow().notNull()
})

export const holdings = pgTable('holdings', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').notNull().references(() => users.id),
  symbol: text('symbol').notNull(), 
  quantity: integer('quantity').notNull(),
  avgPrice: numeric('avg_price', { precision: 10, scale: 2 }).notNull(),
  currentPrice: numeric('current_price', { precision: 10, scale: 2 }),
  updatedAt: timestamp('updated_at').defaultNow().notNull()
})

export const transactions = pgTable('transactions', {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  symbol: text("symbol").notNull(),
  type: text("type").notNull(), 
  quantity: integer("quantity").notNull(),
  price: numeric("price", { precision: 10, scale: 2 }).notNull(),
  date: timestamp("date").defaultNow().notNull(),
})

export const insights = pgTable("insights", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  type: text("type").notNull(),
  data: jsonb("data").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});