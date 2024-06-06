import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@/components/Analytics";
import { ModeToggle } from "@/components/ModeToggle";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Nav from "@/components/Nav/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "dusunax",
  description: "living room",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${inter.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col max-w-4xl min-h-screen mx-auto py-10 px-4">
            <header className="pb-8">
              <div className="flex items-center justify-between">
                <Nav />

                <ModeToggle />
              </div>
            </header>
            <main className="w-full flex-1 flex flex-col">{children}</main>
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
