import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import ProfileSidebar from "../layout/app-sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
     <ProfileSidebar>
      {children}
    </ProfileSidebar>
  )
}