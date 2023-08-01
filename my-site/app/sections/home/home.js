"use client";

import React from "react";
import Title from "./title";
import ProfilePicture from "./profile-picture";
import { motion } from "framer-motion";
import Button from "@/app/components/button";

function Home({ isMobile }) {
    return (
        <motion.div
            className={
                "w-screen h-screen flex flex-col justify-center items-center " +
                "pb-24 text-center bg-gradient-to-t from-red-400 to-amber-500 " +
                "shadow-lg"
            }
            
        >
            <ProfilePicture isMobile={isMobile} />
            <Title />
            <Button
                title="View My Resume"
                additionalStyles={
                    "m-10 md:px-10 bg-white text-slate-800 " +
                    "text-xl md:text-3xl"
                }
            />
        </motion.div>
    );
}

export default Home;
