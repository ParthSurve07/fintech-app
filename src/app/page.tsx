import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { BarChart2, TrendingUp, User, MoveRight } from "lucide-react";
import { redirect } from "next/navigation";

export default async function App() {
  const { userId } = await auth();
  if (userId) {
    redirect('/dashboard');
  }

  return (
    <main className="flex flex-col min-h-screen bg-gray-900 text-white font-sans">
      <header
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[85%] px-5 sm:px-8 py-2.5 bg-white/10 backdrop-blur-lg rounded-full border border-gray-700 shadow-lg"
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-7 h-7 text-sky-400" />
            <span className="text-xl font-bold text-white">Finlyze</span>
          </div>
          <div suppressHydrationWarning>
            <SignedOut>
              <SignInButton>
                <Button className="rounded-full px-6 cursor-pointer">
                  Log In
                </Button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
      </header>

      <section className="flex-grow flex items-center justify-center text-center px-4 pt-48 pb-16">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-white">
            Track Your Investments with Ease
          </h1>
          <p className="mb-10 text-lg text-gray-300">
            Monitor your entire portfolio in one place. Make smarter, data-driven decisions without the clutter.
          </p>
          <SignedOut>
            <SignUpButton>
              <Button className="inline-flex items-center bg-sky-500 text-white font-bold rounded-full shadow-lg shadow-sky-500/30 hover:bg-sky-600 transition-all duration-300 transform hover:scale-105 group">
                Start Tracking for Free
                <MoveRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </SignUpButton>
          </SignedOut>
        </div>
      </section>

      <section id="features" className="py-24 w-full bg-black/20">
        <div className="px-4 text-center max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-14">
            Everything You Need, Nothing You Don't
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            <div className="p-10 bg-gray-800 rounded-2xl border border-gray-700">
              <div className="flex justify-center items-center mb-6 bg-gray-700 w-20 h-20 rounded-full mx-auto">
                <TrendingUp className="w-9 h-9 text-sky-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Real-Time Tracking</h3>
              <p className="text-gray-400">Monitor your assets with up-to-date market data to stay informed.</p>
            </div>

            <div className="p-10 bg-gray-800 rounded-2xl border border-gray-700">
              <div className="flex justify-center items-center mb-6 bg-gray-700 w-20 h-20 rounded-full mx-auto">
                <BarChart2 className="w-9 h-9 text-sky-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Clear Analytics</h3>
              <p className="text-gray-400">Analyze your performance and allocation with simple, powerful charts.</p>
            </div>

            <div className="p-10 bg-gray-800 rounded-2xl border border-gray-700">
              <div className="flex justify-center items-center mb-6 bg-gray-700 w-20 h-20 rounded-full mx-auto">
                <User className="w-9 h-9 text-sky-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Simple Interface</h3>
              <p className="text-gray-400">Enjoy a clean, intuitive design that makes managing your portfolio easy.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full text-center py-10 bg-gray-900">
        <p className="text-gray-500">
          &copy; 2025 Portfolio Tracker. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
