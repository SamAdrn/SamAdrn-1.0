import React from "react";

function NavBrand() {
    return (
        <a
            href="#"
            className={
                "flex items-center md:hover:text-orange-600 " +
                "transition-all duration-300"
            }
        >
            <span className="self-center text-4xl font-semibold font-mono">
                Samuel K<span className="hidden md:inline">osasih</span>
                <span className="md:hidden">.</span>
            </span>
        </a>
    );
}

export default NavBrand;
