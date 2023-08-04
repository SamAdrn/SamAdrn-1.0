import React from "react";
import { motion } from "framer-motion";

function NavBrand({ scrollAtTop }) {
    return (
        <motion.div
            className="flex items-center"
            initial={{ x: 0 }}
            whileHover={{ x: 10 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
            <span
                className={
                    "self-center text-4xl font-semibold font-mono " +
                    "transition-colors p-1 rounded " +
                    `${
                        scrollAtTop
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
        </motion.div>
    );
}

export default NavBrand;
