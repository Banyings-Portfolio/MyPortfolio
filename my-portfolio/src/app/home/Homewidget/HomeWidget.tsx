import Image from "next/image"

export default function HomeWidget() {
    return (
        <div className="widget flex flex-col sm:flex-row items-center sm:items-start gap-8 w-full px-4 sm:px-0">
            <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 flex-shrink-0 relative overflow-hidden rounded-full mt-16 p-4">
                <Image
                    src="/Hyppolite.png"
                    alt="Picture of Hyppolite"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                />
            </div>
            
            <div className="flex-grow p-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl  font-bold leading-tight mb-4">
                    Software engineer, seeker, and believer
                </h1>
                <div className="text-sm sm:text-base md:text-lg">
                    <p className="mb-4">
                        As a junior software engineer still navigating the academic landscape, I bring a unique blend of theoretical knowledge and practical enthusiasm to every project. My journey is one of continuous growth, where each line of code bridges the gap between classroom concepts and real-world applications. While my professional experience may be limited, my passion for problem-solving and innovation knows no bounds. I approach each challenge with fresh eyes, leveraging my academic insights to craft solutions that are both creative and grounded in solid principles. My portfolio showcases not just what I've built, but the potential of what I can create as I evolve from student to industry professional. Join me as I code the future, one project at a time
                    </p>
                </div>
            </div>
        </div>
    );
}