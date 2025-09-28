import { Briefcase, Calendar } from "lucide-react";
import { useGetTechStackList } from "./hooks/useGetTechStackList";
import CatComputer from "../../assets/img/animated/cat-cat-on-computer.gif";
import ExperienceBanner from "../../assets/img/banners/experience_banner.jpg";
import ReyesAndFriendsLogo from "../../assets/img/logos/reyesandfriends-white.svg";
import { useI18n } from "../../contexts/i18nContext";

function Experience() {
  const techStack = useGetTechStackList();
  const { t } = useI18n()


  return (
    <div className="min-h-screen p-4">
      <div className="w-full max-w-6xl mx-auto space-y-8">

        <div className="hidden md:block">
          <div className="relative h-56 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center">
            <img
              src={ExperienceBanner}
              alt="ExperienceBanner"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
            <div className="relative z-10 flex flex-col items-center justify-center w-full">
              <div className="flex items-center gap-8 justify-center">
                <div className="text-center">
                  <h1 className="text-5xl font-extrabold text-white mb-2">{t("experience.banner.title")}</h1>
                  <p className="text-2xl text-gray-200 font-semibold">{t("experience.banner.subtitle")}</p>
                </div>
                <img
                  src={CatComputer}
                  alt="Cat on Computer"
                  className="w-24 h-24 object-contain drop-shadow-lg pointer-events-none"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="block md:hidden">
          <div className="relative h-32 w-full rounded-2xl overflow-hidden shadow-2xl bg-gray-900 flex items-center justify-center">
            <img
              src={ExperienceBanner}
              alt="ExperienceBanner"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
            <div className="relative z-10 flex flex-col items-center justify-center w-full">
              <h1 className="text-xl font-bold text-white mb-1 text-center">{t("experience.banner.title")}</h1>
              <p className="text-sm text-gray-200 font-medium text-center">{t("experience.banner.subtitle")}</p>
            </div>
            <img
              src={CatComputer}
              alt="Cat on Computer"
              className="absolute bottom-2 right-2 w-12 h-12 object-contain drop-shadow-lg pointer-events-none"
            />
          </div>
        </div>

        <div className="bg-gray-800/80  rounded-xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold mb-6 text-white">{t("experience.reyes-and-friends.title")}</h2>
          <div className="bg-gray-800/80  rounded-lg p-6">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-1">
                <div className="flex items-start gap-4 mb-4">
                  <Briefcase className="text-rose-700 w-6 h-6 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-white font-medium text-xl mb-2">
                      <a
                        href="https://www.reyesandfriends.cl"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-white"
                      >
                        Reyes&amp;Friends
                      </a>
                    </h3>
                    <p className="text-white text-base mb-3 font-semibold">{t("experience.reyes-and-friends.position")}</p>
                    <div className="flex items-center gap-2 mb-4">
                      <Calendar className="text-rose-700 w-4 h-4" />
                      <span className="text-gray-400 text-sm">{t("experience.reyes-and-friends.period")}</span>
                    </div>
                    <p className="text-gray-300 text-base leading-relaxed mb-4">
                      {t("experience.reyes-and-friends.description")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-56 flex items-center justify-center mt-0 md:mt-0 self-center md:self-start">
                <img
                  src={ReyesAndFriendsLogo}
                  alt="Reyes&Friends"
                  className="w-full h-auto object-contain pointer-events-none"
                  style={{ maxHeight: "80px" }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/80  rounded-xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold mb-6 text-white">{t("experience.featured-project.section-title")}</h2>

          <div className="bg-gray-800/80  rounded-lg p-6">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-1">
                <div className="flex items-start gap-4 mb-4">
                  <Briefcase className="text-rose-700 w-6 h-6 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-white font-medium text-xl mb-2">{t("experience.featured-project.title")}</h3>
                    <p className="text-white text-base mb-3 font-semibold">{t("experience.featured-project.company")}</p>
                    <div className="flex items-center gap-2 mb-4">
                      <Calendar className="text-rose-700 w-4 h-4" />
                      <span className="text-gray-400 text-sm">{t("experience.featured-project.period")}</span>
                    </div>
                    <p className="text-gray-300 text-base leading-relaxed mb-4">
                      {t("experience.featured-project.description")}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-700/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">React</span>
                      <span className="bg-green-700/20 text-green-300 px-3 py-1 rounded-full text-sm font-medium">Node.js</span>
                      <span className="bg-purple-700/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium">Bootstrap</span>
                      <span className="bg-yellow-700/20 text-yellow-300 px-3 py-1 rounded-full text-sm font-medium">Chart.js</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-56 h-32 bg-gray-600/50 rounded-lg flex items-center justify-center border border-gray-500/50 mt-4 md:mt-0">
                <img
                  src="/experience_projects/multistock-sync.png"
                  alt="Multi Stock Sync"
                  className="w-full h-full object-cover rounded-lg pointer-events-none"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/80 rounded-xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold mb-6 text-white">{t("experience.tech-stack.title")}</h2>
          {Object.entries(techStack).map(([category, items]) => (
            items.length > 0 && (
              <div key={category} className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-4">{category}</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {items.map((tech) => (
                    <div key={tech.name} className="flex items-center gap-3 p-4 bg-gray-800/80 rounded-lg transition-all duration-200 hover:shadow-xl">
                      <img src={tech.icon} alt={tech.name} className="h-6 pointer-events-none" />
                      <span className="text-white font-medium">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>

      </div>
    </div>
  );
}

export default Experience;