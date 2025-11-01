import { Mail, MapPin, Github, Linkedin, Globe } from "lucide-react"
import { Link } from "react-router-dom";
import { useI18n } from "../../contexts/i18nContext";
import ContactTux from "../../assets/img/animated/contact.gif";
import ContactBanner from "../../assets/img/banners/contact_banner.jpg";

function Contact() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen p-4">
      <div className="w-full max-w-6xl mx-auto space-y-8">
        
        <div className="hidden md:block">
          <div className="relative h-56 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center">
            <img
              src={ContactBanner}
              alt="Contact Banner"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
            <div className="relative z-10 flex flex-col items-center justify-center w-full">
              <div className="flex items-center gap-8 justify-center">
                <div className="text-center">
                  <h1 className="text-5xl font-extrabold text-white mb-2">{t('contact.title')}</h1>
                  <p className="text-2xl text-gray-200 font-semibold">{t('contact.subtitle')}</p>
                </div>
                <img
                  src={ContactTux}
                  alt="Contact"
                  className="w-48 h-48 object-contain drop-shadow-lg pointer-events-none"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="block md:hidden">
          <div className="relative h-32 w-full rounded-2xl overflow-hidden shadow-2xl bg-gray-900 flex items-center justify-center">
            <img
              src={ContactBanner}
              alt="Contact Banner"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
            <div className="relative z-10 flex flex-col items-center justify-center w-full">
              <h1 className="text-xl font-bold text-white mb-1 text-center">{t('contact.title')}</h1>
              <p className="text-sm text-gray-200 font-medium text-center">{t('contact.subtitle')}</p>
            </div>
            <img
              src={ContactTux}
              alt="Contact"
              className="absolute bottom-2 right-2 w-18 h-18 object-contain drop-shadow-lg pointer-events-none"
            />
          </div>
        </div>

        <div className="bg-gray-800/80 rounded-xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold mb-6 text-white text-center">{t('contact.personal-info')}</h2>
          <div className="space-y-6">
            <div className="flex items-center gap-4 p-4 bg-gray-800/80 rounded-lg transition-all duration-200">
              <Mail className="text-rose-700 w-6 h-6" />
              <div>
                <p className="text-white font-medium">{t('contact.email')}</p>
                <Link to="mailto:marcos@reyesandfriends.cl" className="text-gray-300 transition-colors">
                  marcos@reyesandfriends.cl
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-gray-800/80 rounded-lg transition-all duration-200">
              <MapPin className="text-rose-700 w-6 h-6" />
              <div>
                <p className="text-white font-medium">{t('contact.location')}</p>
                <p className="text-gray-300">{t('contact.location-data')}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-gray-800/80 rounded-lg transition-all duration-200">
              <Globe className="text-rose-700 w-6 h-6" />
              <div>
                <p className="text-white font-medium">{t('contact.website')}</p>
                <a href="https://astronautmarkus.dev" className="text-gray-300 transition-colors">
                  {t('contact.website-data')}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/80 rounded-xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold mb-6 text-white text-center">{t('contact.social-media')}</h2>
          <div className="space-y-6">
            <div className="flex items-center gap-4 p-4 bg-gray-800/80 rounded-lg transition-all duration-200">
              <Github className="text-rose-700 w-6 h-6" />
              <div>
                <p className="text-white font-medium">GitHub</p>
                <Link to="https://github.com/astronautmarkus" target="_blank" className="text-gray-300 transition-colors">
                  @astronautmarkus
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-gray-800/80 rounded-lg transition-all duration-200">
              <Linkedin className="text-rose-700 w-6 h-6" />
              <div>
                <p className="text-white font-medium">LinkedIn</p>
                <Link to="https://linkedin.com/in/markusreyes/" className="text-gray-300 transition-colors">
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