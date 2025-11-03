import { motion } from "framer-motion";

import ProfilePic from "../../assets/img/profile.png";
import Picture from "../../assets/img/about-me/picture.jpg";

import EventSchedule from "./components/EventSchedule";

function AboutMe() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center py-16 px-4 bg-white">
            <h1 className="text-4xl font-bold text-rose-700 mb-12 mt-12 text-center">About Me</h1>

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
                    className="text-xl font-bold text-rose-700 mb-4 mt-2 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 1.1 }}
                >
                    Fun Fact
                </motion.h3>
                <motion.p
                    className="text-lg text-gray-700 mb-6 leading-relaxed text-center italic"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 1.2 }}
                >
                    <span>
                        On my very first day, I couldn’t even print in Python because I didn’t know you had to use parentheses. Now, I have a <strong>Bot powered by artificial intelligence</strong>, a <strong>24U rack</strong> with servers, firewall, and switch, plus a <strong>networking lab</strong> at home. <span className="text-rose-700 font-semibold">Learning truly never ends!</span>
                    </span>
                </motion.p>
            </motion.div>
        </section>
    );
}

export default AboutMe;