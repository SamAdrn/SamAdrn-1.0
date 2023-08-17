"use client";

import React from "react";
import Title from "./title";
import ProfilePicture from "./profile-picture";
import { motion } from "framer-motion";
import SVG from "@/app/components/svg";

function Home({ isMobile, isScrollAtTop }) {
    return (
        <motion.div
            className={
                "w-full h-screen flex flex-col justify-center items-center " +
                "pb-24 text-center bg-gradient-to-t from-red-400 to-amber-500 " +
                "shadow-lg"
            }
        >
            <ProfilePicture isMobile={isMobile} isScrollAtTop={isScrollAtTop} />
            <Title />

            <a href={"/Resume.pdf"} target="_blank">
                <motion.div
                    className={
                        "flex justify-center items-center p-4 lg:p-3 md:px-8 lg:px-10 mt-16 lg:mt-10 cursor-pointer rounded-lg " +
                        "transition-colors border-2 border-white lg:hover:bg-white lg:hover:text-slate-800 " +
                        "text-slate-100 font-mono md:text-xl lg:text-xl group"
                    }
                    whileHover={{ y: 10 }}
                    type="button"
                >
                    <SVG
                        key="file"
                        icon="file"
                        className={
                            "h-6 md:h-8 lg:h-6 " +
                            "pe-3 lg:pe-5 fill-slate-100 " +
                            "lg:group-hover:fill-slate-800 " +
                            "transition-colors"
                        }
                    />
                    View My Resume
                </motion.div>
            </a>
        </motion.div>
    );
}

export default Home;
