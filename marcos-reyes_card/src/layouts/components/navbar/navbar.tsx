import { useState } from "react";
import { Link } from "react-router-dom";
import { Home, FolderOpen, Briefcase, Mail } from "lucide-react";

function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="w-full">
            <nav className="w-full max-w-7xl mx-auto my-4 bg-gray-800 rounded-2xl shadow-lg flex items-center px-4 py-1 md:px-6 md:py-2">
                <img
                    src="/favicon.jpg"
                    alt="favicon"
                    className="w-8 h-8 rounded-full mr-3 select-none"
                    draggable={false}
                />
                <span className="text-lg md:text-xl font-bold text-white mr-auto select-none">
                    astronautmarkus.dev
                </span>

                <button
                    className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg focus:outline-none"
                    onClick={() => setOpen(!open)}
                    aria-label="Abrir menú"
                >
                    <span
                        className={`block w-7 h-1 rounded bg-rose-700 mb-1 transition-all duration-300 ${
                            open ? "bg-white" : ""
                        } hover:bg-white`}
                    />
                    <span
                        className={`block w-7 h-1 rounded bg-rose-700 mb-1 transition-all duration-300 ${
                            open ? "bg-white" : ""
                        } hover:bg-white`}
                    />
                    <span
                        className={`block w-7 h-1 rounded bg-rose-700 transition-all duration-300 ${
                            open ? "bg-white" : ""
                        } hover:bg-white`}
                    />
                </button>

                <div className="hidden md:flex gap-2 md:gap-4">
                    <Link
                        to="/"
                        className="flex items-center gap-2 px-2 py-1 md:px-4 md:py-2 rounded-lg border border-transparent hover:border-transparent transition-colors hover:underline hover:underline-offset-4 hover:decoration-white"
                    >
                        <Home size={20} className="text-rose-700" />
                        <span className="text-xs md:text-sm font-medium text-white">Inicio</span>
                    </Link>
                    <Link
                        to="/proyectos"
                        className="flex items-center gap-2 px-2 py-1 md:px-4 md:py-2 rounded-lg border border-transparent hover:border-transparent transition-colors hover:underline hover:underline-offset-4 hover:decoration-white"
                    >
                        <FolderOpen size={20} className="text-rose-700" />
                        <span className="text-xs md:text-sm font-medium text-white">Proyectos</span>
                    </Link>
                    <Link
                        to="/experiencia"
                        className="flex items-center gap-2 px-2 py-1 md:px-4 md:py-2 rounded-lg border border-transparent hover:border-transparent transition-colors hover:underline hover:underline-offset-4 hover:decoration-white"
                    >
                        <Briefcase size={20} className="text-rose-700" />
                        <span className="text-xs md:text-sm font-medium text-white">Experiencia</span>
                    </Link>
                    <Link
                        to="/contacto"
                        className="flex items-center gap-2 px-2 py-1 md:px-4 md:py-2 rounded-lg border border-transparent hover:border-transparent transition-colors hover:underline hover:underline-offset-4 hover:decoration-white"
                    >
                        <Mail size={20} className="text-rose-700" />
                        <span className="text-xs md:text-sm font-medium text-white">Contacto</span>
                    </Link>
                </div>

                {open && (
                    <div className="absolute top-20 right-4 bg-gray-800 rounded-2xl shadow-lg flex flex-col gap-2 px-4 py-4 md:hidden z-50 min-w-[220px]">
                        <Link
                            to="/"
                            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-transparent hover:border-transparent transition-colors hover:underline hover:underline-offset-4 hover:decoration-white"
                            onClick={() => setOpen(false)}
                        >
                            <Home size={20} className="text-rose-700" />
                            <span className="text-sm font-medium text-white">Inicio</span>
                        </Link>
                        <Link
                            to="/proyectos"
                            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-transparent hover:border-transparent transition-colors hover:underline hover:underline-offset-4 hover:decoration-white"
                            onClick={() => setOpen(false)}
                        >
                            <FolderOpen size={20} className="text-rose-700" />
                            <span className="text-sm font-medium text-white">Proyectos</span>
                        </Link>
                        <Link
                            to="/experiencia"
                            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-transparent hover:border-transparent transition-colors hover:underline hover:underline-offset-4 hover:decoration-white"
                            onClick={() => setOpen(false)}
                        >
                            <Briefcase size={20} className="text-rose-700" />
                            <span className="text-sm font-medium text-white">Experiencia</span>
                        </Link>
                        <Link
                            to="/contacto"
                            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-transparent hover:border-transparent transition-colors hover:underline hover:underline-offset-4 hover:decoration-white"
                            onClick={() => setOpen(false)}
                        >
                            <Mail size={20} className="text-rose-700" />
                            <span className="text-sm font-medium text-white">Contacto</span>
                        </Link>
                    </div>
                )}
            </nav>
        </header>
    );
}

export default Navbar;
