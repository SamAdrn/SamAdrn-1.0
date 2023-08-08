"use client";
import React, { useState, useEffect } from "react";
import ProfileIcon from "./profile-icons";
import { motion } from "framer-motion";
import { hoveringIcons } from "@/app/components/constants";

function ProfilePicture({ isMobile }) {
    const [anim, setAnim] = useState(false);

    useEffect(() => {
        const intro = () => {
            setAnim(true);
            const delay = isMobile ? 1000 : 2000;
            setTimeout(() => setAnim(false), delay);
        };

        intro();
    }, [isMobile]);

    return (
        <div
            className={
                "w-4/6 mb-5 md:h-3/6 md:m-14 flex justify-center items-center"
            }
        >
            <motion.img
                className={
                    "rounded-full drop-shadow-xl md:h-2/3 lg:h-full z-10"
                }
                src="/profile.jpg"
                alt="Picture of the author"
                initial={{ scale: 1, y: 30 }}
                animate={{ scale: anim ? 0.9 : 1, y: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
            />
            {hoveringIcons.map((e, i) => (
                <ProfileIcon
                    key={i}
                    state={!isMobile}
                    icon={e.icon}
                    transX={e.x}
                    transY={e.y}
                />
            ))}
        </div>
    );
}

export default ProfilePicture;
