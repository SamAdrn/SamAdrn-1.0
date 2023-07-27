import React from "react";
import { motion } from "framer-motion";

const Modal = ({ handleClose, data }) => {
    return (
        <div
            className={"w-2/3 h-2/3 bg-white rounded-lg"}
            onClick={(e) => e.stopPropagation()}
        >
            {data}
        </div>
    );
};

export default Modal;
