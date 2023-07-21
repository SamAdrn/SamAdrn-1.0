import React from "react";

function Title() {
    return (
        <div>
            <h1
                className={
                    "text-5xl md:text-7xl font-bold font-sans " +
                    "cursor-default text-white drop-shadow-lg"
                }
            >
                Samuel <br className="md:hidden" />
                Kosasih
            </h1>
        </div>
    );
}

export default Title;
