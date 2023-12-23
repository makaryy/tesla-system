import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLockedBody } from "usehooks-ts";

export const useNav = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [isHero, setIsHero] = useState(pathname === "/");

    useEffect(() => {
        const threshold = window.innerHeight - 48;
        setIsHero(window.scrollY < threshold && pathname === "/");
        const handleScroll = () => {
            setIsHero(window.scrollY < threshold && pathname === "/");
        };
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [pathname]);

    useLockedBody(isOpen);

    const handleClose = () => setIsOpen(false);

    const toggleOpen = () => setIsOpen((prev) => !prev);

    return { isHero, isOpen, handleClose, toggleOpen };
};
