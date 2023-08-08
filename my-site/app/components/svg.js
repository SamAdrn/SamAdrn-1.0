import React from "react";
import { svgIcons } from "./constants";
import { motion } from "framer-motion";

function SVG({
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
        <motion.svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox={svgIcons[icon].viewbox}
            onClick={onClick}
            initial={initial}
            animate={animate}
            transition={transition}
            whileHover={whileHover}
            onHoverStart={onHoverStart}
            onHoverEnd={onHoverEnd}
        >
            <path d={svgIcons[icon].path} />
        </motion.svg>
    );
}

export default SVG;
