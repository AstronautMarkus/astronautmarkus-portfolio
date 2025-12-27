import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import FinalPageUrls from "./components/FinalPageUrls/FinalPageUrls";
import { I18nProvider } from "../context/i18n";

const LayoutApp: React.FC = () => {
    return (
        <I18nProvider>
            <div className="bg-gray-100 flex flex-col min-h-screen relative">
                <Header />
                <main className="flex-1">
                    <Outlet />
                </main>
                <FinalPageUrls />
                <Footer />
            </div>
        </I18nProvider>
    );
};

export default LayoutApp;