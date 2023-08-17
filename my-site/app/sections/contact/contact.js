import React from "react";
import { motion } from "framer-motion";
import SVG from "@/app/components/svg";
import { contactButtons, ctaMessage } from "@/app/components/constants";

function Contact() {
    const rootVariant = {
        enter: {
            opacity: 0,
        },
        center: {
            opacity: 1,
            transition: {
                delayChildren: 0.7,
                staggerChildren: 0.2,
            },
        },
    };

    return (
        <motion.div
            className="w-full"
            initial="enter"
            whileInView="center"
            viewport={{ once: true }}
            variants={rootVariant}
        >
            <motion.div
                id="contact"
                className={
                    "w-full h-screen mt-20 pt-20 flex flex-col scroll-mt-3 " +
                    "bg-gradient-to-t from-red-400 to-amber-500 shadow-lg"
                }
            >
                <div
                    className={
                        "w-full h-full flex flex-col justify-center px-12 gap-12 lg:grid lg:grid-cols-2"
                    }
                >
                    <div
                        className={
                            "flex flex-col justify-center items-center gap-9"
                        }
                    >
                        <h2
                            className={
                                "font-bold font-display text-white text-center text-6xl lg:text-7xl  lg:px-9"
                            }
                        >
                            Let&apos;s get in touch
                        </h2>
                        <p className={"font-display text-white text-center"}>
                            {ctaMessage}
                        </p>
                    </div>
                    <div
                        className={
                            "flex flex-col gap-4 justify-center items-center"
                        }
                    >
                        {contactButtons.map((b) => (
                            <a
                                href={b.link}
                                target="_blank"
                                className="w-full md:px-12"
                                key={b.icon}
                            >
                                <motion.div
                                    className={
                                        "flex justify-center items-center " +
                                        "p-3 md:p-4 lg:p-3 group  " +
                                        "rounded-lg cursor-pointer " +
                                        "border-2 border-white  " +
                                        "lg:hover:bg-white lg:hover:text-slate-800 " +
                                        "transition-colors text-slate-100 " +
                                        "font-mono md:text-xl lg:text-2xl "
                                    }
                                    whileHover={{ x: 10 }}
                                    type="button"
                                >
                                    <SVG
                                        icon={b.icon}
                                        className={
                                            "h-6 md:h-8 lg:h-7 " +
                                            "pe-3 lg:pe-5 fill-slate-100 " +
                                            "lg:group-hover:fill-slate-800 " +
                                            "transition-colors"
                                        }
                                    />
                                    {b.label}
                                </motion.div>
                            </a>
                        ))}
                    </div>
                </div>
                <div
                    className={
                        "w-full pb-7 opacity-60 text-white flex flex-col lg:flex-row justify-center items-center gap-3 lg:gap-10"
                    }
                >
                    <a
                        href="https://github.com/SamAdrn/PersonalWebsite"
                        target="_blank"
                    >
                        <div className="flex flex-row items-center">
                            <p>Handcrafted using</p>
                            <SVG
                                icon="react"
                                className={"fill-neutral-100 h-6 ps-3"}
                            />
                        </div>
                    </a>

                    <div className="flex flex-row items-center">
                        <p>
                            Icons by{" "}
                            <a href="https://fontawesome.com/" target="_blank">
                                FontAwesome
                            </a>
                        </p>
                        <SVG
                            icon="fontawesome"
                            className={"fill-neutral-100 h-6 ps-3"}
                        />
                    </div>
                    <p>Samuel Kosasih ©2023</p>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default Contact;
