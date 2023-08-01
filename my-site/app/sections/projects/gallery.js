"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Thumbnail from "./thumbnail";
import Modal from "./modal";
import Backdrop from "./backdrop";

const data = ["1", "2"];

function Gallery({ isMobile }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [dataIndex, setDataIndex] = useState(0);

    return (
        <motion.div
            className={
                "w-screen grid grid-cols-1 px-10 py-20 " +
                "md:grid-cols-2 lg:grid-cols-3 lg:px-40 lg:py-20"
            }
        >
            <Thumbnail
                isMobile={isMobile}
                onClick={() => {
                    setModalOpen(true);
                    setDataIndex(0);
                }}
            />
            <Thumbnail
                isMobile={isMobile}
                onClick={() => {
                    setModalOpen(true);
                    setDataIndex(1);
                }}
            />
            <Thumbnail isMobile={isMobile} />
            <Thumbnail isMobile={isMobile} />

            <AnimatePresence
                initial={false}
                mode="wait"
                onExitComplete={() => null}
            >
                {modalOpen && (
                    <Backdrop handleClose={() => setModalOpen(false)}>
                        <Modal
                            handleClose={() => setModalOpen(false)}
                            data={data[dataIndex]}
                        />
                    </Backdrop>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default Gallery;
