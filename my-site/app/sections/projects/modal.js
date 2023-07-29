"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";

const icons = {
    github: {
        icon: "github",
        viewBox: "0 0 496 512",
        path: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z",
    },
    linkedin: {
        icon: "linkedin",
        viewBox: "0 0 448 512",
        path: "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z",
    },
    mail: {
        icon: "mail",
        viewBox: "0 0 512 512",
        path: "M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z",
    },
    spotify: {
        icon: "spotify",
        viewBox: "0 0 496 512",
        path: "M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z",
    },
};

const Modal = ({ handleClose, data }) => {
    const images = [
        "https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2019/04/supra-drift.jpg",
        "https://e1.pxfuel.com/desktop-wallpaper/999/1018/desktop-wallpaper-mitsubishi-evolution-iii-evo-3.jpg",
        "https://www.motortrend.com/uploads/2022/04/s15-silvia-specR-hood-off.jpg",
    ];

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
                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                    className={
                        "fill-white absolute inset-y-0 top-1/2 -translate-y-4 h-10 " +
                        "drop-shadow-lg p-1 z-30 " +
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
                >
                    {direction === "left" ? (
                        <path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z" />
                    ) : (
                        <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z" />
                    )}
                </motion.svg>
            </AnimatePresence>
        );
    };

    return (
        <div
            className={
                "w-5/6 md:w-4/6 h-5/6 bg-white rounded-lg flex flex-col justify-start"
            }
            onClick={(e) => e.stopPropagation()}
        >
            <div className="flex flex-col lg:flex-row w-full h-3/5">
                <div
                    className={
                        "bg-gradient-to-t from-red-400 to-amber-500 shadow-lg p-5 md:p-7 lg:p-10 " +
                        "h-full order-2 lg:order-1 lg:rounded-tl-lg lg:w-1/3"
                    }
                >
                    <h2
                        className={
                            "font-bold font-display text-white text-3xl mb-2 md:text-5xl md:mb-4 lg:mb-3"
                        }
                    >
                        Pocket Garage
                    </h2>
                    <div
                        className={
                            "hidden lg:flex flex-row flex-wrap font-mono text-slate-100 mb-5"
                        }
                    >
                        #reactnative #mobiledevelopment
                    </div>
                    <h2
                        className={
                            "font-mono text-white text-lg mb-5 md:text-2xl lg:text-xl"
                        }
                    >
                        Java | Python | Swift
                    </h2>

                    <h2
                        className={
                            "font-mono text-white text-sm md:text-lg lg:hidden"
                        }
                    >
                        Academic - October 2023
                    </h2>
                    <div className="hidden lg:flex flex-col gap-3 font-display text-white text-lg">
                        <h2 className={"flex items-center gap-3 "}>
                            <img
                                src="/icons/academic.svg"
                                alt="Calendar"
                                className="inline"
                            />
                            Academic
                        </h2>
                        <h2 className={"flex items-center gap-3 "}>
                            <img
                                src="/icons/calendar.svg"
                                alt="Calendar"
                                className="inline"
                            />
                            October 2023
                        </h2>
                    </div>
                </div>
                <div
                    className={
                        "bg-black h-full rounded-t-lg order-1 lg:order-2 lg:w-2/3 "
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
                                        className="aspect-[3/2] object-cover rounded-t-lg lg:rounded-tl-none lg:rounded-tr-lg"
                                    />
                                ))}
                            </motion.div>
                            <Arrow direction="left" />
                            <Arrow direction="right" />
                        </div>
                    </MotionConfig>
                </div>
            </div>
            <div className="flex flex-col p-4 lg:flex-row lg:gap-8">
                <div className="flex flex-row justify-around gap-5 px-5 py-1 lg:flex-col">
                    <svg
                        key={icons["mail"].icon}
                        className={
                            "drop-shadow-xl h-7 md:h-10 lg:h-11 cursor-pointer"
                        }
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox={icons["mail"].viewBox}
                    >
                        <path d={icons["mail"].path} />
                    </svg>
                    <svg
                        key={icons["github"].icon}
                        className={
                            "drop-shadow-xl h-7 md:h-10 lg:h-11 cursor-pointer"
                        }
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox={icons["github"].viewBox}
                    >
                        <path d={icons["github"].path} />
                    </svg>
                    <svg
                        key={icons["mail"].icon}
                        className={
                            "drop-shadow-xl h-7 md:h-10 lg:h-11 cursor-pointer"
                        }
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox={icons["mail"].viewBox}
                    >
                        <path d={icons["mail"].path} />
                    </svg>
                </div>
                <div className="px-4 pt-3 text-justify leading-snug lg:px-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Eu non diam phasellus vestibulum lorem sed risus
                    ultricies. Fermentum dui faucibus in ornare quam viverra
                    orci sagittis.
                    <div className="hidden lg:inline">
                        Massa tincidunt nunc pulvinar sapien et ligula
                        ullamcorper malesuada proin. Laoreet non curabitur
                        gravida arcu ac tortor. Arcu cursus euismod quis viverra
                        nibh cras pulvinar mattis. Sed enim ut sem viverra
                        aliquet eget sit. Vitae elementum curabitur vitae nunc
                        sed velit dignissim sodales. Odio eu feugiat pretium
                        nibh ipsum consequat nisl vel pretium. Turpis in eu mi
                        bibendum. Eros in cursus turpis massa tincidunt dui ut
                        ornare.
                    </div>
                </div>
                <div className="hidden lg:flex">texhstach</div>
            </div>
        </div>
    );
};

export default Modal;
