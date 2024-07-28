export default function SkillsWidget() {
    const skills = [
        { name: 'HTML', progress: 95, icon: 'html.png' },
        { name: 'CSS', progress: 90, icon: 'css.png' },
        { name: 'JavaScript', progress: 85, icon: 'js.png' },
    ];

    return (
        <div className="Skills-container pl-8 border-2 border-gray-300 rounded-lg p-6 shadow-md mx-4 mb-4">
            <div>
                <h1 className="pb-6 font-bold text-2xl">Skills</h1>
                <p className="pb-4"> My journey in frontend development has equipped me with a robust set of skills, honed through hands-on experience with cutting-edge frameworks such as React and Next.js. Below, I showcase some of the key competencies I've mastered along the way</p>
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