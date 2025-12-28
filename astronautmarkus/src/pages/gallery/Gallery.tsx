import { useState, useMemo, useRef, useEffect } from 'react';
import { useGalleryList } from './hooks/useGalleryList';
import { X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SeoHelmet from '../../utils/SeoHelmet';
import { useI18n } from '../../context/i18n';
import Background from '../../assets/img/background.jpg';
import AstronautMarkus from '../../assets/img/astronautmarkus/AstronautMarkus-04.png';

function Gallery() {
    const galleryItems = useGalleryList();
    const [selectedItem, setSelectedItem] = useState<null | typeof galleryItems[0]>(null);
    const [filterOpen, setFilterOpen] = useState(false);
    const filterRef = useRef<HTMLDivElement>(null);
    const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'size' | 'name'>('newest');
    const { t } = useI18n();

    // Typewriter effect for hero title
    const fullText = t('gallery.title');
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

    const sortOptions = [
        { key: 'newest', label: t('gallery.filters.newest') },
        { key: 'oldest', label: t('gallery.filters.oldest') },
        { key: 'size', label: t('gallery.filters.size') },
        { key: 'name', label: t('gallery.filters.name') },
    ];

    const sortedItems = useMemo(() => {
        let items = [...galleryItems];
        if (sortBy === 'newest') {
            items.sort((a, b) => new Date(b.creation_date).getTime() - new Date(a.creation_date).getTime());
        } else if (sortBy === 'oldest') {
            items.sort((a, b) => new Date(a.creation_date).getTime() - new Date(b.creation_date).getTime());
        } else if (sortBy === 'size') {
            items.sort((a, b) => b.size_kb - a.size_kb);
        } else if (sortBy === 'name') {
            items.sort((a, b) => a.filename.localeCompare(b.filename));
        }
        return items;
    }, [galleryItems, sortBy]);

    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
    };

    const closeModal = () => setSelectedItem(null);

    useEffect(() => {
        if (!filterOpen) return;
        function handleClickOutside(event: MouseEvent) {
            if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
                setFilterOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [filterOpen]);

    return (
        <>
            <SeoHelmet
                title="Gallery - AstronautMarkusDev"
                description="Explore the personal gallery of AstronautMarkusDev, featuring a curated collection of inspiring pictures and moments from his journey."
                keywords="AstronautMarkusDev, Gallery, Photos, Pictures, Collection, Inspiration"
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
                                {t('gallery.description')}
                            </motion.p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <div className="bg-gradient-to-b from-[#18122B] via-[#1E1B3A] to-[#18122B] pb-24 min-h-screen">
                <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-16">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
                        <motion.div
                            className="flex items-center gap-2"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                        >
                            <div className="relative" ref={filterRef}>
                                <button
                                    className="inline-flex items-center gap-2 px-8 py-3 bg-purple-700 text-white rounded-full font-semibold shadow-lg hover:bg-purple-800 transition hover:scale-105 transform duration-300 mt-4 cursor-pointer relative"
                                    onClick={() => setFilterOpen(v => !v)}
                                    aria-haspopup="true"
                                    aria-expanded={filterOpen}
                                >
                                    <ChevronDown className='inline mr-2' />
                                    {t('gallery.filters.button')}
                                </button>
                                <AnimatePresence>
                                    {filterOpen && (
                                        <motion.ul
                                            className="absolute left-0 top-full mt-2 bg-[#251a3a] border border-[#a084ee] rounded-lg shadow-lg z-20 min-w-[180px]"
                                            initial={{ opacity: 0, y: -10, scale: 0.97 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: -10, scale: 0.97 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {sortOptions.map(opt => (
                                                <li key={opt.key}>
                                                    <button
                                                        className={`w-full text-left px-4 py-2 hover:bg-[#a084ee]/20 transition-colors cursor-pointer ${
                                                            sortBy === opt.key ? 'font-bold text-[#a084ee]' : 'text-white'
                                                        }`}
                                                        onClick={() => {
                                                            setSortBy(opt.key as any);
                                                            setFilterOpen(false);
                                                        }}
                                                    >
                                                        {opt.label}
                                                    </button>
                                                </li>
                                            ))}
                                        </motion.ul>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    </div>
                    <motion.div
                        className="w-full"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.25 }}
                    >
                        <motion.div
                            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: {},
                                visible: {
                                    transition: {
                                        staggerChildren: 0.07,
                                        delayChildren: 0.35,
                                    },
                                },
                            }}
                        >
                            {sortedItems.map((item, idx) => (
                                <motion.div
                                    key={item.filename}
                                    className="rounded-xl border-2 border-[#a084ee] bg-gradient-to-br from-[#251a3a]/70 to-[#1e1b3a]/80 shadow-lg p-0 flex flex-col items-center hover:shadow-purple-700/40 transition-shadow duration-300 hover:scale-105 transition-transform cursor-pointer"
                                    onClick={() => setSelectedItem(item)}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.35 + idx * 0.07 }}
                                >
                                    <img
                                        src={item.path}
                                        alt={t('gallery.alt')}
                                        className="w-full h-56 object-cover pointer-events-none rounded-t-xl"
                                    />
                                    <div className="p-4 w-full">
                                        <h2 className="text-lg font-semibold text-[#eaddff] mb-1 group-hover:text-white transition-colors duration-300">
                                            {t(`gallery.items.${item.id}.title`)}
                                        </h2>
                                        <p className="text-[#eaddff]/80 text-sm mb-2 group-hover:text-white transition-colors duration-300">
                                            {t(`gallery.items.${item.id}.description`)}
                                        </p>
                                        <div className="text-xs text-[#eaddff]/70 space-y-1">
                                            <div>
                                                <span className="font-semibold">{t('gallery.file')}:</span> {item.filename}
                                            </div>
                                            <div>
                                                <span className="font-semibold">{t('gallery.size')}:</span> {item.size_kb.toFixed(1)} KB
                                            </div>
                                            <div>
                                                <span className="font-semibold">{t('gallery.dimensions')}:</span> {item.width} × {item.height}
                                            </div>
                                            <div>
                                                <span className="font-semibold">{t('gallery.date')}:</span> {formatDate(item.creation_date)}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
                        onClick={closeModal}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.35 }}
                    >
                        <button
                            className="fixed top-6 right-8 z-60 text-white hover:text-[#a084ee] text-4xl font-bold transition-colors flex items-center justify-center cursor-pointer"
                            onClick={closeModal}
                            aria-label="Close"
                            style={{ textShadow: '0 2px 8px #000' }}
                        >
                            <X size={40} strokeWidth={2.5} />
                        </button>
                        <motion.div
                            className="relative max-w-3xl w-full mx-4 p-0"
                            onClick={e => e.stopPropagation()}
                            initial={{ opacity: 0, scale: 0.95, y: 40 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 40 }}
                            transition={{ duration: 0.35 }}
                        >
                            <img
                                src={selectedItem.path}
                                alt={t('gallery.alt')}
                                className="w-full max-h-[80vh] object-contain rounded-lg"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default Gallery;