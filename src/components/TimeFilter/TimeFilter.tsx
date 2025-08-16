"use client";
import { useState } from "react";

export default function TimeFilter() {
    const [active, setActive] = useState("1 Year");

    const filters = ["1 Week", "1 Month", "1 Year"];

    return (
        <div className="">
            {filters.map((filter) => (
                <button
                    key={filter}
                    onClick={() => setActive(filter)}
                    className={`px-3 py-1 rounded-md text-sm font-medium transition ${active === filter
                        ? "bg-gray-100 text-black font-normal text-[14px] leading-[100%]"
                        : "text-gray-600 hover:text-black"
                        }`}
                >
                    {filter}
                </button>
            ))}
        </div>
    );
}
