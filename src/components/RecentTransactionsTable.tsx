"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableHead, TableRow, TableHeader, TableBody, TableCell } from "@/components/ui/table";
import Link from "next/link";
import React from "react";

// Sample data for demonstration
const transactions = [
  { id: 1, date: "2025-10-10", type: "Buy", symbol: "INFY", quantity: 10, price: 1450, value: 14500 },
  { id: 2, date: "2025-10-07", type: "Sell", symbol: "TCS", quantity: 5, price: 3500, value: 17500 },
  { id: 3, date: "2025-10-03", type: "Buy", symbol: "RELIANCE", quantity: 15, price: 2500, value: 37500 },
  { id: 4, date: "2025-09-30", type: "Buy", symbol: "HDFCBANK", quantity: 20, price: 1650, value: 33000 },
];

export function RecentTransactionsTable() {
  return (
    <Card className="w-full bg-gray-900 border border-gray-800 text-white shadow-2xl py-4 flex flex-col gap-3 transition-all duration-300">
      <CardHeader className="pb-2 flex-shrink-0">
        <CardTitle className="text-xl font-bold text-sky-200 drop-shadow-md tracking-wide">
          Recent Transactions
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow pt-1 pb-2">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-gray-400">Date</TableHead>
              <TableHead className="text-gray-400">Type</TableHead>
              <TableHead className="text-gray-400">Symbol</TableHead>
              <TableHead className="text-gray-400" align="right">Quantity</TableHead>
              <TableHead className="text-gray-400" align="right">Price</TableHead>
              <TableHead className="text-gray-400 text-right">Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((tx) => (
              <TableRow
                key={tx.id}
                className="hover:bg-gray-800/40 transition"
              >
                <TableCell className="text-gray-200">{tx.date}</TableCell>
                <TableCell className={tx.type === "Buy"
                  ? "font-semibold text-green-400"
                  : "font-semibold text-red-400"
                }>
                  {tx.type}
                </TableCell>
                <TableCell className="text-gray-300">{tx.symbol}</TableCell>
                <TableCell align="left">{tx.quantity}</TableCell>
                <TableCell align="left">₹{tx.price.toLocaleString()}</TableCell>
                <TableCell align="right" className="font-bold text-gray-100">
                  ₹{tx.value.toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex justify-end mt-3">
          <Link
            href="/dashboard"
            className="rounded-md bg-sky-800 hover:bg-sky-700 px-4 py-2 text-sm font-semibold text-sky-100 shadow transition"
          >
            View All Transactions →
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
