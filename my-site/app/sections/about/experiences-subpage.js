import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Timeline from "@/app/components/timeline";
import { experiencesData } from "@/app/components/constants";

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

function ExperienceSubpage() {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
            >
                <Timeline
                    title={"Experiences"}
                    subtitle={"A brief history of where I've worked"}
                    icon={"briefcase"}
                    data={experiencesData}
                />
            </motion.div>
        </AnimatePresence>
    );
}

export default ExperienceSubpage;
