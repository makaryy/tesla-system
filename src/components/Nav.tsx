"use client";
import Image from "next/image";
import Hamburger from "./Hamburger";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { useLockedBody } from "usehooks-ts";

const links = [
    {
        href: "#offer",
        label: "Oferta",
    },
    {
        href: "#contact",
        label: "Kontakt",
    },
    {
        href: "#contact",
        label: "Kontakt",
    },
];

const Nav = () => {
    const [open, setOpen] = useState(false);
    const [isHero, setIsHero] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const threshold = window.innerHeight - 48;
            console.log(window.scrollY, threshold);
            setIsHero(window.scrollY < threshold);
        };
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useLockedBody(open);

    return (
        <>
            <div className="fixed left-8 top-0 z-20 flex items-center h-16">
                <Image src="/tesla-system-logo.png" alt="" width={90} height={48} />
            </div>
            <header className="fixed w-full z-10 top-0 hidden lg:flex justify-start items-center backdrop-blur-sm gap-6 h-16 pr-8 pl-40">
                <nav>
                    <ul className="flex items-stretch justify-start gap-6">
                        {links.map(({ href, label }) => (
                            <li key={href}>
                                <a className={twMerge("text-xl tracking-wide text-text-100", isHero && "text-bg-100")} href={href}>
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
            <header
                className={twMerge(
                    "fixed w-full z-10 top-0 flex lg:hidden flex-col justify-between items-stretch gap-6 h-16 backdrop-blur-md transition-all duration-300",
                    open && "h-screen bg-text-100/70"
                )}
            >
                <div className="flex flex-row-reverse items-center gap-6 h-16 px-4">
                    <Hamburger onChange={() => setOpen((prev) => !prev)} isHero={isHero || open} />
                </div>
                <nav className={twMerge("absolute h-0 top-16 w-full overflow-hidden transition-all duration-300", open && "h-screen")}>
                    <ul className={"flex flex-col items-stretch w-full px-4"}>
                        {links.map(({ href, label }) => (
                            <li key={href} className="h-fit first-of-type:mt-4 last-of-type:mb-4 border-b">
                                <a className="block py-2 text-xl tracking-wide text-bg-100" href={href}>
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Nav;
