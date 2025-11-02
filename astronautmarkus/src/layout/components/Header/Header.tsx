import AstronautMarkus from "../../../assets/img/astronautmarkus/AstronautMarkus-01.png";
import { Menu, Github, Linkedin, User, Code, BookOpen, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <>
            <header className="bg-white dark:bg-gray-900 shadow-lg px-6 py-4 flex items-center justify-between transition-colors duration-300 relative z-50">
                <div className="flex items-center gap-2">
                    <img src={AstronautMarkus} alt="Astronaut Markus" className="w-8 h-8 pointer-events-none" />
                    <Link to="/" className="md:text-xl text-base font-bold text-gray-800 dark:text-white tracking-tight hover:text-rose-700 transition-colors">
                        AstronautMarkusDev
                    </Link>
                </div>
                <nav className="hidden md:flex flex-1 justify-center items-center gap-6">
                    <Link to="/about" className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-rose-700 transition-colors">
                        <User size={18} /> About Me
                    </Link>
                    <Link to="/projects" className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-rose-700 transition-colors">
                        <Code size={18} /> Projects
                    </Link>
                    <a
                        href="https://github.com/astronautmarkus"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-rose-700 transition-colors"
                    >
                        <Github size={18} /> GitHub
                    </a>
                    <a
                        href="https://linkedin.com/in/markusreyes"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-rose-700 transition-colors"
                    >
                        <Linkedin size={18} /> LinkedIn
                    </a>
                </nav>
                <a
                    href="https://blog.astronautmarkus.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-700 text-white hover:bg-rose-800 transition-colors font-semibold"
                >
                    <BookOpen size={18} /> Blog informático
                </a>
                <button
                    className="md:hidden p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-rose-700 hover:text-white transition-colors ml-2"
                    onClick={() => setNavOpen(!navOpen)}
                    aria-label={navOpen ? "Cerrar menú" : "Abrir menú"}
                >
                    {navOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </header>

            <div
                className={`fixed top-[64px] left-0 w-full bg-white dark:bg-gray-900 shadow-lg transition-transform duration-300 z-40 md:hidden ${
                    navOpen ? "translate-y-0" : "-translate-y-full"
                }`}
                style={{ height: "calc(100vh - 64px)" }}
            >
                <div className="flex flex-col gap-4 px-6 py-8">
                    <Link
                        to="/about"
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-rose-700 transition-colors text-lg font-medium"
                        onClick={() => setNavOpen(false)}
                    >
                        <User size={20} /> About Me
                    </Link>
                    <Link
                        to="/projects"
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-rose-700 transition-colors text-lg font-medium"
                        onClick={() => setNavOpen(false)}
                    >
                        <Code size={20} /> Projects
                    </Link>
                    <a
                        href="https://github.com/astronautmarkus"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-rose-700 transition-colors text-lg font-medium"
                        onClick={() => setNavOpen(false)}
                    >
                        <Github size={20} /> GitHub
                    </a>
                    <a
                        href="https://linkedin.com/in/markusreyes"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-rose-700 transition-colors text-lg font-medium"
                        onClick={() => setNavOpen(false)}
                    >
                        <Linkedin size={20} /> LinkedIn
                    </a>
                    <a
                        href="https://blog.astronautmarkus.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-rose-700 text-white hover:bg-rose-800 transition-colors font-semibold text-lg"
                        onClick={() => setNavOpen(false)}
                    >
                        <BookOpen size={20} /> Blog informático
                    </a>
                </div>
            </div>
        </>
    );
}

export default Header;