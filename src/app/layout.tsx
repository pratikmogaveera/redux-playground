import ThemeProvider from "@/app/_store/ThemeProvider";
import type { Metadata } from "next";
import StoreProvider from "@/app/_store/StoreProvider";
import "./globals.css";

export const metadata: Metadata = {
    title: "Redux Playground",
    description: "",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <StoreProvider>
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </StoreProvider>
        </html>
    );
}
