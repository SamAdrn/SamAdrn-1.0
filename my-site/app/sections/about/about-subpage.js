import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactBar from "./contact-bar";
import Description from "./description";

function AboutSubpage() {
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

    return (
        <AnimatePresence mode="wait">
            <motion.div
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
            >
                <div
                    className={
                        "flex flex-col items-center " +
                        "lg:grid lg:grid-cols-12 lg:px-40"
                    }
                >
                    <div
                        className={
                            "flex flex-col justify-start items-center " +
                            "h-full lg:col-span-3 lg:py-10"
                        }
                    >
                        <div className="flex flex-row mb-2 lg:flex-col">
                            <img
                                className="h-8 inline me-3 md:h-10 lg:h-20 lg:mb-6"
                                src="/icons/info.svg"
                                alt="Info Icon"
                            />
                            <h2
                                className={
                                    "inline font-display font-semibold " +
                                    "text-3xl mb-2 md:text-4xl"
                                }
                            >
                                About
                            </h2>
                        </div>
                        <p className="font-medium font-display mt-2 md:text-xl">
                            A brief description of me
                        </p>
                    </div>
                    <div className="lg:col-span-4 mt-10 md:mx-10 lg:m-0">
                        <div
                            className={"flex justify-center px-20 md:px-10 lg:flex-col"}
                        >
                            <img
                                className={
                                    "drop-shadow-xl rounded-l-xl md:w-5/6 " +
                                    "lg:w-full lg:rounded-lg"
                                }
                                src="profile2.jpg"
                                alt="Another picture of the author"
                            />
                            <ContactBar />
                        </div>
                    </div>
                    <div className="flex p-16 lg:p-0 lg:px-10 lg:col-span-5 items-center">
                        <Description />
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}

export default AboutSubpage;
