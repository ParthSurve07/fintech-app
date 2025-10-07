import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="h-screen w-screen flex">
      <div className="flex-1 flex items-center justify-center
                            bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900
                            relative px-4">
        <div className="relative z-10 w-full max-w-md p-6 rounded-2xl
                              md:bg-white/10 md:dark:bg-gray-800/50 md:backdrop-blur-xl
                              md:border md:border-gray-300/30 md:dark:border-gray-700/30
                              shadow-xl">
          <SignIn />
        </div>
      </div>

      <div className="hidden md:block w-[40%] bg-gradient-to-br from-sky-600 via-indigo-700 to-purple-800 relative">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        <div className="relative z-10 flex items-center justify-center h-full px-8 text-center">
          <h2 className="text-3xl font-bold text-white leading-snug">
            Welcome to <span className="text-sky-300">Finlyze</span>
          </h2>
        </div>
      </div>
    </div>
  );
}
