import React from "react";
import { motion } from "framer-motion";
import Thumbnail from "./thumbnail";

function Gallery({ isMobile }) {
    return (
        <motion.div
            className={
                "w-screen grid grid-cols-1 px-10 py-20 " +
                "md:grid-cols-3 md:px-40 md:py-20"
            }
        >
            <Thumbnail isMobile={isMobile} />
            <Thumbnail isMobile={isMobile} />
            <Thumbnail isMobile={isMobile} />
            <Thumbnail isMobile={isMobile} />
        </motion.div>
    );
}

export default Gallery;
