import React from "react";
import { motion } from "framer-motion";

const Backdrop = ({ handleClose, children }) => {
    return (
        <motion.div
            onClick={handleClose}
            className={
                "bg-slate-700 bg-opacity-90 h-full w-full fixed z-30 " +
                "top-0 left-0 flex justify-center items-center"
            }
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { delay: 0.4, duration: 0.5 } }}
        >
            {children}
        </motion.div>
    );
};

export default Backdrop;
