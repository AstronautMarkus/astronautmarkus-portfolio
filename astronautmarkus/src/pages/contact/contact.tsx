import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Rocket, Twitter, Instagram, BookOpen } from "lucide-react";
import { useEffect, useState } from "react";
import Background from "../../assets/img/background.png";

const socialLinks = [
    {
        name: "GitHub",
        url: "https://github.com/astronautmarkus",
        icon: Github,
        color: "hover:bg-gray-800",
    },
    {
        name: "LinkedIn",
        url: "https://linkedin.com/in/markusreyes",
        icon: Linkedin,
        color: "hover:bg-blue-600",
    },
    {
        name: "Twitter (X)",
        url: "https://x.com/astronautmarkus",
        icon: Twitter,
        color: "hover:bg-black",
    },
    {
        name: "Instagram",
        url: "https://instagram.com/astronautmarkusdev",
        icon: Instagram,
        color: "hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500",
    },
    {
        name: "Email",
        url: "mailto:marcos@reyesandfriends.cl",
        icon: Mail,
        color: "hover:bg-rose-700",
    },
    {
        name: "Blog",
        url: "https://blog.astronautmarkus.dev",
        icon: BookOpen,
        color: "hover:bg-white/40",
    }
];

function Contact() {

    const fullText = "Contact Me";
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
        <section className="relative min-h-screen flex justify-center pt-32">
            <img
                src={Background}
                alt="background"
                className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none select-none"
                aria-hidden="true"
            />
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm pointer-events-none z-10" />

            <div className="relative z-20 w-full max-w-3xl px-4 sm:px-6 flex flex-col items-center">
                <motion.h1
                    className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 mt-4 drop-shadow-lg text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    <span>
                        {typedText}
                        <span
                            style={{
                                opacity: showCursor ? 1 : 0,
                                transition: "opacity 0.2s",
                                color: "#f43f5e",
                                fontWeight: "bold",
                                marginLeft: "0.5rem",
                            }}
                        >
                            |
                        </span>
                    </span>
                </motion.h1>
                <motion.p
                    className="text-base sm:text-lg md:text-xl text-white/80 max-w-xl mb-8 drop-shadow text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                >
                    Let's connect! You can reach me through any of the platforms below. I'm
                    always open to new opportunities, collaborations, or just a friendly
                    chat.
                </motion.p>
                <motion.div
                    className="grid grid-cols-2 sm:grid-cols-3 gap-6 w-full justify-center"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: {
                            transition: { staggerChildren: 0.1 },
                        },
                    }}
                >
                    {socialLinks.map((link, idx) => (
                        <motion.div
                            key={link.name}
                            className="flex justify-center"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 + idx * 0.1 }}
                        >

                            <a
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`bg-white/10 ${link.color} transition rounded-xl p-4 shadow text-white flex flex-col items-center w-32 h-32 justify-center hover:scale-105 transform duration-300`}
                            >
                                <link.icon size={36} />
                                <span className="mt-3 font-semibold text-base">
                                    {link.name}
                                </span>
                            </a>
                            
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default Contact;