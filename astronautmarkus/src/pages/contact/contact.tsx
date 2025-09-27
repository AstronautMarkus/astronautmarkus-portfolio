import { Mail, MapPin, Github, Linkedin, Globe } from "lucide-react"
import { Link } from "react-router-dom";
import { useI18n } from "../../contexts/i18nContext";

function Contact() {
  const { t } = useI18n();

  return (
    <div className="flex items-center justify-center p-4">
      <div className="w-full max-w-6xl mx-auto bg-gray-800/80 rounded-2xl shadow-lg border border-gray-700/50 p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('contact.title')}</h1>
          <p className="text-gray-300 text-lg">{t('contact.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-white mb-4">{t('contact.personalInfo')}</h2>
            <div className="flex items-center gap-4 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all duration-200">
              <Mail className="text-rose-700 w-6 h-6" />
              <div>
                <p className="text-white font-medium">{t('contact.email')}</p>
                <Link to="mailto:marcos@reyesandfriends.cl" className="text-gray-300 hover:text-rose-400 transition-colors">
                  marcos@reyesandfriends.cl
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all duration-200">
              <MapPin className="text-rose-700 w-6 h-6" />
              <div>
                <p className="text-white font-medium">{t('contact.location')}</p>
                <p className="text-gray-300">{t('contact.location-data')}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all duration-200">
              <Globe className="text-rose-700 w-6 h-6" />
              <div>
                <p className="text-white font-medium">{t('contact.website')}</p>
                <a href="https://astronautmarkus.dev" className="text-gray-300 hover:text-rose-400 transition-colors">
                  {t('contact.website-data')}
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;