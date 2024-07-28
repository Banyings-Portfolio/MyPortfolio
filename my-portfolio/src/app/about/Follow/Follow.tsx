import Image from "next/image";

export default function Follow() {
    return (
        <div className="container w-full md:w-1/2 lg:w-1/3 border-2 border-gray-300 rounded-lg p-6 shadow-md mx-4 my-4">
            <h2 className="font-bold text-2xl mb-6 pt-4">Follow Me</h2>
            <div className="space-y-4">
                <div className="flex items-center">
                    <Image src="/X.png" width={24} height={24} alt="X logo" className="mr-3 dark:invert" />
                    <a href="https://x.com/explore"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 transition-colors duration-300">
                        Follow me on X
                    </a>
                </div>
                <div className="flex items-center">
                    <Image src="/GitHub.png" width={24} height={24} alt="GitHub logo" className="mr-3 dark:invert" />
                    <a href="https://github.com/Banyings?utm_campaign=cta&utm_medium=topnav&utm_source=blog"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 transition-colors duration-300">
                        Follow me on GitHub
                    </a>
                </div>
                <div className="flex items-center">
                    <Image src="/LinkedIn.png" width={24} height={24} alt="LinkedIn logo" className="mr-3 dark:invert" />
                    <a href="https://www.linkedin.com/in/hyppolite-banyingela-11369724a/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 transition-colors duration-300">
                        Follow me on LinkedIn
                    </a>
                </div>
                <div className="flex items-center">
                    <Image src="/Mail.png" width={24} height={24} alt="Email logo" className="mr-3 dark:invert" />
                    <a href="mailto:banyingelahyppo@gmail.com"
                        className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 transition-colors duration-300">
                        banyingelahyppo@gmail.com
                    </a>
                </div>
            </div>
        </div>
    )
}