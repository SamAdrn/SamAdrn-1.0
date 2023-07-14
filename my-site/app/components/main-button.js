import React from "react";

function MainButton({
    title = "Click",
    onClick = () => console.log("clicked"),
    additionalStyles = ""
}) {
    return (
        <button
            type="button"
            className={
                "text-sm text-slate-50 font-medium text-center " +
                "bg-orange-500 hover:bg-orange-400 active:bg-yellow-400 " +
                "rounded-lg px-4 py-2 " +
                "md:text-lg md:px-5 md:py-3 " +
                `${additionalStyles}`
            }
            onClick={onClick}
        >
            {title}
        </button>
    );
}

export default MainButton;
