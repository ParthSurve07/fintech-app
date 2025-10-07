import { AppSidebar } from "@/components/AppSidebar"
import Navbar from "@/components/Navbar"
import { SidebarProvider } from "@/components/ui/sidebar"
import { ClerkProvider } from "@clerk/nextjs"

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full">
          <Navbar bTitle="Dashboard" />
          {children}
        </main>
      </SidebarProvider>
    </ClerkProvider>
  )
}