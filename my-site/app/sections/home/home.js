"use client";

import React from "react";
import Title from "./title";
import ProfilePicture from "./profile-picture";
import { motion } from "framer-motion";
import MainButton from "@/app/components/main-button";

function Home({ isMobile }) {
    return (
        <div className={"h-screen w-screen"}>
            <motion.div
                className={
                    "h-screen flex flex-col justify-center items-center pb-24 " +
                    "text-center bg-gradient-to-t " +
                    "from-red-400 to-amber-500"
                    // "from-yellow-300 to-orange-500"
                }
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <ProfilePicture isMobile={isMobile} />
                <Title />
                <MainButton additionalStyles="m-8" />
            </motion.div>
        </div>
    );
}

export default Home;
