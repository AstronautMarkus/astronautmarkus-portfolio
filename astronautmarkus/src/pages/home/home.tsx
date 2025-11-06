import { Link } from "react-router-dom";
import Background from "../../assets/img/background.png";
import AstronautMarkus from "../../assets/img/astronautmarkus/AstronautMarkus-02.png";
import ProfilePic from "../../assets/img/profile.png";
import { Github, Linkedin, Mail, Twitter, Instagram, Code } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";


import LastPosts from "./components/LastPosts";
import UserStats from "./components/UserStats";
import FeaturedProjects from "./components/FeaturedProjects";
import TechStackDemo from "./components/TechStackDemo";
import FinalPageUrls from "./components/FinalPageUrls";



function Home() {
    const fullText = "AstronautMarkusDev";
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

    return (
        <>
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
                            className="flex flex-col justify-end items-center text-center w-full"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        >
                            <motion.h1
                                className="flex flex-col items-center gap-2 text-2xl sm:text-3xl md:text-5xl font-extrabold text-white mb-5 md:mb-8 mt-4 sm:mt-6 drop-shadow-lg"
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
                                            color: "#f43f5e",
                                            fontWeight: "bold"
                                        }}
                                    >
                                        |
                                    </span>
                                </span>
                            </motion.h1>
                            <motion.h2
                                className="flex flex-col items-center gap-2 text-lg sm:text-xl md:text-2xl text-rose-700 font-semibold mb-3 md:mb-4"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.4 }}
                            >
                                Fullstack Developer & Systems Administrator
                            </motion.h2>
                            <motion.p
                                className="text-base sm:text-lg md:text-xl text-white/80 max-w-md sm:max-w-xl mb-6 md:mb-8 drop-shadow"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.5 }}
                            >
                                Hello, I'm Marcos Reyes, a Fullstack Developer and Systems Administrator. I build user-friendly apps and solve tech problems using modern tools. I enjoy learning new things and keeping up with industry trends. Let's connect and work together!
                            </motion.p>

                            <motion.div
                                className="flex gap-4 sm:gap-6 justify-center flex-wrap"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.6 }}
                            >
                                <a
                                    href="https://github.com/astronautmarkus"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white/10 hover:bg-gray-800 transition rounded-full p-2 sm:p-3 shadow text-white flex items-center hover:scale-115 transform transition duration-300"
                                >
                                    <Github size={24} />
                                </a>
                                <a
                                    href="https://linkedin.com/in/markusreyes"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white/10 hover:bg-blue-600 transition rounded-full p-2 sm:p-3 shadow text-white flex items-center hover:scale-115 transform transition duration-300"
                                >
                                    <Linkedin size={24} />
                                </a>
                                <a
                                    href="https://x.com/astronautmarkus"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white/10 hover:bg-black transition rounded-full p-2 sm:p-3 shadow text-white flex items-center hover:scale-115 transform transition duration-300"
                                >
                                    <Twitter size={24} />
                                </a>
                                <a
                                    href="https://instagram.com/astronautmarkusdev"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white/10 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition rounded-full p-2 sm:p-3 shadow text-white flex items-center hover:scale-115 transform transition duration-300"
                                >
                                    <Instagram size={24} />
                                </a>
                            </motion.div>
                        </motion.div>
                        <motion.div
                            className="flex flex-col items-center justify-end relative w-full"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                        >
                            <div className="relative">
                                <img
                                    src={AstronautMarkus}
                                    alt="AstronautMarkus"
                                    className="w-96 h-96 sm:w-[28rem] sm:h-[28rem] md:w-[34rem] md:h-[34rem] pointer-events-none bg-transparent drop-shadow-2xl"
                                    style={{ objectFit: "contain" }}
                                />
                            </div>
                        </motion.div>
                    </div>
                    <motion.div
                        className="flex flex-col md:flex-row gap-3 md:gap-4 mb-4 w-full items-center justify-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.8 }}
                    >
                        <Link
                            to="/contact"
                            className="flex items-center gap-3 px-6 sm:px-7 py-2 sm:py-2.5 bg-rose-700 text-white rounded-lg font-bold shadow-lg hover:bg-rose-800 transition justify-center text-sm sm:text-base md:text-lg hover:scale-105 transform transition duration-300"
                        >
                            <Mail size={18} />
                            Get In Touch
                        </Link>
                        <Link
                            to="/projects"
                            className="flex items-center gap-3 px-6 sm:px-7 py-2 sm:py-2.5 bg-white/20 text-white rounded-lg font-bold shadow-lg hover:bg-white/40 transition justify-center text-sm sm:text-base md:text-lg hover:scale-105 transform transition duration-300"
                        >
                            <Code size={18} />
                            View Projects / Experiments
                        </Link>
                    </motion.div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6">
                    <motion.div
                        className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 max-w-6xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        <motion.div
                            className="flex-shrink-0"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        >
                        <div className="w-64 h-64 bg-gray-300 rounded-full flex items-center justify-center shadow-lg">
                            <img src={ProfilePic} alt="Profile" className="w-full h-full object-cover rounded-full pointer-events-none" />
                        </div>
                        </motion.div>
                        
                        <motion.div
                            className="flex-1 text-center lg:text-left"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                        >
                            <h2 className="text-3xl lg:text-4xl font-bold text-rose-700 mb-6">Who am I?</h2>
                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                My full name is <strong>Marcos Andrés Alberto Reyes Martínez</strong>, yes, quite long. I was born on <span className="text-rose-700 font-semibold">March 16, 2003</span> in <strong>Santiago, Chile</strong>. For as long as I can remember, I've been sitting at the computer, always with the desire to <span className="text-rose-700 font-semibold">create things</span>. Sometimes I can't sleep thinking about new projects or ideas I could carry out.
                            </p>
                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                               I graduated as a <strong>Computer Programmer Analyst</strong> in <span className="text-rose-700 font-semibold">2025</span> from <strong>Duoc UC institute</strong>. I currently work as an independent <span className="text-rose-700 font-semibold">Full Stack Developer</span> and also as an independent <span className="text-rose-700 font-semibold">Linux Systems Administrator</span>. I love learning new technologies and tools that allow me to improve my skills and knowledge in software development and systems administration.
                               I'd say the thing that entertains me the most is <strong>SSR</strong>. How far you can leverage it with creative thinking to achieve interesting things. <span className="italic text-gray-600"> <br /><br /> "Can you imagine reviving an old browser with an intermediate SSR web between the client and server? Crazy things that go through my head."</span>
                            </p>
                        </motion.div>
                    </motion.div>

                    <UserStats />
                </div>
            </section>

            <FeaturedProjects />

            <LastPosts />

            <TechStackDemo />

            <FinalPageUrls />

        </>
    );
}

export default Home;
