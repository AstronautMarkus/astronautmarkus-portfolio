import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const LayoutApp: React.FC = () => {
    return (
        <div className="bg-gray-50 flex flex-col relative">
            <Header />
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default LayoutApp;