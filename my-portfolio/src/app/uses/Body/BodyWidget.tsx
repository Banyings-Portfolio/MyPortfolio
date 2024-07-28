export default function BodyWidget() {
  const sections = [
    {
      title: "Workstation",
      items: [
        { name: "MacBook Air", description: "My go-to machine for both development and design work. Its powerful processor and Retina display make it perfect for running multiple development environments and design software simultaneously." },
        { name: "Hp Monitor", description: "I use one 32-inch monitor to maximize productivity. I mostly splited the screen in two. One for design and other for thework or documentation, allowing me to have all necessary information at a glance." }
      ]
    },
    {
      title: "Development Tools",
      items: [
        { name: "React", description: "My preferred JavaScript library for building user interfaces. Its component-based architecture and virtual DOM make it efficient for creating dynamic and responsive web applications." },
        { name: "Next.js", description: "I use Next.js as my React framework of choice. Its server-side rendering capabilities, routing system, and built-in optimizations significantly enhance my development workflow and the performance of my applications." }
      ]
    },
    {
      title: "Design",
      items: [
        { name: "Figma", description: "My primary tool for UI/UX design. Its collaborative features and powerful design capabilities allow me to create, prototype, and iterate on designs quickly and efficiently." },
        { name: "Whimsical", description: "I use Whimsical for creating wireframes and flowcharts. Its intuitive interface helps me rapidly prototype ideas and visualize user flows before moving to high-fidelity designs in Figma." }
      ]
    },
    {
      title: "Productivity",
      items: [
        { name: "VS Code", description: "I use Notion for project management, note-taking, and documentation. Its flexibility allows me to organize my work and thoughts in a way that best suits my workflow." },
        { name: "Notion", description: "I use Notion for project management, note-taking, and documentation. Its flexibility allows me to organize my work and thoughts in a way that best suits my workflow." }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-4">
      <div className="container px-2">
        {sections.map((section, index) => (
          <div key={index} className="mb-8 p-6 border-2 border-gray-300 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-center">{section.title}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex} className="p-6 rounded-md border border-gray-200 shadow">
                  <h3 className="text-xl font-semibold mb-4">{item.name}</h3>
                  <p className="leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}