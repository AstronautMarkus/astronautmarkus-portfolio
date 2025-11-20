import { motion } from "framer-motion";

import ProfilePic from "../../assets/img/profile.png";
import Picture from "../../assets/img/about-me/picture.jpg";

import EventSchedule from "./components/EventSchedule";

import SeoHelmet from "../../utils/SeoHelmet";
import { Camera, Coffee, Keyboard, Star, MonitorSmartphone } from "lucide-react";

function AboutMe() {
    return (
        <>
            <SeoHelmet
                title="About Me - AstronautMarkusDev"
                description="Learn more about Marcos Reyes, also known as AstronautMarkusDev. Discover his journey, passions, and fun facts about his life in technology."
                keywords="AstronautMarkusDev, Marcos Reyes, Fullstack Developer, Systems Administrator, Portfolio, Projects, Blog"
            />
            <section className="min-h-screen flex flex-col items-center justify-center py-16 px-4 bg-white">
                <motion.h1
                    className="text-4xl font-bold text-rose-700 mb-12 mt-12 text-center"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0 }}
                >
                    About Me
                </motion.h1>

                <motion.div
                    className="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                >
                    <div className="w-48 h-48 bg-gray-300 rounded-full flex items-center justify-center shadow-lg mb-8 md:mb-0 md:mr-10">
                        <img
                            src={ProfilePic}
                            alt="Profile"
                            className="w-48 h-48 rounded-full object-cover pointer-events-none"
                        />
                    </div>
                    <div className="flex-1">
                        <motion.h2
                            className="text-2xl font-semibold text-gray-800 mb-4 text-center md:text-left"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        >
                            Marcos Reyes, AstronautMarkusDev
                        </motion.h2>
                        <motion.p
                            className="text-lg text-gray-700 mb-6 leading-relaxed text-center md:text-left"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                        >
                            <span>
                                I'm just a regular guy—like you, like everyone. I love experimenting with new technologies and learning something new every day. My passion leans especially toward <strong>hardware</strong> and <strong>networking</strong>, sometimes even more than programming. But don't worry, I'm skilled at coding too! I believe it's important to be versatile and excel at what you do. <span className="text-rose-700 font-semibold">What are you good at?</span>
                            </span>
                        </motion.p>
                    </div>
                </motion.div>

                <motion.div
                    className="max-w-7xl w-full mx-auto flex flex-col md:flex-row-reverse items-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                >
                    <div className="w-64 h-48 bg-gray-300 rounded-xl flex items-center justify-center shadow-lg mb-8 md:mb-0 md:ml-10 overflow-hidden">
                        <img
                            src={Picture}
                            alt="A very cool picture"
                            className="w-full h-full object-cover pointer-events-none"
                        />
                    </div>
                    <div className="flex-1">
                        <motion.h3
                            className="text-xl font-bold text-rose-700 mb-4 mt-2 text-center md:text-right"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.5 }}
                        >
                            My Journey
                        </motion.h3>
                        <motion.p
                            className="text-lg text-gray-700 mb-6 leading-relaxed text-center md:text-right"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.6 }}
                        >
                            <span>
                                Choosing this path was surprisingly straightforward for me. It all began just as I was about to graduate from high school. One day, while riding with my mom, we passed by an institute and I thought, <strong>"Maybe I should check out what they offer."</strong> When I got home, I didn’t look too deeply—just saw the <strong>“Computational Programmer Analyst”</strong> program and literally said, <span className="text-rose-700 font-semibold">“Okay, that one.”</span> I had a few minor issues applying, but within two days, I was in. Since then, I haven’t stopped learning and growing in this fascinating world of technology.
                            </span>
                        </motion.p>
                    </div>
                </motion.div>

                <EventSchedule />

                <motion.div
                    className="max-w-2xl w-full mx-auto flex flex-col items-center justify-center mt-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 1.0 }}
                >
                    <motion.h3
                        className="text-2xl font-extrabold text-rose-700 mb-6 mt-2 text-center tracking-wide"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 1.1 }}
                    >
                        <Star className="w-7 h-7 text-rose-700 inline-block mr-2" aria-label="star" /> Fun Facts
                    </motion.h3>
                    <motion.ul
                        className="w-full flex flex-col gap-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 1.2 }}
                    >
                        <li className="bg-gray-100 rounded-xl p-5 shadow-lg text-gray-700 text-lg flex items-center gap-3 justify-center">
                            <Camera className="w-7 h-7 text-rose-700" aria-label="camera" />
                            I almost never take photos of myself! Only once a year for my CV or official documents.
                        </li>
                        <li className="bg-gray-100 rounded-xl p-5 shadow-lg text-gray-700 text-lg flex items-center gap-3 justify-center">
                            <Coffee className="w-7 h-7 text-rose-700" aria-label="coffee" />
                            I'm probably addicted to caffeine—I can't live without my daily cup of coffee or Monster Energy.
                        </li>
                        <li className="bg-gray-100 rounded-xl p-5 shadow-lg text-gray-700 text-lg flex items-center gap-3 justify-center">
                            <Keyboard className="w-7 h-7 text-rose-700" aria-label="keyboard" />
                            I hate frontend, I hate JavaScript, but we're forced to use it, aren't we?
                        </li>
                        <li className="bg-gray-100 rounded-xl p-5 shadow-lg text-gray-700 text-lg flex items-center gap-3 justify-center">
                            <MonitorSmartphone className="w-7 h-7 text-rose-700" aria-label="star" />
                            An unpopular truth? The people who hate technology the most are usually the ones who end up needing it the most.
                        </li>
                    </motion.ul>
                </motion.div>
            </section>
        </>
    );
}

export default AboutMe;