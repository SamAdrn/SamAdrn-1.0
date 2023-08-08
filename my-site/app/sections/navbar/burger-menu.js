import SVG from "@/app/components/svg";
import React from "react";

function BurgerMenu({ onClick, scrollAtTop }) {
    return (
        <button
            type="button"
            className={
                "inline-flex items-center p-2 w-10 h-10 justify-center " +
                "rounded-lg md:hidden " +
                `${scrollAtTop ? "fill-black" : "fill-white drop-shadow-md"}`
            }
            onClick={onClick}
        >
            <span className="sr-only">Open main menu</span>
            <SVG icon="burgermenu" className={"h-full"} />
        </button>
    );
}

export default BurgerMenu;
