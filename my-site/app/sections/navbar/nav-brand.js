import React from "react";
import { motion } from "framer-motion";

function NavBrand({ colorChange }) {
    return (
        <motion.a
            href="#"
            className="flex items-center"
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
        >
            <span
                className={
                    "self-center text-4xl font-semibold font-mono " +
                    "transition-colors p-1 rounded " +
                    `${
                        colorChange
                            ? "text-black md:hover:bg-gradient-to-r " +
                              "md:hover:from-amber-600 md:hover:to-pink-500 " +
                              "md:hover:bg-clip-text md:hover:text-transparent"
                            : "text-white drop-shadow-md md:hover:bg-white " +
                              "md:hover:text-black"
                    }`
                }
            >
                Samuel K<span className="hidden md:inline">osasih</span>
                <span className="md:hidden">.</span>
            </span>
        </motion.a>
    );
}

export default NavBrand;
