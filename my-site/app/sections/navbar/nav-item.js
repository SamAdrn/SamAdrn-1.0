import React from "react";
import { motion } from "framer-motion";

function NavItem({ title = "nav item", href = "#", scrollAtTop }) {
    return (
        <li>
            <motion.a
                href={href}
                className={
                    "block py-2 pl-3 pr-4 text-black " +
                    "text-xl rounded md:bg-transparent " +
                    "md:p-2 transition-colors " +
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
            >
                {title}
            </motion.a>
        </li>
    );
}

export default NavItem;
