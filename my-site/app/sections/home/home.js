"use client";

import React from "react";
import Title from "./title";
import ProfilePicture from "./profile-picture";
import { motion } from "framer-motion";

function Home() {
    return (
        <div className={"h-screen w-screen"}>
            <motion.div
                className={
                    "h-5/6 flex flex-col justify-center items-center " +
                    "text-center"
                }
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <ProfilePicture />
                <Title />
            </motion.div>
        </div>
    );
}

export default Home;
