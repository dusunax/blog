import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@/components/Analytics";
import { ModeToggle } from "@/components/ModeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "dusunax",
  description: "homepage for living",
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
            <header className="pb-6">
              <div className="flex items-center justify-between">
                <ModeToggle />
                <nav className="ml-auto text-sm font-medium space-x-6">
                  <Link href="/">Home</Link>
                  <Link href="/gallery" prefetch>
                    Gallery
                  </Link>
                  <Link href="/quiz">Quiz</Link>
                  {/* <Link href="/about">About</Link>
                  <Link href="/posts">Posts</Link>
                  <Link href="/blog">Blog</Link> */}
                  {/* <Link href="/videos">Videos</Link> */}
                  {/* <Link href="/category">Category</Link> */}
                </nav>
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
