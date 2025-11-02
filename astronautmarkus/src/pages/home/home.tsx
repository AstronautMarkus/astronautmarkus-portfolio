import { Link } from "react-router-dom";
import Background from "../../assets/img/background.png";
import AstronautMarkus from "../../assets/img/astronautmarkus/AstronautMarkus-02.png";
import { Github, Linkedin, Mail, Rocket, Twitter, Instagram } from "lucide-react";
import { motion } from "framer-motion";

function Home() {
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
                                    AstronautMarkusDev
                                </span>
                            </motion.h1>
                            <motion.h2
                                className="flex flex-col items-center gap-2 text-lg sm:text-xl md:text-2xl text-rose-600 font-semibold mb-3 md:mb-4"
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
                                Hello, I'm Markus Reyes, a Fullstack Developer and Systems Administrator. I build user-friendly apps and solve tech problems using modern tools. I enjoy learning new things and keeping up with industry trends. Let's connect and work together!
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
                                    className="bg-white/10 hover:bg-rose-700 transition rounded-full p-2 sm:p-3 shadow text-white flex items-center"
                                >
                                    <Github size={24} />
                                </a>
                                <a
                                    href="https://linkedin.com/in/markusreyes"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white/10 hover:bg-rose-700 transition rounded-full p-2 sm:p-3 shadow text-white flex items-center"
                                >
                                    <Linkedin size={24} />
                                </a>
                                <a
                                    href="https://x.com/astronautmarkus"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white/10 hover:bg-rose-700 transition rounded-full p-2 sm:p-3 shadow text-white flex items-center"
                                >
                                    <Twitter size={24} />
                                </a>
                                <a
                                    href="https://instagram.com/astronautmarkusdev"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white/10 hover:bg-rose-700 transition rounded-full p-2 sm:p-3 shadow text-white flex items-center"
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
                            className="flex items-center gap-3 px-6 sm:px-7 py-2 sm:py-2.5 bg-rose-700 text-white rounded-lg font-bold shadow-lg hover:bg-rose-800 transition justify-center text-sm sm:text-base md:text-lg"
                        >
                            <Mail size={18} />
                            Hangout
                        </Link>
                        <Link
                            to="/projects"
                            className="flex items-center gap-3 px-6 sm:px-7 py-2 sm:py-2.5 bg-white/20 text-white rounded-lg font-bold shadow-lg hover:bg-white/40 transition justify-center text-sm sm:text-base md:text-lg"
                        >
                            <Rocket size={18} />
                            View Projects / Experiments
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
}

export default Home;
