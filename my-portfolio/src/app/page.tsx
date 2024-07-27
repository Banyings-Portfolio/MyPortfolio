import { ThemeProvider } from './ThemeContext/ThemeContext.jsx';
import Home from "@/app/home/page";

export const metadata = {
    title: 'Portfolio - Home',
    description: 'Home page of my portfolio.',
}

export default function myApp() {
    return (
        <ThemeProvider>
          <Home/>
        </ThemeProvider>
    );
}