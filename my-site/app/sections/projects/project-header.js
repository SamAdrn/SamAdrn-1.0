import React from "react";
import { motion } from "framer-motion";

function ProjectHeader() {
    return (
        <motion.div
            className={""}
        >
            <motion.h2
                className={
                    "text-3xl font-display font-semibold text-center " +
                    "mt-28 px-8 md:text-4xl"
                }
                // variants={subtitleVariant}
            >
                That being said, here are some of the things I've built
            </motion.h2>
        </motion.div>
    );
}

export default ProjectHeader;
