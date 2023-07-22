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
        title: "University of Maryland, College Park",
        timeframe: "August 2021 - May 2024",
        location: "College Park, MD",
        description: [
            "Bachelor's of Science (B.S.) in Computer Science",
            "Dean's List: Fall 2022, Spring 2023",
            "Coursework includes: iOS Development, Web Development, Algorithms, Advanced Data Structures",
        ],
    },
    {
        title: "Edmonds College",
        timeframe: "September 2019 - June 2021",
        location: "Lynnwood, WA",
        description: [
            "Associate's of Science (A.S.) in Computer Science",
            "Graduated with Academic Honors (3.8 GPA out of a 4.0 scale)",
            "Became a member of the Phi Theta Kappa Honor Society",
            "Achieved a High School Diploma while taking college courses",
            "Successfully overcame COVID-19"
        ],
    },
    {
        title: "Mahatma Gading Intercultural School",
        timeframe: "July 2009 - July 2019",
        location: "Jakarta, Indonesia",
        description: [
            "5 Cambridge IGCSEs (Mathematics [A], Physics [A], English [A], ICT [A], Business [C])",
            "Ranked Top-5 amongst 60 students within the Class of 2019",
            "Won the Most Diligent Student Award upon graduation",
        ],
    },
];

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
                    data={data}
                />
            </motion.div>
        </AnimatePresence>
    );
}

export default EducationSubpage;
