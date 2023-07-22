import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Description from "./description";

function AboutSubpage({ isMobile }) {
    const set = [
        {
            icons: ["react", "javascript", "tailwind", "html"],
            order: 1,
            hoverDir: 1,
        },
        {
            icons: ["css", "bootstrap", "jquery", "nodejs"],
            order: 2,
            hoverDir: 0,
        },
        {
            icons: ["mongodb", "firebase", "git", "github"],
            order: 4,
            hoverDir: 1,
        },
        { icons: ["ruby", "swift", "python", "java"], order: 5, hoverDir: 0 },
    ];

    const variants = {
        enter: {
            x: -1000,
            opacity: 0,
        },
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: {
            zIndex: 0,
            x: 1000,
            opacity: 0,
        },
    };

    return (
        <AnimatePresence mode="wait">
            <motion.div
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
            >
                <div className="visible lg:hidden mb-14 md:mx-20">
                    <Description />
                </div>
                <div className="flex flex-row justify-center">
                    {set.map((s, i) => (
                        <div key={i} className={`order-${s.order}`}>
                            <motion.div
                                className={
                                    "flex flex-col justify-center gap-10 mx-3 md:mx-7"
                                }
                                whileHover={{
                                    y: isMobile ? 0 : s.hoverDir ? 20 : -20,
                                }}
                            >
                                {s.icons.map((e, i) => (
                                    <motion.img
                                        className="h-11 md:h-16 drop-shadow-lg"
                                        key={i}
                                        src={`/icons/${e}.svg`}
                                        alt={`${e} Icon`}
                                        whileHover={{ scale: 1.4 }}
                                    />
                                ))}
                            </motion.div>
                        </div>
                    ))}

                    <div className="order-3 mx-10 w-1/3 hidden lg:flex">
                        <Description />
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}

export default AboutSubpage;
