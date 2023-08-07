"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import SVG from "@/app/components/svg";
import Button from "@/app/components/button";

const Modal = ({ handleClose, data }) => {
    const [carouselIndex, setCarouselIndex] = useState(0);

    const Arrow = ({ direction }) => {
        const next = () => {
            setCarouselIndex((p) =>
                p + 1 === data.numPreviewImages ? 0 : p + 1
            );
        };

        const prev = () => {
            setCarouselIndex((p) =>
                p - 1 < 0 ? data.numPreviewImages - 1 : p - 1
            );
        };

        return (
            <AnimatePresence initial={false}>
                <SVG
                    icon={direction === "left" ? "chevronleft" : "chevronright"}
                    className={
                        "absolute inset-y-0 top-1/2 -translate-y-4 h-10 " +
                        "drop-shadow-lg p-1 z-30 cursor-pointer " +
                        `${
                            direction === "left"
                                ? "left-0 ms-3"
                                : "right-0 me-3"
                        } ` +
                        `${
                            data.carouselScheme === "dark"
                                ? "fill-slate-800"
                                : "fill-white"
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
                transition: { duration: 0.7, type: "spring" },
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
                            "mb-1 md:mb-2 lg:mb-3"
                        }
                    >
                        {data.title}
                    </h2>
                    <div
                        className={
                            "flex flex-row flex-wrap mb-3 font-mono " +
                            "text-slate-100 md:text-lg lg:text-md"
                        }
                    >
                        {data.hashtags.join(" ")}
                    </div>
                    <h2
                        className={
                            "font-mono text-white text-lg mb-3 md:text-2xl " +
                            "lg:text-xl"
                        }
                    >
                        {data.languages.length === 1 && (
                            <span>Written in </span>
                        )}
                        {data.languages.join(" | ")}
                    </h2>

                    <div
                        className={
                            "flex flex-row w-full justify-between gap-2 " +
                            "mt-5 md:mt-5 lg:mt-8"
                        }
                    >
                        {!data.sources.length && (
                            <div
                                className={
                                    "flex justify-center items-center w-full p-2 md:p-3 lg:p-2 rounded-lg opacity-70 " +
                                    "border-2 border-white text-slate-100 font-mono capitalize md:text-xl lg:text-base"
                                }
                            >
                                <SVG
                                    icon="none"
                                    className={
                                        "drop-shadow-xl h-6 md:h-8 lg:h-6 " +
                                        "pe-3 lg:pe-2 fill-slate-100 "
                                    }
                                />
                                No Sources Available
                            </div>
                        )}
                        {data.sources.map((source) => (
                            <a
                                href={source.sourceLink}
                                target="_blank"
                                className="w-full"
                            >
                                <motion.div
                                    className={
                                        "flex justify-center items-center p-2 md:p-3 lg:p-2 cursor-pointer rounded-lg " +
                                        "transition-colors border-2 border-white lg:hover:bg-white lg:hover:text-slate-800 " +
                                        "text-slate-100 font-mono capitalize md:text-xl lg:text-base group"
                                    }
                                    whileHover={{ y: 10 }}
                                    type="button"
                                >
                                    <SVG
                                        key={source.sourceType}
                                        icon={source.sourceType}
                                        className={
                                            "drop-shadow-xl h-6 md:h-8 lg:h-5 " +
                                            "pe-3 lg:pe-2 fill-slate-100 " +
                                            "lg:group-hover:fill-slate-800 " +
                                            "transition-colors"
                                        }
                                    />
                                    {source.sourceType}
                                </motion.div>
                            </a>
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
                                animate={{ x: `-${carouselIndex * 100}%` }}
                                className="flex items-center"
                            >
                                {Array.from(
                                    Array(data.numPreviewImages),
                                    (_, i) => {
                                        console.log(
                                            Array(data.numPreviewImages)
                                        );
                                        console.log(i);
                                        return (
                                            <img
                                                key={`${data.id}-${i + 1}`}
                                                alt={`${data.title} Preview ${
                                                    i + 1
                                                }`}
                                                src={`/projects/${data.id}/${
                                                    i + 1
                                                }.png`}
                                                className={
                                                    "aspect-[3/2] object-cover " +
                                                    "rounded-t-lg lg:rounded-tl-none " +
                                                    "lg:rounded-tr-lg"
                                                }
                                            />
                                        );
                                    }
                                )}
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
                        "md:text-lg lg:gap-12 capitalize"
                    }
                >
                    <h2 className={"flex items-center gap-3 "}>
                        <SVG icon={data.type} className={"inline"} />
                        {data.type}
                    </h2>
                    <h2 className={"flex items-center gap-3 "}>
                        <SVG icon={"calendar"} className={"inline"} />
                        {data.date}
                    </h2>
                </div>
                <div className="h-full flex flex-col items-center">
                    <div className="leading-normal font-sans text-md md:text-lg">
                        {data.description.map((e) => (
                            <div
                                className={`${
                                    !e.showOnMobile
                                        ? "hidden md:inline"
                                        : "inline"
                                }`}
                            >
                                {e.content}{" "}
                            </div>
                        ))}
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
                    {data.techstack.map((icon) => (
                        <motion.img
                            key={icon}
                            src={`/icons/${icon}.svg`}
                            className={"drop-shadow-xl w-10"}
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
