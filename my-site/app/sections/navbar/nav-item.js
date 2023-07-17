import React from "react";

function NavItem({ title = "nav item", href = "#" }) {
    return (
        <li>
            <a
                href={href}
                className={
                    "block py-2 pl-3 pr-4 text-black active:bg-orange-600 " +
                    "active:text-white text-xl rounded md:bg-transparent " +
                    "md:p-0 md:hover:text-orange-600 md:hover:-translate-y-1 " +
                    "md:active:text-orange-600 md:active:bg-slate-100 " +
                    "transition-all duration-500"
                }
                // aria-current="page"
            >
                {title}
            </a>
        </li>
    );
}

export default NavItem;
