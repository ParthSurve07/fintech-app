import Link from "next/link";
import { SidebarTrigger } from "./ui/sidebar";
import { ModeToggle } from "./ModeToggle";
import { SignedIn, UserButton } from "@clerk/nextjs";

export default function Navbar({ bTitle }: { bTitle: string }) {
  return (
    <div className="flex items-center justify-between w-full px-6 py-3 bg-gray-300 dark:bg-gray-900 shadow-md">
      <div className="flex items-center gap-4">
        <SidebarTrigger />

        <div className="w-[1px] h-5 bg-gray-600 dark:bg-gray-700" />

        <Link href={'/dashboard'} className="flex items-center text-gray-600 dark:text-gray-100 font-medium text-sm">
          {bTitle}
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <ModeToggle />

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  )
}
