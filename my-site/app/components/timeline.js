import React from "react";

function Timeline({ title, subtitle, icon, data }) {
    return (
        <div
            className={
                "flex flex-col items-center " +
                "lg:grid lg:grid-cols-12 lg:px-40"
            }
        >
            <div
                className={
                    "flex flex-col justify-start items-center " +
                    "h-full lg:col-span-3 lg:py-10"
                }
            >
                <div className="flex flex-row mb-2 lg:flex-col">
                    <img
                        className="h-8 inline me-3 md:h-10 lg:h-20 lg:mb-6"
                        src={`/icons/${icon}.svg`}
                        alt={`${icon} Icon`}
                    />
                    <h2
                        className={
                            "inline font-display font-semibold " +
                            "text-3xl mb-2 md:text-4xl"
                        }
                    >
                        {title}
                    </h2>
                </div>
                <p className={"font-medium font-display mt-2 md:text-md"}>
                    {subtitle}
                </p>
            </div>
            <div className="lg:col-span-9 mt-10 mx-7 md:mx-10">
                <ol className="relative border-l border-slate-200 ms-4 ps-4">
                    {data.map((event, i) => (
                        <li className="mb-10 ml-6">
                            <span
                                className={
                                    "absolute flex items-center " +
                                    "justify-center w-6 h-6 rounded-md " +
                                    "-left-3 bg-gradient-to-r " +
                                    `${
                                        i == 0
                                            ? "from-red-500 to-amber-500"
                                            : "from-gray-400 to-gray-600"
                                    }`
                                }
                            ></span>
                            <h3
                                className={
                                    "flex items-center mb-4 text-2xl " +
                                    "md:text-4xl font-sans font-semibold " +
                                    "text-slate-900"
                                }
                            >
                                {event.title}
                                {i == 0 ? (
                                    <span
                                        className={
                                            "bg-green-100 text-green-800 " +
                                            "text-sm md:text-lg font-mono " +
                                            "font-medium mr-2 px-2.5 py-0.5 " +
                                            "rounded ms-1 md:ms-5"
                                        }
                                    >
                                        Current
                                    </span>
                                ) : null}
                            </h3>
                            <p className="mb-2 text-sm font-normal text-slate-500">
                                <time className="my-1">
                                    {event.timeframe}{" "}
                                    <span className="hidden md:inline">
                                        | {event.location}
                                    </span>
                                </time>
                                <span className="block md:hidden">
                                    {event.location}
                                </span>
                            </p>
                            <ul
                                className={
                                    "list-disc list-inside " +
                                    "leading-relaxed text-slate-700"
                                }
                            >
                                {event.description.map((point) => (
                                    <li className="mt-2 text-lg">{point}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}

export default Timeline;
