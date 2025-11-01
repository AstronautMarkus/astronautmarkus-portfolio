import { Calendar, Book, Award, Heart } from "lucide-react";
import BioPicture from "../../assets/img/bio/bio-picture.png";
import { useI18n } from "../../contexts/i18nContext";
import TetoTetoris from "../../assets/img/animated/teto-tetoris.gif";
import BioBanner from "../../assets/img/banners/bio_banner.jpg";

function Bio() {

  const { t } = useI18n();

  return (
    <div className="min-h-screen p-4">
      <div className="w-full max-w-6xl mx-auto space-y-8">
        
        <div className="hidden md:block">
          <div className="relative h-56 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center">
            <img
              src={BioBanner}
              alt="Biography Banner"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
            <div className="relative z-10 flex flex-col items-center justify-center w-full">
              <div className="flex items-center gap-8 justify-center">
                <div className="text-center">
                  <h1 className="text-5xl font-extrabold text-white mb-2">{t("bio.title")}</h1>
                  <p className="text-2xl text-gray-200 font-semibold">{t("bio.subtitle")}</p>
                </div>
                <img
                  src={TetoTetoris}
                  alt="Teto Tetoris"
                  className="w-48 h-48 object-contain drop-shadow-lg pointer-events-none"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="block md:hidden">
          <div className="relative h-32 w-full rounded-2xl overflow-hidden shadow-2xl bg-gray-900 flex items-center justify-center">
            <img
              src={BioBanner}
              alt="Biography Banner"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
            <div className="relative z-10 flex flex-col items-center justify-center w-full">
              <h1 className="text-xl font-bold text-white mb-1 text-center">{t("bio.title")}</h1>
              <p className="text-sm text-gray-200 font-medium text-center">{t("bio.subtitle")}</p>
            </div>
            <img
              src={TetoTetoris}
              alt="Teto Tetoris"
              className="absolute bottom-2 right-2 w-18 h-18 object-contain drop-shadow-lg pointer-events-none"
            />
          </div>
        </div>

        <div className="bg-gray-800/80 rounded-xl p-8 shadow-xl">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            <div className="flex-shrink-0 lg:w-80 flex justify-center lg:justify-start">
              <img
                src={BioPicture}
                alt="Marcos Reyes Martínez"
                className="w-64 h-64 lg:w-80 lg:h-80 border-2 border-rose-700 shadow-lg pointer-events-none object-cover"
              />
            </div>
            <div className="flex-1 text-center lg:text-left lg:pl-4">
              <h2 className="text-4xl lg:text-4xl font-bold text-white mb-6">Marcos Reyes Martínez</h2>
                <div className="mb-6 flex flex-col items-center lg:items-start">
                <p className="text-gray-300 text-xl leading-relaxed">
                  {t("bio.personalIntro")}
                  <button
                  type="button"
                  className="ml-2 text-rose-700 underline font-bold hover:text-rose-800 transition-colors cursor-pointer"
                  onClick={() => {
                    const el = document.getElementById("full-name-tooltip");
                    if (el) el.classList.toggle("hidden");
                  }}
                  >
                  {t("bio.showFullName")}
                  </button>
                </p>
                <span
                  id="full-name-tooltip"
                  className="hidden mt-2 bg-gray-800/80 text-white text-base rounded px-4 py-2 shadow-lg"
                >
                  Marcos Andrés Alberto Reyes Martínez
                </span>
                </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {t("bio.bioFirstPart")}
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                {t("bio.bioSecondPart")}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/80 rounded-xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold mb-6 text-white text-center">{t("bio.canonical-events.title")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800/80 rounded-lg p-6 hover:shadow-2xl transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 text-rose-700 mt-1">
                  <Calendar size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{t("bio.canonical-events.early-life.title")}</h3>
                  <p 
                    className="text-gray-300 text-sm"
                    dangerouslySetInnerHTML={{ __html: t("bio.canonical-events.early-life.content") }}
                  />
                </div>
              </div>
            </div>

            <div className="bg-gray-800/80 rounded-lg p-6 hover:shadow-2xl transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 text-rose-700 mt-1">
                  <Book size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{t("bio.canonical-events.higher-education.title")}</h3>
                  <p 
                    className="text-gray-300 text-sm"
                    dangerouslySetInnerHTML={{ __html: t("bio.canonical-events.higher-education.content") }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/80 rounded-xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold mb-6 text-white text-center">{t("bio.education.title")}</h2>
          <div className="space-y-6">
            <div className="bg-gray-800/80 rounded-lg p-6 hover:shadow-2xl transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 text-rose-700 mt-1">
                  <Award size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 text-white">{t("bio.education.secondary_title")}</h3>
                  <p className="text-gray-300 text-sm mb-2">2018 - 2021 | Colegio Aragón</p>
                  <p className="text-gray-300 text-sm">
                    {t("bio.education.secondary_description")}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/80 rounded-lg p-6 hover:shadow-2xl transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 text-rose-700 mt-1">
                  <Award size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 text-white">Educación Superior</h3>
                  <p className="text-gray-300 text-sm mb-2">2022 - 2025 | Instituto Duoc UC: Sede San Bernardo</p>
                  <p className="text-gray-300 text-sm">
                    {t("bio.education.university_description")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/80 rounded-xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold mb-6 text-white text-center flex items-center justify-center gap-2">
            <Heart className="text-rose-700" /> Reflexiones Personales
            </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800/80 rounded-lg p-8 hover:shadow-2xl transition-all">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                "{t("bio.personalReflections.first")}"
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                "{t("bio.personalReflections.second")}"
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                "{t("bio.personalReflections.third")}"
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                "{t("bio.personalReflections.fourth")}"
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/80 rounded-xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold mb-6 text-white text-center">{t("bio.futureVision.title")}</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {t("bio.futureVision.first")}
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              {t("bio.futureVision.second")}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Bio;