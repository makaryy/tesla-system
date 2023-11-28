import { twMerge } from "tailwind-merge";

const Section = ({ children, className }: { children: React.ReactNode; className: string }) => {
    return <section className={twMerge("min-h-screen p-8 pr-56 xl:pr-72", className)}>{children}</section>;
};

export default Section;
