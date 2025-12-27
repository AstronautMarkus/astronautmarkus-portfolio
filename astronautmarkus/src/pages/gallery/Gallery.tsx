import { useState, useMemo } from 'react';
import { useGalleryList } from './hooks/useGalleryList';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SeoHelmet from '../../utils/SeoHelmet';
import { useI18n } from '../../context/i18n';

function Gallery() {
    const galleryItems = useGalleryList();
    const [selectedItem, setSelectedItem] = useState<null | typeof galleryItems[0]>(null);
    const [filterOpen, setFilterOpen] = useState(false);
    const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'size' | 'name'>('newest');
    const { t } = useI18n();

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

    return (
        <>
            <SeoHelmet
                title="Gallery - AstronautMarkusDev"
                description="Explore the personal gallery of AstronautMarkusDev, featuring a curated collection of inspiring pictures and moments from his journey."
                keywords="AstronautMarkusDev, Gallery, Photos, Pictures, Collection, Inspiration"
            />
            <section className="min-h-screen flex flex-col items-center justify-center py-16 px-4 bg-white">
                <motion.h1
                    className="text-4xl font-bold text-rose-700 mb-12 mt-12 text-center"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0 }}
                >
                    {t('gallery.title')}
                </motion.h1>
                <motion.p
                    className="text-xl text-gray-700 mb-8 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                >
                    {t('gallery.description')}
                </motion.p>

                <div className="w-full max-w-5xl flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
                    <motion.div
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                    >
                        <button
                            className="px-4 py-2 bg-rose-700 text-white rounded-lg font-semibold shadow hover:bg-rose-800 transition-colors cursor-pointer"
                            onClick={() => setFilterOpen(v => !v)}
                            aria-haspopup="true"
                            aria-expanded={filterOpen}
                        >
                            {t('gallery.filters.button')}
                        </button>
                        <AnimatePresence>
                            {filterOpen && (
                                <motion.ul
                                    className="absolute mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-20 min-w-[180px]"
                                    initial={{ opacity: 0, y: -10, scale: 0.97 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -10, scale: 0.97 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {sortOptions.map(opt => (
                                        <li key={opt.key}>
                                            <button
                                                className={`w-full text-left px-4 py-2 hover:bg-rose-50 transition-colors cursor-pointer ${
                                                    sortBy === opt.key ? 'font-bold text-rose-700' : ''
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
                    </motion.div>
                </div>
                <motion.div
                    className="w-full max-w-5xl"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.25 }}
                >
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
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
                                className="rounded-lg overflow-hidden shadow-lg group transition-transform duration-300 hover:scale-105 bg-white cursor-pointer"
                                onClick={() => setSelectedItem(item)}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.35 + idx * 0.07 }}
                            >
                                <img
                                    src={item.path}
                                    alt={t('gallery.alt')}
                                    className="w-full h-56 object-cover pointer-events-none"
                                />
                                <div className="p-4">
                                    <h2 className="text-lg font-semibold text-gray-800 mb-1">
                                        {t(`gallery.items.${item.id}.title`)}
                                    </h2>
                                    <p className="text-gray-600 text-sm mb-2">
                                        {t(`gallery.items.${item.id}.description`)}
                                    </p>
                                    <div className="text-xs text-gray-500 space-y-1">
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
                                className="fixed top-6 right-8 z-60 text-white hover:text-rose-700 text-4xl font-bold transition-colors flex items-center justify-center cursor-pointer"
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
            </section>
        </>
    );
}

export default Gallery;