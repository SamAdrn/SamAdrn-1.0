import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

function NavItem({ title = "nav item", href = "#", scrollAtTop, isMobile }) {
    const variants = {
        open: { opacity: 1, height: "auto" },
        closed: { opacity: 0, height: 0 },
    };

    const handleClickScroll = () => {
        const element = document.getElementById(`${href}`);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
            });
        }
    };
    return (
        <motion.li variants={isMobile ? variants : {}}>
            <motion.div
                href={href}
                className={
                    "block py-2 pl-3 pr-4 text-black " +
                    "text-xl rounded md:bg-transparent " +
                    "md:p-2 transition-colors font-sans " +
                    `${
                        scrollAtTop
                            ? "text-black md:hover:text-orange-500"
                            : "text-white drop-shadow-md md:hover:bg-white " +
                              "md:hover:text-black"
                    }`
                }
                // aria-current="page"
                initial={{ y: 0 }}
                whileHover={{ y: -5 }}
                onClick={handleClickScroll}
                role="button"
            >
                {title}
            </motion.div>
        </motion.li>
    );
}

export default NavItem;
