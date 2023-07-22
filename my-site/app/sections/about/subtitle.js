import React from "react";
import { motion } from "framer-motion";

function Subtitle() {
    const subtitleVariant = {
        enter: {
            opacity: 0,
            scale: 0,
        },
        center: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
            },
        },
    };

    return (
        <motion.h2
            className={
                "text-5xl font-display font-semibold text-center m-8 " +
                "leading-snug md:text-7xl"
            }
            variants={subtitleVariant}
        >
            An Aspiring Software Engineer
        </motion.h2>
    );
}

export default Subtitle;
