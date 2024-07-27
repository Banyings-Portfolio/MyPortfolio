import HomeWidget from "@/app/home/Homewidget/HomeWidget";
import SignupWidget from "@/app/home/SignUp/SignupWidget";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
            <div className="max-w-4xl w-full space-y-12 space-x-0">
                <HomeWidget />
                <SignupWidget />
            </div>
        </div>
    );
}