export default function SkillsWidget() {
    const skills = [
        { name: 'HTML', progress: 95, icon: 'html.png' },
        { name: 'CSS', progress: 90, icon: 'css.png' },
        { name: 'JavaScript', progress: 85, icon: 'js.png' },
    ];

    return (
        <div className="Skills-container pl-8">
            <div>
                <h1 className="pb-6 font-bold text-2xl">Skills</h1>
                <p className="pb-4 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>Ut et massa mi.</p>
            </div>
            <div className="flex flex-wrap gap-8">
                {skills.map((skill) => (
                    <div key={skill.name} className="flex flex-col items-center w-24">
                        <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-2"/>
                        <span className="font-semibold">{skill.name}</span>
                        <div className="mt-2">{skill.progress}%</div>
                    </div>
                ))}
            </div>
        </div>
    );
}