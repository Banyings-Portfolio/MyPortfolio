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
        <div className="projects-container p-4 md:p-6 rounded-lg border-2 border-gray-300 shadow-md mx-4 my-4">
            <h2 className="text-2xl font-bold mb-6 p-4">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    );
}

function ProjectCard({ project }) {
    return (
        <div className="project p-6 rounded-lg border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="project-image mb-4 relative w-16 h-16 mx-auto">
                <Image
                    src={project.image}
                    alt={`${project.name} image`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                />
            </div>
            <h3 className="company text-xl font-bold mb-2 text-center">{project.name}</h3>
            <p className="description mb-4 text-center">
                {project.description}
            </p>
            <div className="text-center">
                <Link
                    href={project.link}
                    className="link-to-project inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Visit Project
                </Link>
            </div>
        </div>
    );
}