"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileText, LayoutDashboard, LogOut, Settings } from "lucide-react";
import { logoutAction } from "@/app/actions/auth-actions";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Don't show the sidebar on the login page
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen bg-stone-50">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-stone-200 bg-white">
        <div className="flex h-16 shrink-0 items-center border-b border-stone-100 px-6">
          <Link href="/admin" className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#8d4a54] font-bold text-white">
              CS
            </span>
            <span className="font-display text-lg font-semibold text-[#241712]">
              Chaitanya Admin
            </span>
          </Link>
        </div>

        <nav className="flex flex-1 flex-col justify-between px-4 py-6">
          <ul className="space-y-1">
            <li>
              <Link
                href="/admin"
                className={`group flex items-center gap-x-3 rounded-xl p-3 text-sm font-medium transition-colors ${
                  pathname === "/admin" || pathname.startsWith("/admin/collections")
                    ? "bg-[#8d4a54]/10 text-[#8d4a54]"
                    : "text-stone-600 hover:bg-stone-100 hover:text-stone-900"
                }`}
              >
                <LayoutDashboard className="h-5 w-5 shrink-0" />
                Manage Collections
              </Link>
            </li>
            <li>
              <Link
                href="/admin/content"
                className={`group flex items-center gap-x-3 rounded-xl p-3 text-sm font-medium transition-colors ${
                  pathname === "/admin/content"
                    ? "bg-[#8d4a54]/10 text-[#8d4a54]"
                    : "text-stone-600 hover:bg-stone-100 hover:text-stone-900"
                }`}
              >
                <FileText className="h-5 w-5 shrink-0" />
                Edit Website Copy
              </Link>
            </li>
            <li>
              <Link
                href="/"
                target="_blank"
                className="group flex items-center gap-x-3 rounded-xl p-3 text-sm font-medium text-stone-600 transition-colors hover:bg-stone-100 hover:text-stone-900"
              >
                <Settings className="h-5 w-5 shrink-0" />
                View Live Site
              </Link>
            </li>
          </ul>

          <div>
            <form action={logoutAction}>
              <button
                type="submit"
                className="group flex w-full items-center gap-x-3 rounded-xl p-3 text-sm font-medium text-stone-600 transition-colors hover:bg-stone-100 hover:text-red-600"
              >
                <LogOut className="h-5 w-5 shrink-0" />
                Secure Logout
              </button>
            </form>
          </div>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="pl-72 w-full">
        <div className="mx-auto max-w-5xl px-8 py-10">
          {children}
        </div>
      </main>
    </div>
  );
}
