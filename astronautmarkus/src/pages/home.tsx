import { Github, Linkedin, Mail, MapPin, Globe, Code, Server, Shield, Wrench, Instagram } from "lucide-react"
import BannerCard from "../assets/img/banner_card.jpg";


function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto shadow-xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg overflow-hidden transition-colors">
        
        
        <div className="w-full h-32 md:h-40 bg-gradient-to-r from-blue-500 to-purple-600 relative">
          <img
            src={BannerCard}
            alt="Banner"
            className="absolute inset-0 w-full h-full object-cover opacity-70"
            style={{ zIndex: 0 }}
          />
          <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 1 }}>
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-semibold">
              MR
            </div>
          </div>
        </div>

        <div className="text-center pb-4 px-6 pt-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Marcos Reyes Martínez</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 font-medium">Full Stack Developer</p>
          <div className="flex items-center justify-center gap-1 text-sm text-gray-500 dark:text-gray-400 mt-2">
            <MapPin className="w-4 h-4" />
            <span>Santiago de Chile</span>
          </div>
        </div>

        <div className="px-6 pb-6 space-y-6">
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Analista Programador con experiencia en el desarrollo de aplicaciones web FullStack y experiencia en administración de sistemas. Me apasiona aprender nuevas tecnologías y mejorar mis habilidades constantemente. Busco contribuir con mi experiencia en proyectos desafiantes y colaborar en equipos multidisciplinarios.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              <Code className="w-3 h-3" />
              FullStack
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              <Server className="w-3 h-3" />
              SysAdmin
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
              <Shield className="w-3 h-3" />
              Redes y Seguridad
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
              <Wrench className="w-3 h-3" />
              DevOps
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <a
              href="https://github.com/astronautmarkus"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-transparent border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-900 hover:text-white hover:border-gray-900 dark:hover:bg-gray-700 transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/markusreyes/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-transparent border border-gray-300 dark:border-gray-600 rounded-md hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>

            <a
              href="https://instagram.com/sky._marc"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-transparent border border-gray-300 dark:border-gray-600 rounded-md hover:bg-pink-500 hover:text-white hover:border-pink-500 transition-colors"
            >
              <Instagram className="w-4 h-4" />
              Instagram
            </a>

            <a
              href="mailto:marcos@reyesandfriends.cl"
              className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-transparent border border-gray-300 dark:border-gray-600 rounded-md hover:bg-green-600 hover:text-white hover:border-green-600 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Email
            </a>
          </div>

          <div className="pt-4">
            <a
              href="#portfolio"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 dark:from-blue-700 dark:to-purple-700 dark:hover:from-blue-800 dark:hover:to-purple-800 rounded-md transition-all"
            >
              <Globe className="w-4 h-4" />
              Ver Portfolio
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
