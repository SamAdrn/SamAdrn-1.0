import React from "react";
import { aboutDescription } from "@/app/components/constants";

function Description() {
    return (
        <div className={"bg-white shadow-md p-10 md:h-full rounded-lg"}>
            <h3 className={"font-display font-semibold text-3xl"}>Who am I?</h3>
            <p className={"mt-5 leading-normal font-sans md:text-xl lg:text-base"}>
                {aboutDescription}
            </p>
        </div>
    );
}

export default Description;
