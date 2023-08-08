import React from "react";
import { motion, useAnimationControls } from "framer-motion";
import Image from "next/image"

const overlayVariants = {
    rest: { opacity: 0 },
    hover: { opacity: 1 },
};

const thumbnailVariant = {
    enter: {
        opacity: 0,
        scale: 1.2,
    },
    center: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
        },
    },
};

function Thumbnail({ isMobile, onClick, id, title, languages }) {
    const controls = useAnimationControls();
    return (
        <motion.div
            className={
                "bg-slate-200 h-[20vh] md:h-[15vh] lg:md:h-[20vh] m-4 lg:m-6 rounded-lg shadow-lg relative cursor-pointer"
            }
            variants={thumbnailVariant}
        >
            <Image
                className="h-full w-full object-cover rounded-lg"
                src={`/projects/${id}/thumb.png`}
                alt={`${title} thumbnail`}
                width={4000}
                height={4000}
            />
            <motion.div
                className={
                    "bg-neutral-700 bg-opacity-90 h-full w-full absolute " +
                    "top-0 left-0 rounded-lg flex flex-col gap-5 " +
                    "items-center justify-center text-white text-xl " +
                    "font-mono font-semibold drop-shadow-md"
                }
                animate={controls}
                variants={overlayVariants}
                initial="rest"
                onHoverStart={() => {
                    if (!isMobile) controls.start("hover");
                }}
                onHoverEnd={() => {
                    if (!isMobile) controls.start("rest");
                }}
                onClick={onClick}
            >
                <h2 className={""}>{title}</h2>
                <h2 className={""}>{languages.join(" | ")}</h2>
                <h2 className={"text-sm"}>Click to Learn More</h2>
            </motion.div>
        </motion.div>
    );
}

export default Thumbnail;
