"use client";

import React, { useState, useEffect } from "react";
import NavBrand from "./nav-brand";
import BurgerMenu from "./burger-menu";
import NavItemList from "./nav-item-list";

function Navbar({ scroll }) {
    const [isVisible, setIsVisible] = useState(false);
    const [colorChange, setColorchange] = useState(false);

    const changeNavbarColor = () => {
        if (window.scrollY >= 60) {
            setColorchange(true);
        } else {
            setColorchange(false);
        }
    };
    window.addEventListener("scroll", changeNavbarColor);

    return (
        <nav
            className={
                "fixed w-full z-20 top-0 left-0 pb-1 transition-colors " +
                `${colorChange ? "bg-slate-100 shadow-lg" : "bg-pink-400"}`
            }
        >
            <div
                className={
                    "max-w-screen-xl flex flex-wrap items-center " +
                    "justify-between mx-auto p-4 transition-colors " +
                    `${colorChange ? "bg-slate-100" : "bg-pink-400"}`
                }
            >
                <NavBrand colorChange={colorChange} />
                <BurgerMenu
                    onClick={() => setIsVisible((b) => !b)}
                    colorChange={colorChange}
                />
                <NavItemList
                    visibleState={isVisible}
                    colorChange={colorChange}
                />
            </div>
        </nav>
    );
}

export default Navbar;
