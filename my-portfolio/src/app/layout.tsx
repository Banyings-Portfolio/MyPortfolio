'use client';
import React from 'react';
import { ThemeProvider, useTheme } from './ThemeContext/ThemeContext';
import { Roboto } from 'next/font/google';
import Footer from "@/app/Foorter/Footer";
import './globals.css';
import Header from "@/app/Header/Header";

const roboto = Roboto({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
});

interface LayoutContentProps {
    children: React.ReactNode;
}

function LayoutContent({ children }: LayoutContentProps) {
    const { darkMode } = useTheme();

    return (
        <html lang="en" className={darkMode ? 'dark' : ''}>
        <body className={`${roboto.className} ${darkMode ? 'dark:bg-gray-900 dark:text-white' : 'bg-white text-black'} flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow pt-32 lg:pt-16 md:pt-24 overflow-y-auto">
            {children}
        </main>
        <Footer />
        </body>
        </html>
    );
}

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <ThemeProvider>
            <LayoutContent>{children}</LayoutContent>
        </ThemeProvider>
    );
}
