function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="w-full">
            <nav className="w-full bg-gray-800 max-w-7xl mx-auto my-6 rounded-2xl shadow-lg flex items-center px-6 py-2">
                <span className="text-xl font-bold text-white mr-auto select-none">
                    &copy; {year} Marcos Reyes
                </span>
                <div className="flex gap-4">
                    <span className="text-sm font-medium text-gray-300">
                        Todos los derechos reservados.
                    </span>
                </div>
            </nav>
        </footer>
    );
}

export default Footer;