import { SignUp } from "@clerk/nextjs";
import { BarChart2, TrendingUp, User } from "lucide-react";

export default function Page() {
  return (
    <div className="h-screen w-screen flex flex-col md:flex-row">
      <div className="flex-1 flex items-center justify-center
                      bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900
                      relative px-4">
        <div className="relative z-10 w-full max-w-md p-6 rounded-2xl
                        md:bg-white/10 md:dark:bg-gray-800/50 md:backdrop-blur-xl
                        md:border md:border-gray-300/30 md:dark:border-gray-700/30
                        shadow-xl">
          <SignUp />
        </div>
      </div>

      <div className="hidden md:flex w-[40%] bg-gradient-to-br from-sky-600 via-indigo-700 to-purple-800 relative">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center">
          <h2 className="text-3xl font-bold text-white leading-snug">
            Join <span className="text-sky-300">Finlyze</span> Today
          </h2>
          <p className="mt-4 text-gray-200 text-lg">
            Track your investments, analyze trends, and make smarter financial decisions effortlessly.
          </p>

          <div className="mt-8 flex flex-col gap-6 text-left">
            <div className="flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-sky-300" />
              <span className="text-gray-200">Real-time portfolio tracking</span>
            </div>
            <div className="flex items-center gap-3">
              <BarChart2 className="w-6 h-6 text-sky-300" />
              <span className="text-gray-200">Clear and actionable analytics</span>
            </div>
            <div className="flex items-center gap-3">
              <User className="w-6 h-6 text-sky-300" />
              <span className="text-gray-200">User-friendly interface</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
