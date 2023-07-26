import React from "react";
import { motion, useAnimationControls } from "framer-motion";

const overlayVariants = {
    rest: { opacity: 0 },
    hover: { opacity: 1 },
};

function Thumbnail({ isMobile }) {
    const controls = useAnimationControls();
    return (
        <motion.div
            className={
                "bg-slate-200 h-[20vh] m-4 md:m-6 rounded-lg shadow-lg relative"
            }
        >
            <img
                className="h-full w-full object-cover rounded-lg"
                src="https://i.ytimg.com/vi/iLPQkzwxvAg/maxresdefault.jpg"
            />
            <motion.div
                className={
                    "bg-slate-700 bg-opacity-70 h-full w-full absolute " +
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
                onTap={(e) => {
                    if (isMobile) controls.start("hover");
                }}
                onTapCancel={(e) => {
                    if (isMobile) controls.start("rest");
                }}
            >
                <h2 className={""}>Project</h2>
                <h2 className={""}>Java | OCaml</h2>
            </motion.div>
        </motion.div>
    );
}

export default Thumbnail;
