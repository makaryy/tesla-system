"use client";
import Image from "next/image";
import Hamburger from "./Hamburger";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const links = [
    {
        href: "#offer",
        label: "Oferta"
    },
    {
        href: "#contact",
        label: "Kontakt"
    },
    {
        href: "#contact",
        label: "Kontakt"
    }
];

const Nav = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <header className="fixed w-full z-10 top-0 hidden lg:flex justify-start items-center gap-6 h-16 px-8 border-b-2 border-accent-200/50 bg-bg-100/30 backdrop-blur-md">
                <Image src="/tesla-system-logo.png" alt="" width={90} height={48} />
                <nav>
                    <ul className="flex items-stretch justify-start gap-6">
                        {links.map(({ href, label }) => (
                            <li key={href}>
                                <a className="text-xl tracking-wide text-text-100" href={href}>
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
            <header
                className={twMerge(
                    "fixed w-full z-10 top-0 flex lg:hidden flex-col justify-between items-stretch gap-6 h-16 bg-bg-100/30 backdrop-blur-md transition-all duration-300",
                    open && "h-screen"
                )}>
                <div className="flex justify-between items-center gap-6 h-16 px-4 border-b-2 border-accent-200/50">
                    <Image src="/tesla-system-logo.png" alt="" width={90} height={48} />
                    <Hamburger onChange={() => setOpen((prev) => !prev)} />
                </div>
                <nav className={twMerge("absolute h-0 top-16 overflow-hidden transition-all duration-300", open && "h-screen")}>
                    <ul className={"flex flex-col items-stretch w-full px-4"}>
                        {links.map(({ href, label }) => (
                            <li key={href} className="h-fit first-of-type:mt-4 last-of-type:mb-4">
                                <a className="block py-2 text-xl tracking-wide text-text-100" href={href}>
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
