import React from "react";
import { motion } from "framer-motion";

function Quote() {
    return (
        <motion.div
            className={
                "w-full bg-gradient-to-t from-amber-500 to-red-400 shadow-lg " +
                "h-[30vh] flex justify-center items-center"
            }
        >
            <motion.h2
                className={
                    "text-4xl text-white font-display font-semibold text-center " +
                    "m-8 md:text-5xl lg:text-4xl"
                }
                // variants={subtitleVariant}
            >
                Love what you do, and you won&apos;t have to work a day in your life
            </motion.h2>
        </motion.div>
    );
}

export default Quote;
