import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Layout: React.FC = () => {
    return (
        <div>
            <Navbar />
            <h1 className="bg-red-500">Vite + React</h1>
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;