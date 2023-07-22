"use client";
import React, { useState, useEffect } from "react";
import ProfileIcon from "./profile-icons";
import { motion } from "framer-motion";

function ProfilePicture({ isMobile }) {
    const [anim, setAnim] = useState(false);

    useEffect(() => {
        const intro = () => {
            setAnim(true);
            const delay = isMobile ? 1000 : 2000;
            setTimeout(() => setAnim(false), delay);
        };

        intro();
    }, []);

    const icons = [
        { icon: "html", x: "-11rem", y: "-13rem" },
        { icon: "javascript", x: "-15rem", y: "-7rem" },
        { icon: "css", x: "-17rem", y: 0 },
        { icon: "react", x: "-15rem", y: "7rem" },
        { icon: "nodejs", x: "-12rem", y: "13rem" },
        { icon: "swift", x: "15rem", y: "-7rem" },
        { icon: "python", x: "17rem", y: 0 },
        { icon: "ruby", x: "15rem", y: "7rem" },
        { icon: "git", x: "12rem", y: "13rem" },
        { icon: "java", x: "11rem", y: "-13rem" },
    ];

    return (
        <div
            className={
                "w-4/6 mb-5 md:h-3/6 md:m-14 flex justify-center items-center"
            }
        >
            <motion.img
                className={"rounded-full drop-shadow-xl h-full z-10"}
                src="/profile.jpg"
                alt="Picture of the author"
                onHoverStart={() => setAnim(true)}
                onHoverEnd={() => setAnim(false)}
                initial={{ scale: 1, y: 30 }}
                animate={{ scale: anim ? 0.7 : 1, y: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
            />
            {icons.map((e, i) => (
                <ProfileIcon
                    key={i}
                    state={anim && !isMobile}
                    icon={e.icon}
                    transX={e.x}
                    transY={e.y}
                />
            ))}
        </div>
    );
}

export default ProfilePicture;
