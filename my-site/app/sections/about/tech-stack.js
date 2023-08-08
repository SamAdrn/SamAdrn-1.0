import React from "react";
import { motion } from "framer-motion";

function TechStack() {
    const languages = [
        "javascript",
        "ruby",
        "java",
        "python",
        "swift",
        "html",
        "ocaml",
        "ansic",
    ];

    const libraries = [
        "react",
        "nodejs",
        "tailwind",
        "bootstrap",
        "swiftui",
        "jquery",
    ];

    const tools = ["git", "firebase", "mongodb", "gcloud", "vsc", "xcode"];

    const TechIcon = ({ icon }) => {
        return (
            <motion.img
                className="h-10 md:h-14 lg:h-12 drop-shadow-lg"
                whileHover={{
                    scale: 1.1,
                    transition: { type: "spring", duration: 0.3 },
                }}
                src={`/icons/${icon}.svg`}
                alt={`${icon} Icon`}
            />
        );
    };

    return (
        <div className={"bg-white shadow-md p-10 md:h-full rounded-lg w-full"}>
            <h3 className={"font-display font-semibold text-3xl"}>
                Tech Stack
            </h3>
            <div
                className={
                    "mt-8 leading-normal font-sans md:text-xl lg:text-base flex flex-col lg:grid lg:grid-cols-12 lg:gap-y-9"
                }
            >
                <h4
                    className={
                        "mb-4 font-medium col-span-4 flex items-center lg:mb-0 md:text-lg"
                    }
                >
                    Languages
                </h4>
                <div
                    className={
                        "flex flex-row flex-wrap items-center gap-5 md:gap-7 col-span-8 mb-9 lg:mb-0"
                    }
                >
                    {languages.map((lang) => (
                        <TechIcon icon={lang} key={lang} />
                    ))}
                </div>
                <h4
                    className={
                        "mb-4 font-medium col-span-4 flex items-center lg:mb-0 md:text-lg"
                    }
                >
                    Libraries and Frameworks
                </h4>
                <div
                    className={
                        "flex flex-row flex-wrap items-center gap-5 md:gap-7 col-span-8 mb-9 lg:mb-0"
                    }
                >
                    {libraries.map((lib) => (
                        <TechIcon icon={lib} key={lib} />
                    ))}
                </div>
                <h4
                    className={
                        "mb-4 font-medium col-span-4 flex items-center lg:mb-0 md:text-lg"
                    }
                >
                    Tools
                </h4>
                <div
                    className={
                        "flex flex-row flex-wrap items-center gap-5 md:gap-7 col-span-8"
                    }
                >
                    {tools.map((tool) => (
                        <TechIcon icon={tool} key={tool} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TechStack;
