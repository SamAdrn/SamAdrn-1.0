import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Timeline from "@/app/components/timeline";

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

const data = [
    {
        title: "Student Lead @ Terrapin Tech UMD",
        timeframe: "November 2021 - Present",
        location: "College Park, MD",
        description: [
            "Assist members of the University of Maryland community in troubleshooting various software issues",
            "Collaborated with other technicians to ensure a quick flow of customer service",
            "Maintained and created hundreds of customer purchase orders made by various university departments.",
        ],
    },
    {
        title: "Sponsorship Officer @ PERMIAS Seattle",
        timeframe: "February 2021 - July 2021",
        location: "Seattle, WA",
        description: [
            "Organized community events for Indonesian students across the state of Washington",
            "Teamed with fellow board members to promote the wonderful cultures of Indonesia",
            "This is a volunteer position",
        ],
    },
    {
        title: "Head of Logistics @ Edmonds Indonesian Club",
        timeframe: "September 2020 - July 2021",
        location: "Lynnwood, WA",
        description: [
            "Control and manage supplies for organizational events that take place within the college for students.",
            "This is a volunteer position",
        ],
    },
];

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
                    data={data}
                />
            </motion.div>
        </AnimatePresence>
    );
}

export default ExperienceSubpage;
