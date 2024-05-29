"use client"
import { useAppSelector } from '@/app/_store/store';
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import React from 'react';

const inter = Inter({ subsets: ["latin"] });

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const theme = useAppSelector(state => state.themeSlice.theme)

    return (
        <div className={cn(inter.className, theme, 'body')}>
            {children}
        </div>
    )
}

export default ThemeProvider