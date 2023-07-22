import React from "react";

function PageButton({ label, setActivePage, activePage, pageNum }) {
    return (
        <div
            key={pageNum}
            role="button"
            className={
                "px-3 py-3 font-mono my-2 mx-1 rounded-md " +
                "transition-colors md:px-16 lg:px-28 md:text-xl lg:py-2 " +
                `${
                    activePage == pageNum
                        ? "shadow-md bg-white"
                        : "md:hover:bg-slate-300"
                }`
            }
            onClick={() => setActivePage(pageNum)}
        >
            {label}
        </div>
    );
}

export default PageButton;
