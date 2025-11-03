import AstronautMarkus from "../../../assets/img/astronautmarkus/AstronautMarkus-01.png";
import { Menu, Github, Linkedin, User, Code, BookOpen, X, Instagram } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
    const [navOpen, setNavOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const isTransparent = (!isMobile && !scrolled && location.pathname === "/");

    const headerClass = `px-6 h-16 flex items-center justify-between transition-colors duration-300 fixed top-0 left-0 w-full z-50 ${
        isTransparent
            ? "bg-transparent"
            : "bg-white shadow"
    }`;

    const textClass = isTransparent
        ? "text-white hover:text-rose-700"
        : "text-gray-800 hover:text-rose-700";

    const iconTextClass = isTransparent
        ? "text-white hover:text-rose-700"
        : "text-gray-700 hover:text-rose-700";

    const blogBtnClass = isTransparent
        ? "bg-white text-rose-700 hover:bg-rose-700 hover:text-white"
        : "bg-rose-700 text-white hover:bg-rose-800";

    return (
        <>
            <header className={headerClass}>
                <div className="flex items-center gap-2">
                    <img src={AstronautMarkus} alt="Astronaut Markus" className="w-8 h-8 pointer-events-none" />
                    <Link to="/" className={`md:text-xl text-base font-bold tracking-tight transition-colors ${textClass}`}>
                        AstronautMarkusDev
                    </Link>
                </div>
                <nav className="hidden md:flex flex-1 justify-center items-center gap-6">
                    <Link to="/about-me" className={`flex items-center gap-2 transition-colors font-semibold ${iconTextClass}`}>
                        <User size={18} /> About Me
                    </Link>
                    <Link to="/projects" className={`flex items-center gap-2 transition-colors font-semibold ${iconTextClass}`}>
                        <Code size={18} /> Projects
                    </Link>
                    <a
                        href="https://github.com/astronautmarkus"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 transition-colors font-semibold ${iconTextClass}`}
                    >
                        <Github size={18} /> GitHub
                    </a>
                    <a
                        href="https://linkedin.com/in/markusreyes"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 transition-colors font-semibold ${iconTextClass}`}
                    >
                        <Linkedin size={18} /> LinkedIn
                    </a>
                    <a
                        href="https://instagram.com/astronautmarkusdev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 transition-colors font-semibold ${iconTextClass}`}
                    >
                        <Instagram size={18} /> Instagram
                    </a>
                </nav>
                <a
                    href="https://blog.astronautmarkus.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full transition-all font-semibold ${blogBtnClass} hover:scale-105 transform duration-300`}
                >
                    <BookOpen size={18} /> blog.astronautmarkus.dev
                </a>
                <button
                    className={`md:hidden p-2 rounded-full transition-colors ml-2 ${
                        scrolled ? "bg-gray-100 text-gray-800 hover:bg-rose-700 hover:text-white" : "bg-white text-rose-700 hover:bg-rose-700 hover:text-white"
                    }`}
                    onClick={() => setNavOpen(!navOpen)}
                    aria-label={navOpen ? "Cerrar menú" : "Abrir menú"}
                >
                    {navOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </header>

            <div
                className={`fixed top-16 left-0 w-full bg-white transition-transform duration-300 z-40 md:hidden ${
                    navOpen ? "translate-y-0" : "-translate-y-full"
                }`}
                style={{ height: "calc(100vh - 64px)" }}
            >
                <div className="flex flex-col gap-4 px-6 py-8">
                    <Link
                        to="/about"
                        className={`flex items-center gap-2 transition-colors text-lg font-medium ${iconTextClass}`}
                        onClick={() => setNavOpen(false)}
                    >
                        <User size={20} /> About Me
                    </Link>
                    <Link
                        to="/projects"
                        className={`flex items-center gap-2 transition-colors text-lg font-medium ${iconTextClass}`}
                        onClick={() => setNavOpen(false)}
                    >
                        <Code size={20} /> Projects
                    </Link>
                    <a
                        href="https://github.com/astronautmarkus"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 transition-colors text-lg font-medium ${iconTextClass}`}
                        onClick={() => setNavOpen(false)}
                    >
                        <Github size={20} /> GitHub
                    </a>
                    <a
                        href="https://linkedin.com/in/markusreyes"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 transition-colors text-lg font-medium ${iconTextClass}`}
                        onClick={() => setNavOpen(false)}
                    >
                        <Linkedin size={20} /> LinkedIn
                    </a>
                    <a
                        href="https://blog.astronautmarkus.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors font-semibold text-lg ${blogBtnClass}`}
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