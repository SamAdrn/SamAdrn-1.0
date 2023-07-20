import React from "react";
import { motion } from "framer-motion";

function ProfileIcon({ i, state, transX, transY, icon }) {

    return (
        <motion.img
            key={i}
            className="absolute w-16 h-16 z-0"
            initial={{ x: 0, y: 0 }}
            animate={{ x: state ? transX : 0, y: state ? transY : 0 }}
            transition={{ type: "spring" }}
            src={`/icons/${icon}.svg`}
            alt={`${icon} Icon`}
        />
    );
}

export default ProfileIcon;
