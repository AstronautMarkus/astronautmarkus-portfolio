import { useEffect, useState } from "react";
import { Clock, Rocket, Code, Coffee } from "lucide-react";
import { useI18n } from "../../../context/i18n";

function AnimatedCounter({ value, duration = 1.2 }: { value: any; duration?: number }) {
    const [count, setCount] = useState(0);

    
    useEffect(() => {
        let start = 0;
        const end = typeof value === "number" ? value : parseInt(value.replace(/\D/g, ""), 10);
        if (start === end) return;

        let incrementTime = (duration * 1000) / end;
        let timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start >= end) clearInterval(timer);
        }, incrementTime);

        return () => clearInterval(timer);
    }, [value, duration]);

    const display = typeof value === "number"
        ? count
        : count.toLocaleString();

    return (
        <span>
            {typeof value === "string" && value.includes(".")
                ? display
                : display}
        </span>
    );
}

function UserStats() {

    const { t } = useI18n();

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            <div className="bg-[#251a3a] rounded-2xl w-40 h-28 sm:w-48 sm:h-32 flex flex-col items-center justify-center shadow-2xl border-4 border-[#a084ee] mx-auto hover:shadow-purple-700/40 transition-shadow duration-300 hover:scale-105 transition-transform">
                <Clock className="text-[#a084ee] mb-2" size={28} />
                <span className="text-2xl sm:text-3xl font-bold text-[#a084ee] drop-shadow">
                    <AnimatedCounter value={2} duration={1.2} />+
                </span>
                <span className="text-xs sm:text-sm text-[#e0d7fa] text-center mt-1 px-2">{t('home.experience_years')}</span>
            </div>
            <div className="bg-[#251a3a] rounded-2xl w-40 h-28 sm:w-48 sm:h-32 flex flex-col items-center justify-center shadow-2xl border-4 border-[#a084ee] mx-auto hover:shadow-purple-700/40 transition-shadow duration-300 hover:scale-105 transition-transform">
                <Rocket className="text-[#a084ee] mb-2" size={28} />
                <span className="text-2xl sm:text-3xl font-bold text-[#a084ee] drop-shadow">
                    <AnimatedCounter value={25} duration={1.2} />+
                </span>
                <span className="text-xs sm:text-sm text-[#e0d7fa] text-center mt-1 px-2">{t('home.completed_projects')}</span>
            </div>
            <div className="bg-[#251a3a] rounded-2xl w-40 h-28 sm:w-48 sm:h-32 flex flex-col items-center justify-center shadow-2xl border-4 border-[#a084ee] mx-auto hover:shadow-purple-700/40 transition-shadow duration-300 hover:scale-105 transition-transform">
                <Code className="text-[#a084ee] mb-2" size={28} />
                <span className="text-2xl sm:text-3xl font-bold text-[#a084ee] drop-shadow">
                    <AnimatedCounter value={30} duration={1.2} />+
                </span>
                <span className="text-xs sm:text-sm text-[#e0d7fa] text-center mt-1 px-2">{t('home.technologies')}</span>
            </div>
            <div className="bg-[#251a3a] rounded-2xl w-40 h-28 sm:w-48 sm:h-32 flex flex-col items-center justify-center shadow-2xl border-4 border-[#a084ee] mx-auto hover:shadow-purple-700/40 transition-shadow duration-300 hover:scale-105 transition-transform">
                <Coffee className="text-[#a084ee] mb-2" size={28} />
                <span className="text-2xl sm:text-3xl font-bold text-[#a084ee] drop-shadow">
                    <AnimatedCounter value={777} duration={0.1} />
                </span>
                <span className="text-xs sm:text-sm text-[#e0d7fa] text-center mt-1 px-2">{t('home.coffee_drinked')}</span>
            </div>
        </div>
    );
}

export default UserStats;