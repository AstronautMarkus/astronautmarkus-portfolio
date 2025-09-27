import { useState } from "react"
import { Link } from "react-router-dom"
import { FolderOpen, Briefcase, Mail, CircleUser } from "lucide-react"
import { useI18n } from "../../../contexts/i18nContext"
import EnglishFlag from "../../../assets/img/flags/english.png"
import SpanishFlag from "../../../assets/img/flags/spanish.png"

function Navbar() {
  const [open, setOpen] = useState(false)
  const { language, setLanguage, t } = useI18n()

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es')
  }

  return (
    <header className="w-full">
      <div className="w-[95%] md:w-full max-w-7xl mx-auto bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-700/50 mt-2">
        <nav className="flex items-center px-4 py-3 md:px-6 md:py-4">
          <img src="/favicon.jpg" alt="favicon" className="w-8 h-8 rounded-full mr-3 pointer-events-none" />
          <Link 
            to="/" 
            className="text-lg md:text-xl font-bold text-white mr-auto group transition-all duration-200"
          >
            <span className="relative after:content-[''] after:block after:h-[2px] after:bg-rose-700 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left group-hover:after:scale-x-100">
              astronautmarkus.dev
            </span>
          </Link>

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

          <div className="hidden md:flex gap-2 md:gap-4 items-center">
            <Link
              to="/about-me"
              className="flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 rounded-lg border border-transparent transition-all duration-200 group"
            >
              <CircleUser size={20} className="text-rose-700" />
              <span className="text-xs md:text-sm font-medium text-white relative after:content-[''] after:block after:h-[2px] after:bg-rose-700 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left group-hover:after:scale-x-100">{t('navbar.about-me')}</span>
            </Link>
            <Link
              to="/portfolio"
              className="flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 rounded-lg border border-transparent transition-all duration-200 group"
            >
              <FolderOpen size={20} className="text-rose-700" />
              <span className="text-xs md:text-sm font-medium text-white relative after:content-[''] after:block after:h-[2px] after:bg-rose-700 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left group-hover:after:scale-x-100">{t('navbar.portfolio')}</span>
            </Link>
            <Link
              to="/experience"
              className="flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 rounded-lg border border-transparent transition-all duration-200 group"
            >
              <Briefcase size={20} className="text-rose-700" />
              <span className="text-xs md:text-sm font-medium text-white relative after:content-[''] after:block after:h-[2px] after:bg-rose-700 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left group-hover:after:scale-x-100">{t('navbar.experience')}</span>
            </Link>
            <Link
              to="/contact"
              className="flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 rounded-lg border border-transparent transition-all duration-200 group"
            >
              <Mail size={20} className="text-rose-700" />
              <span className="text-xs md:text-sm font-medium text-white relative after:content-[''] after:block after:h-[2px] after:bg-rose-700 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left group-hover:after:scale-x-100">{t('navbar.contact')}</span>
            </Link>

            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 rounded-lg border border-transparent transition-all duration-200 group cursor-pointer"
              title={`${language === 'es' ? 'Change to English' : 'Cambiar a Español'}`}
            >
              <span className="text-xs md:text-sm font-medium text-white relative after:content-[''] after:block after:h-[2px] after:bg-rose-700 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left group-hover:after:scale-x-100">
                {language === 'es' ? 'Español' : 'English'}
              </span>
              <img 
                src={language === 'es' ? SpanishFlag : EnglishFlag} 
                alt={language === 'es' ? 'Español' : 'English'}
                className="w-6 h-4 object-cover rounded-sm pointer-events-none"
              />
            </button> 
          </div>
        </nav>

        {open && (
          <div className="md:hidden border-t border-gray-700/50">
            <div className="flex flex-col gap-1 px-4 py-3">
              <Link
                to="/about-me"
                className="flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 group"
                onClick={() => setOpen(false)}
              >
                <CircleUser size={20} className="text-rose-700" />
                <span className="text-sm font-medium text-white relative after:content-[''] after:block after:h-[2px] after:bg-rose-700 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left group-hover:after:scale-x-100">{t('navbar.about-me')}</span>
              </Link>
              <Link
                to="/portfolio"
                className="flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 group"
                onClick={() => setOpen(false)}
              >
                <FolderOpen size={20} className="text-rose-700" />
                <span className="text-sm font-medium text-white relative after:content-[''] after:block after:h-[2px] after:bg-rose-700 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left group-hover:after:scale-x-100">{t('navbar.projects')}</span>
              </Link>
              <Link
                to="/experience"
                className="flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 group"
                onClick={() => setOpen(false)}
              >
                <Briefcase size={20} className="text-rose-700" />
                <span className="text-sm font-medium text-white relative after:content-[''] after:block after:h-[2px] after:bg-rose-700 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left group-hover:after:scale-x-100">{t('navbar.experience')}</span>
              </Link>
              <Link
                to="/contact"
                className="flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 group"
                onClick={() => setOpen(false)}
              >
                <Mail size={20} className="text-rose-700" />
                <span className="text-sm font-medium text-white relative after:content-[''] after:block after:h-[2px] after:bg-rose-700 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left group-hover:after:scale-x-100">{t('navbar.contact')}</span>
              </Link>
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 group"
              >
                <span className="text-sm font-medium text-white relative after:content-[''] after:block after:h-[2px] after:bg-rose-700 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left group-hover:after:scale-x-100">
                  {language === 'es' ? 'Español' : 'English'}
                </span>
                <img 
                  src={language === 'es' ? SpanishFlag : EnglishFlag} 
                  alt={language === 'es' ? 'Español' : 'English'}
                  className="w-6 h-4 object-cover rounded-sm"
                />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar