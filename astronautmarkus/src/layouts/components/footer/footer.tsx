import { Github, Linkedin, Mail, Heart, Copyright, Coffee } from "lucide-react"

const year = new Date().getFullYear();

function Footer() {
  return (
    <footer className="w-full mt-auto">
      <div className="w-full max-w-7xl mx-auto bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-700/50 mb-2">
        <div className="flex flex-col md:flex-row items-center justify-between px-4 py-3 md:px-6 md:py-4">
          
          <div className="flex items-center mb-3 md:mb-0">
            <img src="/favicon.jpg" alt="favicon" className="w-6 h-6 rounded-full mr-2 select-none" draggable={false} />
            <span className="text-sm font-medium text-white select-none flex items-center gap-1">
              <Copyright size={14} /> {year} AstronautMarkus
            </span>
          </div>

          <div className="flex items-center gap-2 mb-3 md:mb-0">
            <span className="text-xs text-gray-300 flex items-center gap-1">
              Hecho con <Heart size={12} className="text-rose-700" /> y mucho <Coffee size={12} className="text-rose-700" />
            </span>
          </div>

          <div className="flex gap-2">
            <a
              href="https://github.com/astronautmarkus"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-lg border border-transparent hover:bg-gray-700/50 transition-all duration-200"
            >
              <Github size={18} className="text-rose-700" />
              <span className="text-xs font-medium text-white">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/markusreyes"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-lg border border-transparent hover:bg-gray-700/50 transition-all duration-200"
            >
              <Linkedin size={18} className="text-rose-700" />
              <span className="text-xs font-medium text-white">LinkedIn</span>
            </a>
            <a
              href="mailto:marcos@reyesandfriends.cl"
              className="flex items-center gap-2 px-3 py-2 rounded-lg border border-transparent hover:bg-gray-700/50 transition-all duration-200"
            >
              <Mail size={18} className="text-rose-700" />
              <span className="text-xs font-medium text-white">Email</span>
            </a>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer
