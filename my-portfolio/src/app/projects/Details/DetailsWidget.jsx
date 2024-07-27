import Image from 'next/image';
import Link from 'next/link';

export default function DetailsWidget() {
    const projects = [
        {
            name: "My Portfolio.",
            description: "Creating a portfolio that showcases my skills and demonstrates my capabilities",
            image: "/Hyppolite.png",
            link: "https://company.com"
        },
        {
            name: "Banying's Barber",
            description: "Developing a website that allows friends to schedule haircuts during my available time slots.",
            image: "/Hyppolite.png",
            link: "https://company.com"
        }
    ];

    return (
        <div className="projects-container p-4 md:p-6 rounded-lg ">
            <h2 className="text-2xl font-bold mb-6 p-4">My Projects</h2>
            <div className="flex flex-col md:flex-row gap-6">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    );
}

function ProjectCard({ project }) {
    return (
        <div className="project  p-4 rounded-lg  w-full md:w-1/2">
            <div className="project-image mb-4 relative w-12 h-12 rounded-full overflow-clip">
                <Image
                    src={project.image}
                    alt={`${project.name} image`}
                    width={48}
                    height={48}
                />
            </div>
            <h3 className="company text-xl font-bold mb-2 ">{project.name}</h3>
            <p className="description mb-4">
                {project.description}
            </p>
            <Link
                href={project.link}
                className="link-to-project text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
                target="_blank"
                rel="noopener noreferrer"
            >
                Visit Project
            </Link>
        </div>
    );
}