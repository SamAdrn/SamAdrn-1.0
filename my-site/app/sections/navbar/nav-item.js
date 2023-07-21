import React from "react";

function NavItem({ title = "nav item", href = "#", colorChange }) {
    return (
        <li>
            <a
                href={href}
                className={
                    "block py-2 pl-3 pr-4 text-black " +
                    "text-xl rounded md:bg-transparent " +
                    "md:p-0 transition-colors " +
                    `${
                        colorChange ? "text-black" : "text-white drop-shadow-md"
                    }`
                }
                // aria-current="page"
            >
                {title}
            </a>
        </li>
    );
}

export default NavItem;
