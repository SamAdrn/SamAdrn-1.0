import React from "react";

function NavBrand({ colorChange }) {
    return (
        <a href="#" className={"flex items-center transition-colors "}>
            <span
                className={
                    "self-center text-4xl font-semibold font-mono " +
                    `${colorChange ? "text-black" : "text-white drop-shadow-md"}`
                }
            >
                Samuel K<span className="hidden md:inline">osasih</span>
                <span className="md:hidden">.</span>
            </span>
        </a>
    );
}

export default NavBrand;
