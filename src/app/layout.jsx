"use client";

import MainLayout from "../components/layout/MainLayout";
import { ThemeProvider } from "../context/ThemeContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <MainLayout>
            {children}
          </MainLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}