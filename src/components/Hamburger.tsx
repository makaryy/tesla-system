import React from "react";
import { twMerge } from "tailwind-merge";

const Hamburger = ({ onChange, isHero }: { onChange: () => void; isHero: boolean }) => {
    return (
        <label className="hamburger">
            <input type="checkbox" onChange={onChange} />
            <svg viewBox="0 0 32 32">
                <path
                    className={twMerge("line line-top-bottom stroke-text-100 transition-all duration-300", isHero && "stroke-bg-100")}
                    d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                ></path>
                <path
                    className={twMerge("line stroke-text-100 transition-all duration-300", isHero && "stroke-bg-100")}
                    d="M7 16 27 16"
                ></path>
            </svg>
        </label>
    );
};

export default Hamburger;
