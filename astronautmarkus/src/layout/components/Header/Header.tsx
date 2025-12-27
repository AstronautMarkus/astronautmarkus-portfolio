import AstronautMarkus from "../../../assets/img/astronautmarkus/AstronautMarkus-01.png";
import { Menu, BookOpen, X, User, Code, Mail, GalleryThumbnails } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useI18n } from "../../../context/i18n";

function Header() {
    const [navOpen, setNavOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { language, setLanguage, t } = useI18n();

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
                        <User size={18} /> {t('header.aboutMe')}
                    </Link>
                    <Link to="/projects" className={`flex items-center gap-2 transition-colors font-semibold ${iconTextClass}`}>
                        <Code size={18} /> {t('header.projects')}
                    </Link>
                    <Link to="/tech-stack" className={`flex items-center gap-2 transition-colors font-semibold ${iconTextClass}`}>
                        <Code size={18} /> {t('header.techStack')}
                    </Link>
                    <Link to="/contact" className={`flex items-center gap-2 transition-colors font-semibold ${iconTextClass}`}>
                        <Mail size={18} /> {t('header.contact')}
                    </Link>
                    <Link to="/gallery" className={`flex items-center gap-2 transition-colors font-semibold ${iconTextClass}`}>
                        <GalleryThumbnails size={18} /> {t('header.gallery')}
                    </Link>
                </nav>
                <div className="hidden md:flex items-center gap-3">
                    <button
                        onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full transition-all font-semibold ${blogBtnClass} hover:scale-105 transform duration-300 cursor-pointer`}
                        aria-label="Change language"
                    >
                        <img
                            src={language === 'es' ? '/img/flags/spanish.svg' : '/img/flags/english.svg'}
                            alt={language === 'es' ? 'Español' : 'English'}
                            className="w-6 h-6 rounded pointer-events-none"
                        />
                        {language === 'es' ? 'Español' : 'English'}
                    </button>
                    <a
                        href="https://blog.astronautmarkus.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full transition-all font-semibold ${blogBtnClass} hover:scale-105 transform duration-300`}
                    >
                        <BookOpen size={18} /> {t('header.blog')}
                    </a>
                </div>
                <button
                    className={`md:hidden p-2 rounded-full transition-colors ml-2 ${
                        isTransparent
                            ? "bg-white text-rose-700 hover:bg-rose-700 hover:text-white"
                            : "bg-gray-100 text-gray-800 hover:bg-rose-700 hover:text-white"
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
                        to="/about-me"
                        className={`flex items-center gap-2 transition-colors text-lg font-medium ${iconTextClass}`}
                        onClick={() => setNavOpen(false)}
                    >
                        <User size={20} /> {t('header.aboutMe')}
                    </Link>
                    <Link
                        to="/projects"
                        className={`flex items-center gap-2 transition-colors text-lg font-medium ${iconTextClass}`}
                        onClick={() => setNavOpen(false)}
                    >
                        <Code size={20} /> {t('header.projects')}
                    </Link>
                    <Link
                        to="/tech-stack"
                        className={`flex items-center gap-2 transition-colors text-lg font-medium ${iconTextClass}`}
                        onClick={() => setNavOpen(false)}
                    >
                        <Code size={20} /> {t('header.techStack')}
                    </Link>
                    <Link
                        to="/contact"
                        className={`flex items-center gap-2 transition-colors text-lg font-medium ${iconTextClass}`}
                        onClick={() => setNavOpen(false)}
                    >
                        <Mail size={20} /> {t('header.contact')}
                    </Link>
                    <Link
                        to="/gallery"
                        className={`flex items-center gap-2 transition-colors text-lg font-medium ${iconTextClass}`}
                        onClick={() => setNavOpen(false)}
                    >
                        <GalleryThumbnails size={20} /> {t('header.gallery')}
                    </Link>
                    <button
                        onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all font-semibold text-lg ${blogBtnClass} hover:scale-105 transform duration-300 cursor-pointer`}
                    >
                        <img
                            src={language === 'es' ? '/img/flags/spanish.svg' : '/img/flags/english.svg'}
                            alt={language === 'es' ? 'Español' : 'English'}
                            className="w-6 h-6 rounded pointer-events-none"
                        />
                        {language === 'es' ? 'Español' : 'English'}
                    </button>
                    <a
                        href="https://blog.astronautmarkus.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors font-semibold text-lg ${blogBtnClass}`}
                        onClick={() => setNavOpen(false)}
                    >
                        <BookOpen size={20} /> {t('header.blog')}
                    </a>
                </div>
            </div>
        </>
    );
}

export default Header;