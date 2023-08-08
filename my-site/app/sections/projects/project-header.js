import React from "react";
import { motion } from "framer-motion";

function ProjectHeader() {
    return (
        <motion.div className={""}>
            <motion.h4
                className={
                    "text-md md:text-xl lg:text-2xl font-display font-semibold " +
                    "text-center mt-28 px-8 "
                }
            >
                That being said, I love working on projects whenever I get the
                chance to...
            </motion.h4>
            <motion.h2
                className={
                    "text-3xl md:text-4xl font-display font-semibold " +
                    "text-center mt-3 mx-8 border-b-4 border-slate-600 pb-7"
                }
                // variants={subtitleVariant}
            >
                Here are some of the things I&apos;ve built:
            </motion.h2>
        </motion.div>
    );
}

export default ProjectHeader;
