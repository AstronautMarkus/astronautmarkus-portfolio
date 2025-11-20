import { useGalleryList } from './hooks/useGalleryList';

function Gallery() {
    const galleryItems = useGalleryList();

    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
    };

    return (
        <section className="min-h-screen flex flex-col items-center justify-center py-16 px-4 bg-white">
            <h1 className="text-4xl font-bold text-rose-700 mb-12 mt-12 text-center">
                My Gallery
            </h1>
            <p className="text-xl text-gray-700 mb-8 text-center">
                Welcome to my personal collection of pictures that inspire me and shows my journey through this life.
            </p>

            <div className="w-full max-w-5xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {galleryItems.map((item) => (
                        <div
                            key={item.filename}
                            className="rounded-lg overflow-hidden shadow-lg group transition-transform duration-300 hover:scale-105 bg-white"
                        >
                            <img
                                src={item.path}
                                alt={item.suggested_title}
                                className="w-full h-56 object-cover pointer-events-none"
                            />
                            <div className="p-4">
                                <h2 className="text-lg font-semibold text-gray-800 mb-1">
                                    {item.suggested_title}
                                </h2>
                                <p className="text-gray-600 text-sm mb-2">
                                    {item.suggested_description}
                                </p>
                                <div className="text-xs text-gray-500 space-y-1">
                                    <div>
                                        <span className="font-semibold">File:</span> {item.filename}
                                    </div>
                                    <div>
                                        <span className="font-semibold">Size:</span> {item.size_kb.toFixed(1)} KB
                                    </div>
                                    <div>
                                        <span className="font-semibold">Dimensions:</span> {item.width} × {item.height}
                                    </div>
                                    <div>
                                        <span className="font-semibold">Date:</span> {formatDate(item.creation_date)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Gallery;