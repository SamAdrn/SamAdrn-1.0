"use client";

import React, { useState } from "react";
import { motion, MotionConfig } from "framer-motion";
import PageButton from "./page-button";
import Subtitle from "./subtitle";
import AboutSubpage from "./about-subpage";
import MainButton from "@/app/components/main-button";
import EducationSubpage from "./education-subpage";
import ExperienceSubpage from "./experience-subpage";

function About({ isMobile }) {
    const pages = ["About", "Education", "Experience"];

    const [page, setPage] = useState(0);

    return (
        <motion.div
            className={
                "w-screen h-fit flex flex-col justify-center items-center py-10 lg:py-28"
            }
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <Subtitle />

            <div className={"m-6 flex flex-row bg-slate-200 rounded-lg px-1"}>
                {pages.map((e, i) => (
                    <PageButton
                        label={e}
                        setActivePage={setPage}
                        activePage={page}
                        pageNum={i}
                    />
                ))}
            </div>

            <div className="bg-slate-100 w-screen h-fit flex justify-center p-12">
                <MotionConfig
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.5 },
                    }}
                >
                    {page == 0 ? <AboutSubpage isMobile={isMobile} /> : null}
                    {page == 1 ? (
                        <EducationSubpage />
                    ) : null}
                    {page == 2 ? (
                        <ExperienceSubpage />
                    ) : null}
                </MotionConfig>
            </div>
        </motion.div>
    );
}

export default About;
