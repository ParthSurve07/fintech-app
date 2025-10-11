"use client";

import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarSeparator } from "@/components/ui/sidebar";
import { BarChart2, ChevronRight, Home, Layers, TrendingUp } from "lucide-react";
import Link from "next/link";
import { NavUser } from "./NavUser";
import { useUser } from "@clerk/nextjs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";

export default function AppSidebar() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn || !user) {
    return null;
  }

  const userData = {
    name: user.fullName ?? "User",
    email: user.primaryEmailAddress?.emailAddress ?? "no-email@example.com",
    avatar: user.imageUrl ?? "",
  };

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild className="w-full p-0">
              <Link
                href="/dashboard"
                className="flex items-center gap-3 w-full px-3 py-2 rounded-md hover:bg-gray-800 transition-colors"
                aria-label="Go to Finlyze home"
              >
                <div className="flex-shrink-0 bg-gradient-to-tr from-indigo-600 to-teal-400 text-white p-2 rounded-md">
                  <TrendingUp className="w-5 h-5" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col min-w-0">
                      <span className="font-semibold text-md truncate">Finlyze</span>
                      <span className="text-xs text-gray-400 truncate hidden sm:inline">Financial analytics</span>
                    </div>
                    <span className="text-[10px] text-gray-400 ml-2">v1.0.0</span>
                  </div>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarSeparator className="mx-auto" />

      <SidebarContent className="pt-2 px-2">
        <SidebarMenu>
          <SidebarMenu>
            <Collapsible defaultOpen className="group/collapsible">
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton asChild>
                    <Link
                      href="/dashboard"
                      className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-gray-800 transition-colors"
                      aria-label="Dashboard"
                    >
                      <div className="flex items-center gap-3">
                        <Home className="w-5 h-5 text-gray-400" />
                        <span className="truncate">Dashboard</span>
                      </div>
                      <ChevronRight className="h-4 w-4 text-gray-400 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </Link>
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub className="mt-0.5">
                    <SidebarMenuSubItem>
                      <SidebarMenuButton asChild>
                        <Link
                          href="/dashboard/holdings"
                          className="flex items-center gap-3 w-full px-3 py-2 rounded-md hover:bg-gray-800 transition-colors"
                          aria-label="Holdings"
                        >
                          <Layers className="w-5 h-5 text-gray-400" />
                          <span className="truncate">Holdings</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuButton asChild>
                        <Link
                          href="/dashboard/insights"
                          className="flex items-center gap-3 w-full px-3 py-2 rounded-md hover:bg-gray-800 transition-colors"
                          aria-label="Insights"
                        >
                          <BarChart2 className="w-5 h-5 text-gray-400" />
                          <span className="truncate">Insights</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          </SidebarMenu>
        </SidebarMenu>
        {/* <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link
                href="/dashboard"
                className="flex items-center gap-3 w-full px-3 py-2 rounded-md hover:bg-gray-800 transition-colors"
                aria-label="Dashboard"
              >
                <Home className="w-5 h-5 text-gray-400" />
                <span className="truncate">Dashboard</span>
              </Link>
            </SidebarMenuButton>

            <SidebarMenuSub className="mt-1">
              <SidebarMenuSubItem>
                <SidebarMenuButton asChild>
                  <Link
                    href="/dashboard/holdings"
                    className="flex items-center gap-3 w-full px-3 py-2 rounded-md hover:bg-gray-800 transition-colors"
                    aria-label="Holdings"
                  >
                    <Layers className="w-5 h-5 text-gray-400" />
                    <span className="truncate">Holdings</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuSubItem>
              <SidebarMenuSubItem>
                <SidebarMenuButton asChild>
                  <Link
                    href="/dashboard/insights"
                    className="flex items-center gap-3 w-full px-3 py-2 rounded-md hover:bg-gray-800 transition-colors"
                    aria-label="Insights"
                  >
                    <BarChart2 className="w-5 h-5 text-gray-400" />
                    <span className="truncate">Insights</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuSubItem>
            </SidebarMenuSub>
          </SidebarMenuItem>
        </SidebarMenu> */}
      </SidebarContent>

      <SidebarSeparator className="mx-auto" />

      <SidebarFooter>
        <NavUser user={userData} />
      </SidebarFooter>
    </Sidebar>
  )
}