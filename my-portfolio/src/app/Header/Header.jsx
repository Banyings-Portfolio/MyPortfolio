"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { useTheme } from '../ThemeContext/ThemeContext.jsx';

export default function Header() {
    const { darkMode, setDarkMode } = useTheme();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const ThemeSwitcher = () => (
        <div
            onClick={() => setDarkMode(!darkMode)}
            className="w-6 h-6 flex items-center justify-center cursor-pointer"
            role="switch"
            aria-checked={darkMode}
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    setDarkMode(!darkMode);
                }
            }}
        >
            {darkMode ? (
                <SunIcon className="w-full h-full text-teal-600 hover:text-gray-600" />
            ) : (
                <MoonIcon className="w-full h-full text-gray-600 hover:text-teal-600" />
            )}
        </div>
    );

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex flex-col md:flex-row justify-between items-center p-4 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800">
            <div className="flex justify-between items-center w-full md:w-auto mb-4 md:mb-0">
                {!isMobile && (
                    <Image
                        src="/Hyppolite.png"
                        alt="Avatar"
                        width={40}
                        height={40}
                        className="rounded-full mr-3"
                    />
                )}
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Hyppolite</h1>
                <div className="md:hidden">
                    <ThemeSwitcher />
                </div>
            </div>
            {!isMobile && (
                <nav className="inline-bloc bg-slate-50 dark:bg-gray-700 rounded-full border border-zinc-300 dark:border-gray-600">
                    <Link href="/" className="text-zinc-800 dark:text-white hover:underline hover:decoration-sky-400 transition duration-150 ease-in-out px-3 py-2">
                        Home
                    </Link>
                    <Link href="/about" className="text-zinc-800 dark:text-white hover:underline hover:decoration-sky-400 transition duration-150 ease-in-out px-3 py-2">
                        About
                    </Link>
                    <Link href="/projects" className="text-zinc-800 dark:text-white hover:underline hover:decoration-sky-400 transition duration-150 ease-in-out px-3 py-2">
                        Projects
                    </Link>
                    <Link href="/uses" className="text-zinc-800 dark:text-white hover:underline hover:decoration-sky-400 transition duration-150 ease-in-out px-3 py-2">
                        Uses
                    </Link>
                </nav>
            )}

            <div className="hidden md:block">
                <ThemeSwitcher />
            </div>

            {isMobile && (
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="mt-4 text-gray-800 dark:text-white focus:outline-none"
                >
                    {mobileMenuOpen ? 'Close' : 'Menu'}
                </button>
            )}

            {isMobile && mobileMenuOpen && (
                <nav className="w-full mt-4 bg-slate-50 dark:bg-gray-700 rounded-lg border border-zinc-300 dark:border-gray-600">
                    <Link href="/" className="block text-zinc-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 px-4 py-2">
                        Home
                    </Link>
                    <Link href="/about" className="block text-zinc-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 px-4 py-2">
                        About
                    </Link>
                    <Link href="/projects" className="block text-zinc-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 px-4 py-2">
                        Projects
                    </Link>
                    <Link href="/uses" className="block text-zinc-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 px-4 py-2">
                        Uses
                    </Link>
                </nav>
            )}
        </header>
    );
}
