import { AppSidebar } from "@/components/AppSidebar"
import Navbar from "@/components/Navbar"
import { SidebarProvider } from "@/components/ui/sidebar"

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <Navbar bTitle="Dashboard"/>
        {children}
      </main>
    </SidebarProvider>
  )
}