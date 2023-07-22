import React from "react";
import { motion } from "framer-motion";

function PageButton({ label, setActivePage, activePage, pageNum }) {
    const buttonVariant = {
        enter: {
            opacity: 0,
            scale: 0,
        },
        center: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
            },
        },
    };

    return (
        <motion.div
            key={pageNum}
            role="button"
            className={
                "px-3 py-3 font-mono my-2 mx-1 rounded-md " +
                "transition-colors md:px-16 lg:px-28 md:text-xl lg:py-2 " +
                `${
                    activePage == pageNum
                        ? "shadow-md bg-white"
                        : "md:hover:bg-slate-300"
                }`
            }
            onClick={() => setActivePage(pageNum)}
            variants={buttonVariant}
        >
            {label}
        </motion.div>
    );
}

export default PageButton;
