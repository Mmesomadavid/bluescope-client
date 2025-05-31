"use client"

import { Outlet } from "react-router-dom"

import { SidebarProvider, SidebarInset } from "../../ui/sidebar"
import Header from "./Header"
import Sidebar from "./Sidebar"

const AdminLayout = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar />
        <SidebarInset className="flex-1">
          <Header />
          <main className="flex-1 p-6 bg-gray-50">
            <Outlet />
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}

export default AdminLayout