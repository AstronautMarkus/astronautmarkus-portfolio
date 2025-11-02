import { useEffect, useState } from "react";
import { Clock, Rocket, Code, Coffee } from "lucide-react";

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
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg w-40 h-28 sm:w-48 sm:h-32 flex flex-col items-center justify-center shadow-lg border border-gray-200 mx-auto">
                <Clock className="text-rose-600 mb-2" size={24} />
                <span className="text-2xl sm:text-3xl font-bold text-rose-600">
                    <AnimatedCounter value={2} duration={1.2} />+
                </span>
                <span className="text-xs sm:text-sm text-gray-600 text-center mt-1 px-2">Years Experience</span>
            </div>
            <div className="bg-white rounded-lg w-40 h-28 sm:w-48 sm:h-32 flex flex-col items-center justify-center shadow-lg border border-gray-200 mx-auto">
                <Rocket className="text-rose-600 mb-2" size={24} />
                <span className="text-2xl sm:text-3xl font-bold text-rose-600">
                    <AnimatedCounter value={25} duration={1.2} />+
                </span>
                <span className="text-xs sm:text-sm text-gray-600 text-center mt-1 px-2">Projects Completed</span>
            </div>
            <div className="bg-white rounded-lg w-40 h-28 sm:w-48 sm:h-32 flex flex-col items-center justify-center shadow-lg border border-gray-200 mx-auto">
                <Code className="text-rose-600 mb-2" size={24} />
                <span className="text-2xl sm:text-3xl font-bold text-rose-600">
                    <AnimatedCounter value={30} duration={1.2} />+
                </span>
                <span className="text-xs sm:text-sm text-gray-600 text-center mt-1 px-2">Technologies</span>
            </div>
            <div className="bg-white rounded-lg w-40 h-28 sm:w-48 sm:h-32 flex flex-col items-center justify-center shadow-lg border border-gray-200 mx-auto">
                <Coffee className="text-rose-600 mb-2" size={24} />
                <span className="text-2xl sm:text-3xl font-bold text-rose-600">
                    <AnimatedCounter value={777} duration={0.1} />
                </span>
                <span className="text-xs sm:text-sm text-gray-600 text-center mt-1 px-2">Coffee Cups Consumed</span>
            </div>
        </div>
    );
}

export default UserStats;