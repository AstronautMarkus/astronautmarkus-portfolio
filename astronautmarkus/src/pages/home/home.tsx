import { Mail, MapPin, Globe, Code, Server, Shield, Wrench } from "lucide-react"
import BannerCard from "../../assets/img/banner_card.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto shadow-xl border-0 bg-gray-800/80 backdrop-blur-sm rounded-lg overflow-hidden transition-colors">
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
          <h1 className="text-2xl font-bold text-white">Marcos Reyes Martínez</h1>
          <p className="text-lg text-gray-300 font-medium">Full Stack Developer</p>
          <div className="flex items-center justify-center gap-1 text-sm text-gray-400 mt-2">
            <MapPin className="w-4 h-4" />
            <span>Santiago de Chile</span>
          </div>
        </div>

        <div className="px-6 pb-6 space-y-6">
          <div className="text-center">
            <p className="text-gray-300 text-sm leading-relaxed">
              Analista Programador con experiencia FullStack y administración de sistemas. Apasionado por aprender y aportar en proyectos desafiantes.
            </p>
          </div>

            <div className="flex flex-wrap gap-2 justify-center">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-900/70 text-blue-200">
              <Code className="w-3 h-3" />
              FullStack
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-900/70 text-green-200">
              <Server className="w-3 h-3" />
              SysAdmin
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-900/70 text-red-200">
              <Shield className="w-3 h-3" />
              Redes y Seguridad
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-900/70 text-purple-200">
              <Wrench className="w-3 h-3" />
              DevOps
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-900/70 text-yellow-200">
              <Shield className="w-3 h-3" />
              AppSec / DevSecOps
              </span>
            </div>

          
          <div className="pt-4">
            <Link
              to="/contact"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white border border-white hover:bg-white hover:text-blue-700 rounded-md transition-all mb-2 bg-transparent"
            >
              <Mail className="w-4 h-4" />
              Contacto
            </Link>

            <Link
              to="/portfolio"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-rose-700 hover:bg-rose-800 rounded-md transition-all"
            >
              <Globe className="w-4 h-4" />
              Ver Proyectos / Portafolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
