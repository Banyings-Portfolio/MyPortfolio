import Link from 'next/link';

const Footer = () => {
    return (
        <footer className=" bg-white dark:bg-gray-800 border-t border-gray-300 dark:border-gray-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
                <div className="flex flex-col items-center sm:flex-row sm:justify-between">
                    <nav className="inline-block bg-slate-50 dark:bg-gray-700 rounded-full border border-zinc-300 dark:border-gray-600 mb-4 sm:mb-0">
                        <div className="flex flex-wrap justify-center">
                            <Link href="/" className="text-zinc-800 dark:text-white hover:underline hover:decoration-sky-400 transition duration-150 ease-in-out px-3 py-2 text-sm">
                                Home
                            </Link>
                            <Link href="/about" className="text-zinc-800 dark:text-white hover:underline hover:decoration-sky-400 transition duration-150 ease-in-out px-3 py-2 text-sm">
                                About
                            </Link>
                            <Link href="/projects" className="text-zinc-800 dark:text-white hover:underline hover:decoration-sky-400 transition duration-150 ease-in-out px-3 py-2 text-sm">
                                Projects
                            </Link>
                            <Link href="/uses" className="text-zinc-800 dark:text-white hover:underline hover:decoration-sky-400 transition duration-150 ease-in-out px-3 py-2 text-sm">
                                Uses
                            </Link>
                        </div>
                    </nav>
                    <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 text-center sm:text-right">
                        © {new Date().getFullYear()} Hyppolite. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
