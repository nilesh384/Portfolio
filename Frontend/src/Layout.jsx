import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Chats from "./Components/Chats";

export default function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
            <Chats/>
        </>
    );
}