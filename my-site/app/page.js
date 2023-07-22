"use client";

import About from "./sections/about/about";
import Home from "./sections/home/home";
import Navbar from "./sections/navbar/navbar";

export default function Page() {
    const isMobile = window.innerWidth < 768;

    return (
        <div
            className={
                "flex min-h-screen flex-col items-center " +
                "justify-between p-16 "
            }
        >
            <Navbar isMobile={isMobile} />

            <Home isMobile={isMobile} />

            <About isMobile={isMobile} />
        </div>
    );
}
