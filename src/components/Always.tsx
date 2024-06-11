import React from "react";
import { NavBar } from "./ui/NavBar";
import { Footer } from "./ui/Footer";
import { Outlet } from "react-router-dom";

export const Always = () => {
    return (
        <>
            <NavBar />
            <main className="content">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}