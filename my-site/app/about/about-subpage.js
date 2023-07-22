import React from "react";
import { motion } from "framer-motion";
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

    return (
        <div>
            {isMobile ? <Description /> : null}
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

                {!isMobile ? (
                    <div className="order-3 mx-10 w-1/3">
                        <Description />
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default AboutSubpage;
