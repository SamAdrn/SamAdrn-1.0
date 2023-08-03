import React from "react";
import { motion } from "framer-motion";
import Quote from "./quote";
import ProjectHeader from "./project-header";
import Gallery from "./gallery";

function Projects({ isMobile }) {
    const rootVariant = {
        enter: {
            opacity: 0,
        },
        center: {
            opacity: 1,
            transition: {
                delayChildren: 0.7,
                staggerChildren: 0.2,
            },
        },
    };

    return (
        <motion.div
            initial="enter"
            whileInView="center"
            viewport={{ once: true }}
            variants={rootVariant}
        >
            <motion.div
                className={
                    "w-screen h-fit flex flex-col justify-center items-center"
                }
            >
                <Quote />
                <ProjectHeader />
                <Gallery isMobile={isMobile}/>
            </motion.div>
        </motion.div>
    );
}

export default Projects;
