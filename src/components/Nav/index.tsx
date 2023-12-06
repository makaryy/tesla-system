"use client";
import Image from "next/image";
import Hamburger from "../Hamburger";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { useNav } from "./hooks";

const links = [
    {
        href: "/",
        label: "Strona Główna"
    },
    {
        href: "/oferta",
        label: "Oferta"
    },
    {
        href: "/kontakt",
        label: "Kontakt"
    }
];

const Nav = () => {
    const { handleClose, isHero, isOpen, toggleOpen } = useNav();

    return (
        <>
            <Link href="/" className="fixed left-8 top-0 z-20 flex items-center h-16" onClick={handleClose}>
                <Image src="/tesla-system-logo.png" alt="" width={90} height={48} />
            </Link>
            <header className="fixed w-full z-10 top-0 hidden lg:flex justify-end items-center backdrop-blur-sm gap-6 h-16 pr-8 pl-40">
                <nav>
                    <ul className="flex items-stretch justify-start gap-6">
                        {links.map(({ href, label }) => (
                            <li key={href}>
                                <Link
                                    className={twMerge("text-xl tracking-wide text-text-100", isHero && "text-bg-100")}
                                    href={href}
                                    onClick={handleClose}>
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
            <header
                className={twMerge(
                    "fixed w-full z-10 top-0 flex lg:hidden flex-col justify-between items-stretch gap-6 h-16 backdrop-blur-md transition-all duration-300",
                    isOpen && "h-screen bg-text-100/70"
                )}>
                <div className="flex flex-row-reverse items-center gap-6 h-16 px-4">
                    <Hamburger onChange={toggleOpen} isLight={isHero || isOpen} isOpen={isOpen} />
                </div>
                <nav className={twMerge("absolute h-0 top-16 w-full overflow-hidden transition-all duration-300", isOpen && "h-screen")}>
                    <ul className={"flex flex-col items-stretch w-full px-4"}>
                        {links.map(({ href, label }) => (
                            <li key={href} className="h-fit first-of-type:mt-4 last-of-type:mb-4 border-b">
                                <Link className="block py-2 text-xl tracking-wide text-bg-100" href={href} onClick={handleClose}>
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Nav;
