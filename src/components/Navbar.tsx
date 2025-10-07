'use client'

import {
  Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { usePathname } from "next/navigation"
import { SidebarTrigger } from "./ui/sidebar";
import { ModeToggle } from "./ModeToggle";
import { SignedIn, UserButton } from "@clerk/nextjs";
import React from "react";

export default function Navbar() {
  const pathname = usePathname()
  const segments = pathname.split("/").filter(Boolean)

  return (
    <div className="flex items-center justify-between w-full px-6 py-3 bg-gray-300 dark:bg-gray-900 shadow-md">
      <div className="flex items-center gap-4">
        <SidebarTrigger />

        <div className="w-[1px] h-5 bg-gray-600 dark:bg-gray-700" />

        <Breadcrumb>
          <BreadcrumbList>
            {segments.map((segment, index) => {
              const href = "/" + segments.slice(0, index + 1).join("/")
              const isLast = index === segments.length - 1

              return (
                <React.Fragment key={href}>
                  <BreadcrumbItem>
                    {!isLast ? (
                      <BreadcrumbLink href={href} className="capitalize">
                        {segment}
                      </BreadcrumbLink>
                    ) : (
                      <BreadcrumbPage className="capitalize">
                        {segment}
                      </BreadcrumbPage>
                    )}
                  </BreadcrumbItem>

                  {!isLast && <BreadcrumbSeparator />}
                </React.Fragment>
              )
            })}
          </BreadcrumbList>
        </Breadcrumb>
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
