import { Code, Camera, FileText, Heart, Github,Copyright } from "lucide-react"
import { Link } from "react-router-dom";

const year = new Date().getFullYear();

function Extras() {
  return (
    <div className="flex items-center justify-center p-4">
      <div className="w-full max-w-4xl mx-auto bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-700/50 p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Créditos y Extras</h1>
          <p className="text-gray-300 text-lg">Información adicional sobre este proyecto y sus recursos</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-white mb-4">Tecnologías Utilizadas</h2>
            
            <div className="flex items-center gap-4 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all duration-200">
              <Code className="text-rose-700 w-6 h-6" />
              <div>
                <p className="text-white font-medium">React + TypeScript</p>
                <p className="text-gray-300">Framework principal del proyecto</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all duration-200">
              <Code className="text-rose-700 w-6 h-6" />
              <div>
                <p className="text-white font-medium">Vite</p>
                <p className="text-gray-300">Build tool y dev server</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all duration-200">
              <Code className="text-rose-700 w-6 h-6" />
              <div>
                <p className="text-white font-medium">Tailwind CSS</p>
                <p className="text-gray-300">Estilos y diseño responsive</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all duration-200">
              <Code className="text-rose-700 w-6 h-6" />
              <div>
                <p className="text-white font-medium">Lucide React</p>
                <p className="text-gray-300">Iconos utilizados en la web</p>
              </div>
            </div>

          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-white mb-4">Recursos y Créditos</h2>

            <div className="flex items-center gap-4 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all duration-200">
              <Camera className="text-rose-700 w-6 h-6" />
              <div>
                <p className="text-white font-medium">Unplash</p>
                <p className="text-gray-300">Imagenes utiizadas sin fines de lucro</p>
                <Link to="https://unsplash.com/es" target="_blank" className="text-rose-400 hover:text-rose-300 transition-colors text-sm">
                  Agradecimientos a Aldebaran S y a la NASA
                </Link>
              </div>
            </div>
            


            <div className="flex items-center gap-4 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all duration-200">
              <Heart className="text-rose-700 w-6 h-6" />
              <div>
                <p className="text-white font-medium">Desarrollado con</p>
                <p className="text-gray-300">Mucho café y pasión por el código</p>
              </div>
            </div>



            <div className="flex items-center gap-4 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all duration-200">
              <Github className="text-rose-700 w-6 h-6" />
              <div>
                <p className="text-white font-medium">Código Fuente</p>
                <Link to="https://github.com/astronautmarkus/astronautmarkus-site" target="_blank" className="text-gray-300 hover:text-rose-400 transition-colors">
                  Ver en GitHub
                </Link>
              </div>
            </div>

          </div>

        </div>

        <div className="mt-8 pt-8 border-t border-gray-700/50">
          <div className="flex items-center gap-4 p-4 bg-gray-700/30 rounded-lg">
            <FileText className="text-rose-700 w-6 h-6" />
            <div>
              <p className="text-white font-medium mb-2">Licencia MIT</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Este proyecto está bajo la licencia MIT. Puedes usar, modificar y distribuir el código libremente. 
                Solo se requiere mantener el aviso de copyright y la licencia en las copias.
              </p>
              <p className="text-gray-400 text-xs mt-2 flex items-center gap-1">
                <Copyright size={10} />
                {year} Marcos Reyes - Todos los derechos reservados
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Extras;