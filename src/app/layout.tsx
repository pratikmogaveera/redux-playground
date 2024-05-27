import StoreProvider from "@/app/_store/StoreProvider";
import ThemeProvider from "@/app/_store/ThemeProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
    title: "Redux Playground",
    description: "",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <StoreProvider>
                    <ThemeProvider>
                        {children}
                    </ThemeProvider>
                </StoreProvider>
            </body>
        </html>
    );
}
