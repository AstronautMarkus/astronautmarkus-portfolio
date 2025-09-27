import { Mail, MapPin, Globe, Code, Server, Shield, Wrench } from "lucide-react"
import BannerCard from "../../assets/img/banner_card.jpg";
import ProfilePicture from "../../assets/img/profile_picture.jpg";
import { Link } from "react-router-dom";
import { useI18n } from "../../contexts/i18nContext";

function Home() {
  const { t } = useI18n()

  return (
    <div className="min-h-screen p-4">
      <div className="w-full max-w-7xl mx-auto space-y-8">

        <div className="hidden md:block">
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={BannerCard}
              alt="Banner"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
            <div className="absolute bottom-8 left-8 flex items-end gap-6">
              <img
                src={ProfilePicture}
                alt="Profile"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-2xl border-4 border-white/20 pointer-events-none"
              />
              <div className="pb-4">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{t('home.name')}</h1>
                <p className="text-xl md:text-2xl text-gray-200 font-medium mb-2">{t('home.title')}</p>
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span className="text-lg">{t('home.location')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  <a
                    href="mailto:marcos@reyesandfriends.cl"
                    className="text-lg underline hover:text-white transition-colors"
                  >
                    marcos@reyesandfriends.cl
                  </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="block md:hidden">
          <div className="relative aspect-square w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl flex items-end justify-center bg-gray-900">
            <img
              src={BannerCard}
              alt="Banner"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
            <div className="relative z-10 flex flex-col items-center w-full pb-6 px-4">
              <img
                src={ProfilePicture}
                alt="Profile"
                className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover shadow-2xl border-4 border-white/20 mb-4 pointer-events-none"
              />
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-1 text-center">{t('home.name')}</h1>
              <p className="text-lg md:text-xl text-gray-200 font-medium mb-1 text-center">{t('home.title')}</p>
              <div className="flex items-center gap-2 text-gray-300 justify-center">
                <MapPin className="w-5 h-5" />
                <span className="text-base md:text-lg">{t('home.location')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 shadow-xl">
                <h2 className="text-2xl font-bold text-white mb-4">{t('home.aboutTitle')}</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {t('home.aboutText')}
                </p>
              </div>
            </div>

            <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-4">{t('home.contactProjectsTitle')}</h3>
              <div className="space-y-3">
                <Link
                  to="/contact"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-white border border-white hover:bg-white hover:text-gray-900 rounded-lg transition-all"
                >
                  <Mail className="w-4 h-4" />
                  {t('home.contactButton')}
                </Link>
                <Link
                  to="/portfolio"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-white bg-rose-700 hover:bg-rose-800 rounded-lg transition-all"
                >
                  <Globe className="w-4 h-4" />
                  {t('home.portfolioButton')}
                </Link>
              </div>
            </div>
          </div>

            <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6">{t('home.servicesTitle')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 bg-blue-900/30 rounded-lg">
              <Code className="w-6 h-6 text-blue-300" />
              <span className="text-blue-200 font-medium">{t('home.services.webDev')}</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-green-900/30 rounded-lg">
              <Server className="w-6 h-6 text-green-300" />
              <span className="text-green-200 font-medium">{t('home.services.serverAdmin')}</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-red-900/30 rounded-lg">
              <Shield className="w-6 h-6 text-red-300" />
              <span className="text-red-200 font-medium">{t('home.services.security')}</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-purple-900/30 rounded-lg">
              <Wrench className="w-6 h-6 text-purple-300" />
              <span className="text-purple-200 font-medium">{t('home.services.devops')}</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-yellow-900/30 rounded-lg">
              <Shield className="w-6 h-6 text-yellow-300" />
              <span className="text-yellow-200 font-medium">{t('home.services.consulting')}</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg opacity-60">
              <Globe className="w-6 h-6 text-black" />
              <span className="text-black font-medium">{t('home.services.anything')}</span>
              </div>
            </div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Home