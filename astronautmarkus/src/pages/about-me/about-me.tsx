import { Star } from "lucide-react";
import Astronaut from "../../assets/img/animated/astronaut.gif";
import AboutMeBanner from "../../assets/img/banners/about-me_banner.jpg";
import CJ from "../../assets/img/animated/cj.gif";
import Coffeine from "../../assets/img/animated/coffee.gif";
import Lester from "../../assets/img/animated/lester.gif";
import HelloWorld from "../../assets/img/animated/hello-world.gif";
import JavascriptMeme from "../../assets/img/about-me/javascript-meme.jpg";
import Chariot from "../../assets/img/about-me/chariot.webp";
import MrRobot from "../../assets/img/about-me/mr-robot.gif";
import { useI18n } from "../../contexts/i18nContext";

function AboutMe() {
  const { t } = useI18n();

  function getMarcosAge() {
    const birthDate = new Date('2003-03-16');
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  }

  function getMarcosAgeInDays() {
    const birthDate = new Date('2003-03-16');
    const today = new Date();
    const timeDifference = today.getTime() - birthDate.getTime();
    const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));
    return daysDifference;
  }

  const marcosAge = getMarcosAge();
  const marcosAgeInDays = getMarcosAgeInDays();

  return (
    <div className="min-h-screen p-4">
      <div className="w-full max-w-6xl mx-auto space-y-8">
        
        <div className="hidden md:block">
          <div className="relative h-56 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center">
            <img
              src={AboutMeBanner}
              alt="About Me Banner"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
            <div className="relative z-10 flex flex-col items-center justify-center w-full">
              <div className="flex items-center gap-8 justify-center">
                <div className="text-center">
                  <h1 className="text-5xl font-extrabold text-white mb-2">{t('about-me.banner.title')}</h1>
                  <p className="text-2xl text-gray-200 font-semibold">{t('about-me.banner.subtitle')}</p>
                </div>
                <img
                  src={Astronaut}
                  alt="Astronaut"
                  className="w-48 h-48 object-contain drop-shadow-lg pointer-events-none"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="block md:hidden">
          <div className="relative h-32 w-full rounded-2xl overflow-hidden shadow-2xl bg-gray-900 flex items-center justify-center">
            <img
              src={AboutMeBanner}
              alt="About Me Banner"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
            <div className="relative z-10 flex flex-col items-center justify-center w-full">
              <h1 className="text-xl font-bold text-white mb-1 text-center">{t('about-me.banner.title')}</h1>
              <p className="text-sm text-gray-200 font-medium text-center">{t('about-me.banner.subtitle')}</p>
            </div>
            <img
              src={Astronaut}
              alt="Astronaut"
              className="absolute bottom-2 right-2 w-18 h-18 object-contain drop-shadow-lg pointer-events-none"
            />
          </div>
        </div>

        <div className="bg-gray-800/80 rounded-xl p-8 shadow-xl">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <img
                src="https://github.com/astronautmarkus.png"
                alt="astronautmarkus avatar"
                className="w-32 h-32 rounded-full border-4 border-rose-700 shadow-lg pointer-events-none"
              />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl font-bold text-white mb-4">{t('about-me.intro.title')}</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                {t('about-me.intro.description')}
              </p>
              <p className="text-gray-400">
                {t('about-me.intro.additional')}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/80 rounded-xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold mb-6 text-white text-center">{t('about-me.sections.about-me')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-700/50 rounded-lg p-6 hover:shadow-2xl transition-all hover:bg-gray-700/70 text-center flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-3 text-white">{t('about-me.cards.modder.title')}</h3>
              <img
                src={CJ}
                alt="Ex-Modder y creador de contenido"
                className="w-24 h-24 object-cover rounded-lg mb-3 pointer-events-none"
              />
              <p className="text-gray-300 text-sm">{t('about-me.cards.modder.description')}</p>
            </div>

            <div className="bg-gray-700/50 rounded-lg p-6 hover:shadow-2xl transition-all hover:bg-gray-700/70 text-center flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-3 text-white">{t('about-me.cards.caffeine.title')}</h3>
              <img
                src={Coffeine}
                alt="Café y Cafeína"
                className="w-24 h-24 object-cover rounded-lg mb-3 pointer-events-none"
              />
              <p className="text-gray-300 text-sm">{t('about-me.cards.caffeine.description')}</p>
            </div>

            <div className="bg-gray-700/50 rounded-lg p-6 hover:shadow-2xl transition-all hover:bg-gray-700/70 text-center flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-3 text-white">{t('about-me.cards.knowledge.title')}</h3>
              <img
                src={Lester}
                alt="Lester"
                className="w-24 h-24 object-cover rounded-lg mb-3 pointer-events-none"
              />
              <p className="text-gray-300 text-sm">{t('about-me.cards.knowledge.description')}</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/80  rounded-xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold mb-6 text-white">{t('about-me.sections.curious-facts')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-700/50  rounded-lg p-6 hover:shadow-2xl transition-all hover:bg-gray-700/70">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 text-rose-700 mt-1">
                  <Star size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{t('about-me.facts.computers.title')}</h3>
                  <p className="text-gray-300 text-sm">{t('about-me.facts.computers.description')}</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-700/50  rounded-lg p-6 hover:shadow-2xl transition-all hover:bg-gray-700/70">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 text-rose-700 mt-1">
                  <Star size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{t('about-me.facts.career.title')}</h3>
                  <p className="text-gray-300 text-sm">{t('about-me.facts.career.description')}</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-700/50  rounded-lg p-6 hover:shadow-2xl transition-all hover:bg-gray-700/70">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 text-rose-700 mt-1">
                  <Star size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{t('about-me.facts.hello-world.title')}</h3>
                  <p className="text-gray-300 text-sm">{t('about-me.facts.hello-world.description')}</p>
                  <div className="mt-2 flex justify-center">
                    <img
                      src={HelloWorld}
                      alt="Hello World"
                      className="w-30 object-contain rounded-lg pointer-events-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-700/50  rounded-lg p-6 hover:shadow-2xl transition-all hover:bg-gray-700/70">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 text-rose-700 mt-1">
                  <Star size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{t('about-me.facts.heights.title')}</h3>
                  <p className="text-gray-300 text-sm">{t('about-me.facts.heights.description')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/80  rounded-xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold mb-6 text-white text-center">{t('about-me.sections.questions')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="bg-gray-700/50  rounded-lg p-6 hover:shadow-2xl transition-all hover:bg-gray-700/70">
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-semibold text-white">{t('about-me.qa.age.question')}</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {t('about-me.qa.age.answer')
                        .replace('{{age}}', marcosAge.toString())
                        .replace('{{days}}', marcosAgeInDays.toString())}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-700/50  rounded-lg p-6 hover:shadow-2xl transition-all hover:bg-gray-700/70">
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-semibold text-white">{t('about-me.qa.language.question')}</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <p className="text-gray-300 text-sm leading-relaxed">{t('about-me.qa.language.answer')}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <img
                      src={JavascriptMeme}
                      alt="JavaScript Meme"
                      className="w-20 h-20 object-cover rounded-lg pointer-events-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-700/50  rounded-lg p-6 hover:shadow-2xl transition-all hover:bg-gray-700/70">
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-semibold text-white">{t('about-me.qa.remote.question')}</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <p className="text-gray-300 text-sm leading-relaxed">{t('about-me.qa.remote.answer')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-700/50  rounded-lg p-6 hover:shadow-2xl transition-all hover:bg-gray-700/70">
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-semibold text-white">{t('about-me.qa.freetime.question')}</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <p className="text-gray-300 text-sm leading-relaxed">{t('about-me.qa.freetime.answer')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-700/50  rounded-lg p-6 hover:shadow-2xl transition-all hover:bg-gray-700/70">
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-semibold text-white">{t('about-me.qa.coffee.question')}</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <p className="text-gray-300 text-sm leading-relaxed">{t('about-me.qa.coffee.answer')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-700/50  rounded-lg p-6 hover:shadow-2xl transition-all hover:bg-gray-700/70">
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-semibold text-white">{t('about-me.qa.pets.question')}</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <p className="text-gray-300 text-sm leading-relaxed">{t('about-me.qa.pets.answer')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-700/50  rounded-lg p-6 hover:shadow-2xl transition-all hover:bg-gray-700/70">
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-semibold text-white">{t('about-me.qa.project.question')}</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <p className="text-gray-300 text-sm leading-relaxed">{t('about-me.qa.project.answer')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-700/50  rounded-lg p-6 hover:shadow-2xl transition-all hover:bg-gray-700/70">
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-semibold text-white">{t('about-me.qa.study.question')}</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <p className="text-gray-300 text-sm leading-relaxed">{t('about-me.qa.study.answer')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-700/50 rounded-lg p-6 hover:shadow-2xl transition-all hover:bg-gray-700/70">
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <div className="flex-1 sm:w-7/10">
                  <h3 className="text-lg font-semibold text-white">{t('about-me.qa.waifu.question')}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{t('about-me.qa.waifu.answer')}</p>
                </div>
                <div className="sm:w-3/10 flex justify-center">
                  <img
                    src={Chariot}
                    alt="Chariot"
                    className="w-32 h-32 object-cover rounded-lg pointer-events-none"
                  />
                </div>
              </div>
            </div>

            <div className="bg-gray-700/50  rounded-lg p-6 hover:shadow-2xl transition-all hover:bg-gray-700/70">
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-semibold text-white">{t('about-me.qa.substances.question')}</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <p className="text-gray-300 text-sm leading-relaxed">{t('about-me.qa.substances.answer')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-700/50  rounded-lg p-6 hover:shadow-2xl transition-all hover:bg-gray-700/70">
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-semibold text-white">{t('about-me.qa.alias.question')}</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <p className="text-gray-300 text-sm leading-relaxed">{t('about-me.qa.alias.answer')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-700/50  rounded-lg p-6 hover:shadow-2xl transition-all hover:bg-gray-700/70">
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-semibold text-white">{t('about-me.qa.series.question')}</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <p className="text-gray-300 text-sm leading-relaxed">{t('about-me.qa.series.answer')}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <img
                      src={MrRobot}
                      alt="Mr Robot"
                      className="w-20 h-20 object-cover rounded-lg pointer-events-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-700/50  rounded-lg p-6 hover:shadow-2xl transition-all hover:bg-gray-700/70">
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-semibold text-white">{t('about-me.qa.videogame.question')}</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <p className="text-gray-300 text-sm leading-relaxed">{t('about-me.qa.videogame.answer')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-700/50  rounded-lg p-6 hover:shadow-2xl transition-all hover:bg-gray-700/70">
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-semibold text-white">{t('about-me.qa.story.question')}</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <p className="text-gray-300 text-sm leading-relaxed">{t('about-me.qa.story.answer')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-700/50  rounded-lg p-6 hover:shadow-2xl transition-all hover:bg-gray-700/70">
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-semibold text-white">{t('about-me.qa.os.question')}</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <p className="text-gray-300 text-sm leading-relaxed">{t('about-me.qa.os.answer')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-700/50 rounded-lg p-6 hover:shadow-2xl transition-all hover:bg-gray-700/70">
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-semibold text-white">{t('about-me.qa.music-coding.question')}</h3>
                <div className="flex flex-col gap-4">
                  <div className="flex-1">
                    <p className="text-gray-300 text-sm leading-relaxed">{t('about-me.qa.music-coding.answer')}</p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-full max-w-xs sm:max-w-md">
                    <iframe
                      style={{ borderRadius: "12px" }}
                      src="https://open.spotify.com/embed/playlist/5r6Lp0iFPR3fwZoPSbfCLl?utm_source=generator"
                      width="100%"
                      height="152"
                      frameBorder="0"
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                      title="Spotify playlist"
                      className="mb-4"
                    ></iframe>
                    <p className="text-gray-300 text-sm leading-relaxed">{t('about-me.qa.music-coding.extra-note')}</p>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="bg-gray-800/80 rounded-xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold mb-4 text-white text-center">{t('about-me.playlists.title')}</h2>
          <p className="text-gray-300 text-center mb-6 max-w-3xl mx-auto">
            {t('about-me.playlists.description')}
          </p>
          <div className="flex overflow-x-auto gap-6 pb-4">
            
            <div className="flex-shrink-0 bg-gray-700/50 rounded-lg p-4 hover:shadow-2xl transition-all hover:bg-gray-700/70">
              <iframe
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/playlist/5r6Lp0iFPR3fwZoPSbfCLl?utm_source=generator"
                width="300"
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Coding Vibes playlist"
              ></iframe>
            </div>

            <div className="flex-shrink-0 bg-gray-700/50 rounded-lg p-4 hover:shadow-2xl transition-all hover:bg-gray-700/70">
              <iframe
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/playlist/03OXOTX3VQyHLpQMb0lVwW?utm_source=generator&theme=0"
                width="300"
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Chill Beats playlist"
              ></iframe>
            </div>

            <div className="flex-shrink-0 bg-gray-700/50 rounded-lg p-4 hover:shadow-2xl transition-all hover:bg-gray-700/70">
              <iframe
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/album/1P4zxnE9WYLHs4k8VZPlNw?utm_source=generator"
                width="300"
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Focus Zone playlist"
              ></iframe>
            </div>

          </div>
          <p className="text-gray-400 text-center mt-6 max-w-2xl mx-auto text-sm">
            {t('about-me.playlists.footer')}
          </p>
        </div>

      </div>
    </div>
  );
}

export default AboutMe;
