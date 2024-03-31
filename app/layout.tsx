import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { Prompt } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const prompt = Prompt({ 
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], 
  variable: '--font-prompt'
});

export const metadata: Metadata = {
  title: "Next Auth V5 Course",
  description: "Introduction to Auth V5",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await auth();
  return (
    <SessionProvider session={session}>
        <html lang="en">
            <body className={prompt.className}>
                <Toaster/>
                {children}
            </body>
        </html>
    </SessionProvider>
        
  );
}
