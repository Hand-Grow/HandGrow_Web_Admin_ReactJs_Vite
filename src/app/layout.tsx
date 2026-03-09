import type { Metadata } from "next";
import './globals.css';
import { AdminSidebar } from "../components/admin/sidebar";

export const metadata: Metadata = {
  title: "HandGrow Admin",
  description: "HandGrow Admin Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen bg-gray-50">
              <AdminSidebar />
              <main className="flex-1 overflow-auto">
                {children}
              </main>
            </div>
      </body>
    </html>
  );
}