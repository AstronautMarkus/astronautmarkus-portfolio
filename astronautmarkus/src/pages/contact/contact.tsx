import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter, Instagram, BookOpen } from "lucide-react";
import SeoHelmet from "../../utils/SeoHelmet";
import { useState, useEffect } from "react";
import AstronautMarkus from "../../assets/img/astronautmarkus/markus-greet.png";
import Background from "../../assets/img/background.jpg";
import { useI18n } from "../../context/i18n";

const socialLinks = [
    {
        name: "GitHub",
        url: "https://github.com/astronautmarkus",
        icon: Github,
        hover: "",
    },
    {
        name: "LinkedIn",
        url: "https://linkedin.com/in/markusreyes",
        icon: Linkedin,
        hover: "",
    },
    {
        name: "X",
        url: "https://x.com/astronautmarkus",
        icon: Twitter,
        hover: "",
    },
    {
        name: "Instagram",
        url: "https://instagram.com/astronautmarkusdev",
        icon: Instagram,
        hover: "",
    },
    {
        name: "Email",
        url: "mailto:marcos@reyesandfriends.cl",
        icon: Mail,
        hover: "",
    },
    {
        name: "Blog",
        url: "https://blog.astronautmarkus.dev",
        icon: BookOpen,
        hover: "",
    }
];

function Contact() {

    const { t } = useI18n();

    const fullText = t("contact.title");
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
                title="Contact Me - AstronautMarkusDev"
                description="Get in touch with Marcos Reyes through GitHub, LinkedIn, X, Instagram, Email, or visit my blog."
                keywords="Contact, Marcos Reyes, AstronautMarkusDev, GitHub, LinkedIn, X, Instagram, Email, Blog"
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
                                Let's connect! You can reach me through any of the platforms below. I'm always open to new opportunities, collaborations, or just a friendly chat.
                            </motion.p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <div className="bg-gradient-to-b from-[#18122B] via-[#1E1B3A] to-[#18122B] pb-24">
                <div className="container mx-auto px-4 sm:px-6 py-16">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {socialLinks.map((link, idx) => (
                            <motion.div
                                key={link.name}
                                className="rounded-xl border-2 border-[#a084ee] bg-gradient-to-br from-[#251a3a]/70 to-[#1e1b3a]/80 shadow-lg p-7 flex flex-col items-center hover:shadow-purple-700/40 transition-shadow duration-300 hover:scale-105 transition-transform"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
                            >
                                <a
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`group flex flex-col items-center w-full h-full transition duration-300`}
                                >
                                    <link.icon size={48} className="mb-4 text-[#a084ee] group-hover:text-white transition-colors duration-300" />
                                    <span className="font-semibold text-lg text-[#eaddff] group-hover:text-white transition-colors duration-300">{link.name}</span>
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;