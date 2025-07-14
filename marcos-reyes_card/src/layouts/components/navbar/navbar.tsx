import { useState } from "react"
import { Link } from "react-router-dom"
import { Home, FolderOpen, Briefcase, Mail } from "lucide-react"

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full">
      <div className="w-full max-w-7xl mx-auto bg-gray-800/95 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-700/50 mt-2">
        <nav className="flex items-center px-4 py-3 md:px-6 md:py-4">
          <img src="/favicon.jpg" alt="favicon" className="w-8 h-8 rounded-full mr-3 select-none" draggable={false} />
          <span className="text-lg md:text-xl font-bold text-white mr-auto select-none">astronautmarkus.dev</span>

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
              className="flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 rounded-lg border border-transparent hover:bg-gray-700/50 transition-all duration-200 "
            >
              <Home size={20} className="text-rose-700" />
              <span className="text-xs md:text-sm font-medium text-white">Inicio</span>
            </Link>
            <Link
              to="/proyectos"
              className="flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 rounded-lg border border-transparent hover:bg-gray-700/50 transition-all duration-200"
            >
              <FolderOpen size={20} className="text-rose-700" />
              <span className="text-xs md:text-sm font-medium text-white">Proyectos</span>
            </Link>
            <Link
              to="/experiencia"
              className="flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 rounded-lg border border-transparent hover:bg-gray-700/50 transition-all duration-200"
            >
              <Briefcase size={20} className="text-rose-700" />
              <span className="text-xs md:text-sm font-medium text-white">Experiencia</span>
            </Link>
            <Link
              to="/contacto"
              className="flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 rounded-lg border border-transparent hover:bg-gray-700/50 transition-all duration-200"
            >
              <Mail size={20} className="text-rose-700" />
              <span className="text-xs md:text-sm font-medium text-white">Contacto</span>
            </Link>
          </div>
        </nav>

        {open && (
          <div className="md:hidden border-t border-gray-700/50">
            <div className="flex flex-col gap-1 px-4 py-3">
              <Link
                to="/"
                className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-gray-700/50 transition-all duration-200"
                onClick={() => setOpen(false)}
              >
                <Home size={20} className="text-rose-700" />
                <span className="text-sm font-medium text-white">Inicio</span>
              </Link>
              <Link
                to="/proyectos"
                className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-gray-700/50 transition-all duration-200"
                onClick={() => setOpen(false)}
              >
                <FolderOpen size={20} className="text-rose-700" />
                <span className="text-sm font-medium text-white">Proyectos</span>
              </Link>
              <Link
                to="/experiencia"
                className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-gray-700/50 transition-all duration-200"
                onClick={() => setOpen(false)}
              >
                <Briefcase size={20} className="text-rose-700" />
                <span className="text-sm font-medium text-white">Experiencia</span>
              </Link>
              <Link
                to="/contacto"
                className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-gray-700/50 transition-all duration-200"
                onClick={() => setOpen(false)}
              >
                <Mail size={20} className="text-rose-700" />
                <span className="text-sm font-medium text-white">Contacto</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
