import React from "react";
import { motion } from "framer-motion";

function Button({
    title = "Click",
    onClick = () => console.log("clicked"),
    style = "",
}) {
    return (
        <motion.button
            type="button"
            className={
                "text-sm font-medium text-center font-sans " +
                "rounded-lg px-4 py-2 transition-colors " +
                "md:text-lg md:px-5 md:py-3 " +
                `${style}`
            }
            onClick={onClick}
        >
            {title}
        </motion.button>
    );
}

export default Button;
