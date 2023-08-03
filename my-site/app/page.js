"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import About from "./sections/about/about";
import Home from "./sections/home/home";
import Navbar from "./sections/navbar/navbar";
import Projects from "./sections/projects/projects";
import Contact from "./sections/contact/contact";

export default function Page() {
    const isMobile = window.innerWidth < 768;

    const [isScrollAtTop, setIsScrollAtTop] = useState(false);

    const updateScroll = () => {
        if (window.scrollY >= 60) {
            setIsScrollAtTop(true);
        } else {
            setIsScrollAtTop(false);
        }
    };

    window.addEventListener("scroll", updateScroll);

    const rootVariant = {
        enter: {
            opacity: 0,
            y: -50,
        },
        center: {
            opacity: 1,
            y: 0,
            transition: { duration: 2, type: "spring" },
        },
    };

    return (
        <motion.div
            className={
                "flex min-h-screen flex-col items-center " +
                "justify-between p-16 pb-0"
            }
            initial="enter"
            animate="center"
            variants={rootVariant}
        >
            <Navbar isMobile={isMobile} isScrollAtTop={isScrollAtTop} />

            <Home isMobile={isMobile} isScrollAtTop={isScrollAtTop} />

            <About isMobile={isMobile} />

            <Projects isMobile={isMobile} />

            <Contact isMobile={isMobile} />
        </motion.div>
    );
}
