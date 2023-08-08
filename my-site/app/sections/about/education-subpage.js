import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Timeline from "@/app/components/timeline";
import { educationData } from "@/app/components/constants";

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

function EducationSubpage() {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
            >
                <Timeline
                    title={"Education"}
                    subtitle={"A brief history of where I've studied"}
                    icon={"graduationcap"}
                    data={educationData}
                />
            </motion.div>
        </AnimatePresence>
    );
}

export default EducationSubpage;
