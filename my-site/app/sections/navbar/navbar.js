"use client";

import React, { useState } from "react";
import NavBrand from "./nav-brand";
import BurgerMenu from "./burger-menu";
import NavItemList from "./nav-item-list";

function Navbar({ isMobile }) {
    const [mobileNavVisible, setMobileNavVisible] = useState(false);
    const [isScrollAtTop, setIsScrollAtTop] = useState(false);

    const updateScroll = () => {
        if (window.scrollY >= 60) {
            setIsScrollAtTop(true);
        } else {
            setIsScrollAtTop(false);
        }
    };
    window.addEventListener("scroll", updateScroll);

    return (
        <nav
            className={
                "fixed w-full z-20 top-0 left-0 pb-1 transition-colors " +
                `${isScrollAtTop ? "bg-slate-100 shadow-lg" : "bg-amber-500"}`
                // `${scrollAtTop ? "bg-slate-100 shadow-lg" : "bg-orange-500"}`
            }
        >
            <div
                className={
                    "max-w-screen-xl flex flex-wrap items-center " +
                    "justify-between mx-auto p-4 transition-colors " +
                    `${isScrollAtTop ? "bg-slate-100" : "bg-amber-500"}`
                    // `${scrollAtTop ? "bg-slate-100" : "bg-orange-500"}`
                }
            >
                <NavBrand scrollAtTop={isScrollAtTop} />
                <BurgerMenu
                    onClick={() => setMobileNavVisible((b) => !b)}
                    scrollAtTop={isScrollAtTop}
                />
                <NavItemList
                    isMobile={isMobile}
                    mobileNavVisible={mobileNavVisible}
                    scrollAtTop={isScrollAtTop}
                />
            </div>
        </nav>
    );
}

export default Navbar;
