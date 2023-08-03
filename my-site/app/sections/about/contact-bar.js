"use client";

import React, { useState } from "react";
import SVG from "@/app/components/svg";

function ContactBar() {
    const [iconOnHover, setIconOnHover] = useState("none");

    const gradients = {
        none: "from-orange-300 to-red-300",
        github: "from-slate-900 to-slate-600",
        mail: "from-amber-300 to-orange-300",
        linkedin: "from-blue-300 to-sky-300",
        spotify: "from-teal-400 to-emerald-400",
    };

    const contactIcons = ["github", "linkedin", "mail", "spotify"];

    return (
        <div
            className={
                "flex flex-col justify-center w-full px-3 py-4 justify-between " +
                "rounded-r-xl shadow-lg fill-neutral-100 md:px-5 md:py-10 " +
                "lg:flex-row lg:px-2 lg:py-3 lg:rounded-lg " +
                "lg:mt-5 bg-gradient-to-r transition-colors " +
                `${gradients[iconOnHover]}`
            }
        >
            {contactIcons.map((icon) => (
                <SVG
                    key={icon}
                    icon={icon}
                    className={
                        "drop-shadow-xl h-5 md:h-10 lg:h-9 lg:px-2 cursor-pointer"
                    }
                    initial={{ opacity: 1 }}
                    animate={{
                        opacity:
                            iconOnHover === "none" || iconOnHover === icon
                                ? 1
                                : 0.5,
                    }}
                    transition={{ duration: 0.2 }}
                    whileHover={{
                        scale: 1.2,
                    }}
                    onHoverStart={() => setIconOnHover(icon)}
                    onHoverEnd={() => setIconOnHover("none")}
                />
            ))}
        </div>
    );
}

export default ContactBar;
