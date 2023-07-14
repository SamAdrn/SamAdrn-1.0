"use client";

import React, { useState } from "react";
import NavBrand from "./nav-brand";
import BurgerMenu from "./burger-menu";
import NavItemList from "./nav-item-list";

function Navbar() {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <nav className="bg-slate-100 fixed w-full z-20 top-0 left-0">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <NavBrand />
                <BurgerMenu onClick={() => setIsVisible((b) => !b)} />
                <NavItemList visibleState={isVisible} />
            </div>
        </nav>
    );
}

export default Navbar;
