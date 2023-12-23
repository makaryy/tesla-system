import { Image, Link } from "@/types";

export type HomeSectionProps = {
    imagePosition: "left" | "right";
    image: Image;
    title: string;
    subtitle: string;
    mainIcon?: JSX.Element;
    columns?: {
        icon?: JSX.Element;
        title: string;
        description: string;
    }[];
    list?: string[];
    primaryCta?: Link;
    secondaryCta?: Link & { icon: JSX.Element };
};
