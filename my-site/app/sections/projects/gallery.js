"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Thumbnail from "./thumbnail";
import Modal from "./modal";
import Backdrop from "./backdrop";
import { projectsData } from "@/app/components/constants";

function Gallery({ isMobile }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [projectIndex, setProjectIndex] = useState(0);

    return (
        <motion.div
            className={
                "w-full grid grid-cols-1 px-5 py-10 " +
                "md:grid-cols-2 lg:grid-cols-3 lg:px-40"
            }
        >
            {projectsData.map((proj, i) => (
                <Thumbnail
                    key={proj.id}
                    isMobile={isMobile}
                    onClick={() => {
                        setModalOpen(true);
                        setProjectIndex(i);
                    }}
                    id={proj.id}
                    title={proj.title}
                    languages={proj.languages}
                />
            ))}

            <AnimatePresence
                initial={false}
                mode="wait"
                onExitComplete={() => null}
            >
                {modalOpen && (
                    <Backdrop handleClose={() => setModalOpen(false)}>
                        <Modal
                            handleClose={() => setModalOpen(false)}
                            data={projectsData[projectIndex]}
                        />
                    </Backdrop>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default Gallery;
