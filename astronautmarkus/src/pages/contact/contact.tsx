import { Mail, MapPin, Github, Linkedin, Instagram, Globe } from "lucide-react"
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="flex items-center justify-center p-4">
      <div className="w-full max-w-4xl mx-auto bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-700/50 p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Contacto</h1>
          <p className="text-gray-300 text-lg">¡Hablemos! Me encanta conectar con nuevas personas y explorar oportunidades</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-white mb-4">Información Personal</h2>
            
            <div className="flex items-center gap-4 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all duration-200">
              <Mail className="text-rose-700 w-6 h-6" />
              <div>
                <p className="text-white font-medium">Email</p>
                <Link to="mailto:marcos@reyesandfriends.cl" className="text-gray-300 hover:text-rose-400 transition-colors">
                  marcos@reyesandfriends.cl 
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all duration-200">
              <MapPin className="text-rose-700 w-6 h-6" />
              <div>
                <p className="text-white font-medium">Ubicación</p>
                <p className="text-gray-300">Santiago de Chile</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all duration-200">
              <Globe className="text-rose-700 w-6 h-6" />
              <div>
                <p className="text-white font-medium">Sitio Web</p>
                <a href="https://astronautmarkus.dev" className="text-gray-300 hover:text-rose-400 transition-colors">
                  astronautmarkus.dev (este mismo waja)
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-white mb-4">Redes Sociales</h2>
            
            <div className="flex items-center gap-4 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all duration-200">
              <Github className="text-rose-700 w-6 h-6" />
              <div>
                <p className="text-white font-medium">GitHub</p>
                <Link to="https://github.com/astronautmarkus" target="_blank" className="text-gray-300 hover:text-rose-400 transition-colors">
                  @astronautmarkus
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all duration-200">
              <Linkedin className="text-rose-700 w-6 h-6" />
              <div>
                <p className="text-white font-medium">LinkedIn</p>
                <Link to="https://linkedin.com/in/markusreyes/" className="text-gray-300 hover:text-rose-400 transition-colors">
                 markusreyes
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all duration-200">
              <Instagram className="text-rose-700 w-6 h-6" />
              <div>
                <p className="text-white font-medium">Instagram</p>
                <a href="https://instagram.com/sky._marc" className="text-gray-300 hover:text-rose-400 transition-colors">
                  @sky._marc
                </a>
              </div>
            </div>

          </div>

        </div>

        

      </div>
    </div>
  );
}

export default Contact;