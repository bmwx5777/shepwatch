import { ReactNode } from "react";
import AdminSidebar from "@/components/admin/AdminSidebar";

type AdminShellProps = {
  children: ReactNode;
};

export default function AdminShell({ children }: AdminShellProps) {
  return (
    <main className="min-h-screen bg-[#f8f5f0] px-6 py-8 text-[#111111]">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[280px_1fr]">
        <AdminSidebar />
        <div className="space-y-8">{children}</div>
      </div>
    </main>
  );
}