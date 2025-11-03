import { Github, Twitter, Linkedin } from "lucide-react";

function Footer() {
    return (
        <footer className="bg-zinc-800 shadow p-6 text-center text-gray-400 flex flex-col items-center gap-3">
            <div className="flex gap-6 justify-center mb-2">
                <a
                    href="https://github.com/astronautmarkus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-rose-700 transition-colors"
                    aria-label="GitHub"
                >
                    <Github size={28} />
                </a>
                <a
                    href="https://x.com/astronautmarkus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                    aria-label="Twitter"
                >
                    <Twitter size={28} />
                </a>
                <a
                    href="https://linkedin.com/in/markusreyes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-500 transition-colors"
                    aria-label="LinkedIn"
                >
                    <Linkedin size={28} />
                </a>
            </div>
            <span className="hover:text-rose-700 transition-colors">
                © {new Date().getFullYear()} AstronautMarkusDev. All rights reserved.
            </span>
        </footer>
    );
}

export default Footer;
