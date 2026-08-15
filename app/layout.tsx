import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from '@/components/ThemeProvider';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import MobileNav from "@/components/layout/MobileNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cargo Metrics",
  description: "Dashboard de carga y logística",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="h-full flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 overflow-hidden">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Header />

          <div className="flex flex-1 min-w-0 overflow-hidden">
            <div className="hidden md:block flex-shrink-0">
              <Sidebar />
            </div>

            <main className="flex-1 overflow-y-auto min-w-0">
              {children}
            </main>

            <MobileNav />
            
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
