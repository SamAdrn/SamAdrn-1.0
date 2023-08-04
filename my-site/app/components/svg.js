import React from "react";
import { simpleIcons } from "./constants";
import { motion } from "framer-motion";

function SVG({
    key,
    icon,
    className,
    onClick,
    initial,
    animate,
    transition,
    whileHover,
    onHoverStart,
    onHoverEnd,
}) {
    return (
        <div key={key}>
            <motion.svg
                key={key}
                className={className}
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox={simpleIcons[icon].viewbox}
                onClick={onClick}
                initial={initial}
                animate={animate}
                transition={transition}
                whileHover={whileHover}
                onHoverStart={onHoverStart}
                onHoverEnd={onHoverEnd}
            >
                <path d={simpleIcons[icon].path} />
            </motion.svg>
        </div>
    );
}

export default SVG;
