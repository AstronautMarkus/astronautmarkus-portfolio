import { Github, Linkedin, Mail, Copyright } from "lucide-react"

const year = new Date().getFullYear();

function Footer() {
  return (
    <footer className="w-full mt-auto">
      <div className="w-[95%] md:w-full max-w-7xl mx-auto bg-gray-800/80 rounded-2xl shadow-lg mb-2">
        <div className="flex flex-col md:flex-row items-center justify-between px-4 py-3 md:px-6 md:py-4">
          
          <div className="flex items-center mb-3 md:mb-0">
            <img src="/favicon.jpg" alt="favicon" className="w-6 h-6 rounded-full mr-2 pointer-events-none" />
            <span className="text-sm font-medium text-white flex items-center gap-1">
              <Copyright size={14} /> {year} AstronautMarkus
            </span>
          </div>

          <div className="flex items-center gap-2 mb-3 md:mb-0">
            <a href="https://open.spotify.com/intl-es/track/7CbuTYkrYpqFeVVtmuuGaJ" target="_blank" className="text-white flex items-center gap-1 text-sm italic cursor-pointer group">
              <span className="relative after:content-[''] after:block after:h-[2px] after:bg-rose-700 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left group-hover:after:scale-x-100">
                "If I told you I loved you would you still have survived?"
              </span>
            </a>
          </div>

          <div className="flex gap-2">
            <a
              href="https://github.com/astronautmarkus"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-lg border border-transparent transition-all duration-200 group"
            >
              <Github size={18} className="text-rose-700" />
              <span className="text-xs font-bold text-white relative after:content-[''] after:block after:h-[2px] after:bg-rose-700 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left group-hover:after:scale-x-100">
              GitHub
              </span>
            </a>
            <a
              href="https://linkedin.com/in/markusreyes"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-lg border border-transparent transition-all duration-200 group"
            >
              <Linkedin size={18} className="text-rose-700" />
              <span className="text-xs font-bold text-white relative after:content-[''] after:block after:h-[2px] after:bg-rose-700 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left group-hover:after:scale-x-100">
                LinkedIn
              </span>
            </a>
            <a
              href="mailto:marcos@reyesandfriends.cl"
              className="flex items-center gap-2 px-3 py-2 rounded-lg border border-transparent transition-all duration-200 group"
            >
              <Mail size={18} className="text-rose-700" />
              <span className="text-xs font-bold text-white relative after:content-[''] after:block after:h-[2px] after:bg-rose-700 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left group-hover:after:scale-x-100">
                Email
              </span>
            </a>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer
