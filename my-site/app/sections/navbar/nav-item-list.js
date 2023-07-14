import React, { useState } from "react";
import NavItem from "./nav-item";

function NavItemList({ visibleState }) {
    return (
        <div
            className={`items-center justify-between w-full ${
                visibleState ? "" : "hidden"
            }  md:flex md:w-auto`}
        >
            <ul
                className={
                    "flex flex-col p-4 mt-4 font-medium bg-gray-50 " +
                    "md:flex-row md:p-0 md:space-x-8 md:mt-0 md:border-0 " +
                    "md:bg-slate-100"
                }
            >
                <NavItem title="Home" />
                <NavItem title="Projects" />
                <NavItem title="About Me" />
                <NavItem title="Contact" />
            </ul>
        </div>
    );
}

export default NavItemList;
