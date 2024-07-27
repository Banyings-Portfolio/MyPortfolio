import SkillsWidget from "@/app/about/Skills/SkillsWidget";
import WorkWidget from "@/app/about/Work/WorkWidget";
/*import LogoWidget from "@/app/about/Logo/LogoWidget";*/
import Follow from "./Follow/Follow";

const About: React.FC = () => {
    return (
        <div>
            <WorkWidget />
            <SkillsWidget />
            <Follow />
        </div>
    );
}

export default About;