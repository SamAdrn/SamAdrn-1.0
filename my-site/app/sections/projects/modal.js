"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import SVG from "@/app/components/svg";
import Button from "@/app/components/button";

const Modal = ({ handleClose, data }) => {
    const images = [
        "https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2019/04/supra-drift.jpg",
        "https://e1.pxfuel.com/desktop-wallpaper/999/1018/desktop-wallpaper-mitsubishi-evolution-iii-evo-3.jpg",
        "https://www.motortrend.com/uploads/2022/04/s15-silvia-specR-hood-off.jpg",
    ];

    const sourceIcons = ["github", "mail", "linkedin"];
    const techstack = ["java", "react", "firebase", "ansic"];

    const [index, setIndex] = useState(0);

    const Arrow = ({ direction }) => {
        const next = () => {
            setIndex((p) => (p + 1 === images.length ? 0 : p + 1));
        };

        const prev = () => {
            setIndex((p) => (p - 1 < 0 ? images.length - 1 : p - 1));
        };

        return (
            <AnimatePresence initial={false}>
                <SVG
                    icon={direction === "left" ? "chevronleft" : "chevronright"}
                    className={
                        "fill-white absolute inset-y-0 top-1/2 -translate-y-4 h-10 " +
                        "drop-shadow-lg p-1 z-30 cursor-pointer " +
                        `${
                            direction === "left"
                                ? "left-0 ms-3"
                                : "right-0 me-3"
                        }`
                    }
                    onClick={direction === "left" ? prev : next}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    whileHover={{ opacity: 1 }}
                />
            </AnimatePresence>
        );
    };

    return (
        <motion.div
            className={
                "w-5/6 md:w-4/6 h-fit bg-white rounded-lg flex flex-col justify-start"
            }
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{
                opacity: 0,
                y: 500,
                transition: { duration: 0.8, type: "spring" },
            }}
        >
            <div className="flex flex-col lg:flex-row w-full">
                <div
                    className={
                        "bg-gradient-to-t from-red-400 to-amber-500 " +
                        "shadow-lg p-5 md:p-7 lg:p-10 lg:pb-7 order-2 lg:order-1 " +
                        "lg:rounded-tl-lg lg:w-1/3"
                    }
                >
                    <h2
                        className={
                            "font-bold font-display text-white " +
                            "text-3xl md:text-4xl lg:text-5xl " +
                            "mb-2 md:mb-4 lg:mb-3"
                        }
                    >
                        Pocket Garage
                    </h2>
                    <div
                        className={
                            "hidden lg:flex flex-row flex-wrap mb-5 font-mono " +
                            "text-slate-100 "
                        }
                    >
                        #reactnative #mobiledevelopment
                    </div>
                    <h2
                        className={
                            "font-mono text-white text-lg mb-5 md:text-2xl " +
                            "lg:text-xl"
                        }
                    >
                        Java | Python | Swift
                    </h2>

                    <div
                        className={
                            "flex flex-row w-full justify-between px-5 " +
                            "mt-5 md:mt-8"
                        }
                    >
                        {sourceIcons.map((icon) => (
                            <SVG
                                key={icon}
                                icon={icon}
                                className={
                                    "drop-shadow-xl h-8 md:h-10 lg:h-12 lg:p-2 " +
                                    "rounded-lg cursor-pointer transition-colors " +
                                    "fill-slate-100 lg:hover:bg-white " +
                                    "lg:hover:fill-slate-800"
                                }
                                whileHover={{ y: 10 }}
                            />
                        ))}
                    </div>
                </div>
                <div
                    className={
                        "bg-black h-full rounded-t-lg order-1 lg:order-2 lg:w-2/3"
                    }
                >
                    <MotionConfig
                        transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
                    >
                        <div className="relative overflow-hidden h-full">
                            <motion.div
                                animate={{ x: `-${index * 100}%` }}
                                className="flex items-center"
                            >
                                {images.map((image) => (
                                    <img
                                        key={image}
                                        src={image}
                                        className={
                                            "aspect-[3/2] object-cover " +
                                            "rounded-t-lg lg:rounded-tl-none " +
                                            "lg:rounded-tr-lg"
                                        }
                                    />
                                ))}
                            </motion.div>
                            <Arrow direction="left" />
                            <Arrow direction="right" />
                        </div>
                    </MotionConfig>
                </div>
            </div>
            <div
                className={
                    "justify-around h-full flex flex-col py-6 px-10 gap-5 " +
                    "md:gap-5 lg:gap-5 lg:pb-12"
                }
            >
                <div
                    className={
                        "flex flex-row justify-around font-display text-sm " +
                        "md:text-lg lg:gap-12"
                    }
                >
                    <h2 className={"flex items-center gap-3 "}>
                        <SVG icon={"academic"} className={"inline"} />
                        Academic
                    </h2>
                    <h2 className={"flex items-center gap-3 "}>
                        <SVG icon={"calendar"} className={"inline"} />
                        October 2023
                    </h2>
                </div>
                <div className="h-full flex flex-col items-center">
                    <div className="leading-normal font-sans text-md md:text-lg">
                        Pocket Garage is an innovative automobile data retrieval
                        application that provides users with quick and detailed
                        information about various vehicles.{" "}
                        <div className="hidden md:inline">
                            Users can easily access comprehensive vehicle
                            information, including specifications such as body
                            classification, fuel type, drivetrain details,
                            engine specifications, and more. I made this project
                            as a form of practicing mobile development.{" "}
                        </div>
                        I used React Native to achieve cross-platform
                        compatibility.
                    </div>
                </div>
                <div
                    className={
                        "hidden lg:flex flex-row w-full items-center " +
                        "justify-start gap-6 p-3 ps-5 font-mono text-lg " +
                        "bg-slate-200 rounded-lg shadow-lg"
                    }
                >
                    Technologies Used:
                    {techstack.map((icon) => (
                        <motion.img
                            key={icon}
                            src={`/icons/${icon}.svg`}
                            className={"drop-shadow-xl w-10 cursor-pointer"}
                            whileHover={{ scale: 1.2 }}
                        />
                    ))}
                </div>
                <Button
                    title="Close"
                    onClick={handleClose}
                    style={
                        "lg:hidden bg-red-500 text-white active:bg-white " +
                        "active:border-2 active:border-red-500 active:text-black"
                    }
                />
            </div>
        </motion.div>
    );
};

export default Modal;
