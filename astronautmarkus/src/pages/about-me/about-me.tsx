import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import ProfilePic from "../../assets/img/profile.png";
import Picture from "../../assets/img/about-me/picture.jpg";
import Background from "../../assets/img/background.jpg";
import AstronautMarkus from "../../assets/img/astronautmarkus/markus-stand.png";

import EventSchedule from "./components/EventSchedule";

import SeoHelmet from "../../utils/SeoHelmet";
import { Camera, Coffee, Keyboard, Star, MonitorSmartphone } from "lucide-react";
import { useI18n } from "../../context/i18n";

function AboutMe() {
    const { t } = useI18n();

    const fullText = t("about-me.title");
    const [typedText, setTypedText] = useState("");
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        let typingTimeout: ReturnType<typeof setTimeout>;
        let cursorInterval: ReturnType<typeof setInterval>;

        if (typedText.length < fullText.length) {
            typingTimeout = setTimeout(() => {
                setTypedText(fullText.slice(0, typedText.length + 1));
            }, 90);
        } else {
            cursorInterval = setInterval(() => {
                setShowCursor((prev) => !prev);
            }, 500);
        }

        return () => {
            clearTimeout(typingTimeout);
            clearInterval(cursorInterval);
        };
    }, [typedText, fullText]);

    useEffect(() => {
        setTypedText("");
        setShowCursor(true);
    }, [fullText]);

    return (
        <>
            <SeoHelmet
                title={t("about-me.seo_title") || "About Me - AstronautMarkusDev"}
                description={t("about-me.seo_description") || "Learn more about Marcos Reyes, also known as AstronautMarkusDev. Discover his journey, passions, and fun facts about his life in technology."}
                keywords={t("about-me.seo_keywords") || "AstronautMarkusDev, Marcos Reyes, Fullstack Developer, Systems Administrator, Portfolio, Projects, Blog"}
            />

            <section className="relative min-h-screen flex justify-center pt-32">
                <img
                    src={Background}
                    alt="background"
                    className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none select-none"
                    aria-hidden="true"
                />
                <div className="absolute inset-0 bg-black/30 backdrop-blur-sm pointer-events-none z-10" />

                <div className="relative z-20 w-full max-w-6xl px-4 sm:px-6 flex flex-col items-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center w-full mb-10 md:mb-16">

                        <motion.div
                            className="order-1 md:order-1 flex flex-col items-center justify-center w-full"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="relative flex justify-center md:justify-end w-full">
                                <img
                                    src={AstronautMarkus}
                                    alt="AstronautMarkus"
                                    className="w-60 h-60 sm:w-80 sm:h-80 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] pointer-events-none bg-transparent drop-shadow-2xl"
                                    style={{ objectFit: "contain" }}
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            className="order-2 md:order-2 flex flex-col justify-center items-center md:items-start text-center md:text-left w-full"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                        >
                            <motion.h1
                                className="flex flex-col items-center md:items-start gap-2 text-2xl sm:text-3xl md:text-5xl font-extrabold text-white mb-5 md:mb-8 mt-4 sm:mt-6 drop-shadow-lg"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.3 }}
                            >
                                <span>
                                    {typedText}
                                    <span
                                        style={{
                                            opacity: showCursor ? 1 : 0,
                                            transition: "opacity 0.2s",
                                            color: "#9e28deff",
                                            fontWeight: "bold"
                                        }}
                                    >
                                        |
                                    </span>
                                </span>
                            </motion.h1>
                            <motion.p
                                className="text-base sm:text-lg md:text-xl text-white/80 max-w-md sm:max-w-xl mb-6 md:mb-8 drop-shadow"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.5 }}
                            >
                                {t('about-me.description')}
                            </motion.p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="min-h-screen flex flex-col items-center justify-center py-16 px-0 bg-gradient-to-b from-[#18122B] via-[#1E1B3A] to-[#18122B] w-full">
                <motion.h1
                    className="text-4xl font-bold text-[#a084ee] mb-12 mt-12 text-center"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0 }}
                >
                    {t("about-me.title")}
                </motion.h1>

                <div className="w-full flex justify-center mb-10">
                    <motion.div
                        className="bg-[#251a3a] shadow-2xl border-4 border-[#a084ee] rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center w-full max-w-7xl hover:shadow-purple-700/40 transition-shadow duration-300 hover:scale-105 transition-transform"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        <div className="w-48 h-48 bg-gray-300 rounded-full flex items-center justify-center shadow-lg mb-8 md:mb-0 md:mr-10">
                            <img
                                src={ProfilePic}
                                alt="Profile"
                                className="w-48 h-48 rounded-full object-cover pointer-events-none border-4 border-[#a084ee]"
                            />
                        </div>
                        <div className="flex-1">
                            <motion.h2
                                className="text-2xl font-semibold text-[#a084ee] mb-4 text-center md:text-left"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                            >
                                Marcos Reyes / AstronautMarkusDev
                            </motion.h2>
                            <motion.p
                                className="text-lg text-white mb-6 leading-relaxed text-center md:text-left"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.3 }}
                            >
                                {t("about-me.me.description")}
                            </motion.p>
                        </div>
                    </motion.div>
                </div>

                <div className="w-full flex justify-center mb-10">
                    <motion.div
                        className="bg-[#251a3a] shadow-2xl border-4 border-[#a084ee] rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center w-full max-w-7xl hover:shadow-purple-700/40 transition-shadow duration-300 hover:scale-105 transition-transform"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                    >
                        <div className="w-64 h-48 bg-gray-300 rounded-xl flex items-center justify-center shadow-lg mb-8 md:mb-0 md:ml-10 overflow-hidden">
                            <img
                                src={Picture}
                                alt={t("about-me.journey.picture_alt") || "A very cool picture"}
                                className="w-full h-full object-cover pointer-events-none"
                            />
                        </div>
                        <div className="flex-1">
                            <motion.h3
                                className="text-xl font-bold text-[#a084ee] mb-4 mt-2 text-center md:text-right"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.5 }}
                            >
                                {t("about-me.journey.title") || "My Journey"}
                            </motion.h3>
                            <motion.p
                                className="text-lg text-white mb-6 leading-relaxed text-center md:text-right"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.6 }}
                            >
                                <span>
                                    {t("about-me.journey.description") ||
                                    `Choosing this path was surprisingly straightforward for me. It all began just as I was about to graduate from high school. One day, while riding with my mom, we passed by an institute and I thought, "Maybe I should check out what they offer." When I got home, I didn’t look too deeply—just saw the “Computational Programmer Analyst” program and literally said, "Okay, that one." I had a few minor issues applying, but within two days, I was in. Since then, I haven’t stopped learning and growing in this fascinating world of technology.`}
                                </span>
                            </motion.p>
                        </div>
                    </motion.div>
                </div>

                <div className="w-full flex justify-center mb-10">
                    <div>
                        <EventSchedule />
                    </div>
                </div>

                <div className="w-full flex justify-center mb-10">
                    <motion.div
                        className="bg-[#251a3a] shadow-2xl border-4 border-[#a084ee] rounded-2xl shadow-lg p-8 flex flex-col items-center w-full max-w-7xl hover:shadow-purple-700/40 transition-shadow duration-300 hover:scale-105 transition-transform"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 1.0 }}
                    >
                        <motion.h3
                            className="w-full text-2xl font-extrabold text-[#a084ee] mb-6 mt-2 text-center tracking-wide"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 1.1 }}
                        >
                            <Star className="w-7 h-7 text-[#a084ee] inline-block mr-2" aria-label="star" /> {t("about-me.fun_facts.title") || "Fun Facts"}
                        </motion.h3>
                        <motion.ul
                            className="w-full flex flex-col gap-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 1.2 }}
                        >
                            <li className="bg-[#1a1330] border-2 border-[#a084ee] rounded-xl p-6 shadow-lg text-white text-lg flex items-center gap-4 justify-center transition-all duration-200 hover:bg-[#2a1d4d] hover:scale-[1.03]">
                                <Camera className="w-7 h-7 text-[#a084ee]" aria-label="camera" />
                                {t("about-me.fun_facts.photo") || "I almost never take photos of myself! Only once a year for my CV or official documents."}
                            </li>
                            <li className="bg-[#1a1330] border-2 border-[#a084ee] rounded-xl p-6 shadow-lg text-white text-lg flex items-center gap-4 justify-center transition-all duration-200 hover:bg-[#2a1d4d] hover:scale-[1.03]">
                                <Coffee className="w-7 h-7 text-[#a084ee]" aria-label="coffee" />
                                {t("about-me.fun_facts.coffee") || "I'm probably addicted to caffeine—I can't live without my daily cup of coffee or Monster Energy."}
                            </li>
                            <li className="bg-[#1a1330] border-2 border-[#a084ee] rounded-xl p-6 shadow-lg text-white text-lg flex items-center gap-4 justify-center transition-all duration-200 hover:bg-[#2a1d4d] hover:scale-[1.03]">
                                <Keyboard className="w-7 h-7 text-[#a084ee]" aria-label="keyboard" />
                                {t("about-me.fun_facts.frontend") || "I hate frontend, I hate JavaScript, but we're forced to use it, aren't we?"}
                            </li>
                            <li className="bg-[#1a1330] border-2 border-[#a084ee] rounded-xl p-6 shadow-lg text-white text-lg flex items-center gap-4 justify-center transition-all duration-200 hover:bg-[#2a1d4d] hover:scale-[1.03]">
                                <MonitorSmartphone className="w-7 h-7 text-[#a084ee]" aria-label="star" />
                                {t("about-me.fun_facts.tech_truth") || "An unpopular truth? The people who hate technology the most are usually the ones who end up needing it the most."}
                            </li>
                        </motion.ul>
                    </motion.div>
                </div>
            </section>
        </>
    );
}

export default AboutMe;