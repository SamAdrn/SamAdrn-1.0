"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import About from "./sections/about/about";
import Home from "./sections/home/home";
import Navbar from "./sections/navbar/navbar";
import Projects from "./sections/projects/projects";
import Contact from "./sections/contact/contact";
import { useMediaQuery } from "react-responsive";

export default function Page() {
    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

    const [isScrollAtTop, setIsScrollAtTop] = useState(false);

    useEffect(() => {
        const updateScroll = (e) => {
            if (e.target.documentElement.scrollTop >= 60) {
                setIsScrollAtTop(true);
            } else {
                setIsScrollAtTop(false);
            }
        };

        window.addEventListener("scroll", updateScroll);

        return () => window.removeEventListener("scroll", updateScroll);
    }, [isScrollAtTop]);

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
                "justify-between pb-0"
            }
            initial="enter"
            animate="center"
            variants={rootVariant}
        >
            <Navbar isMobile={isMobile} isScrollAtTop={isScrollAtTop} />

            <Home isMobile={isMobile} isScrollAtTop={isScrollAtTop} />

            <About isMobile={isMobile} />

            <Projects isMobile={isMobile} />

            <Contact />
        </motion.div>
    );
}
