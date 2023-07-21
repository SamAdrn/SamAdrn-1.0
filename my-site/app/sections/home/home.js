"use client";

import React from "react";
import Title from "./title";
import ProfilePicture from "./profile-picture";
import { motion } from "framer-motion";
import MainButton from "@/app/components/main-button";

function Home() {
    return (
        <div className={"h-screen w-screen"}>
            <motion.div
                className={
                    "h-screen flex flex-col justify-center items-center pb-24 " +
                    "text-center bg-gradient-to-t from-amber-500 to-pink-400"
                }
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <ProfilePicture />
                <Title />
                <MainButton additionalStyles="m-8"/>
            </motion.div>
        </div>
    );
}

export default Home;
