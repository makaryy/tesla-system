"use client";
import Section from "@/components/shared/Section";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { HomeSectionProps } from "./types";

const HomeSection = ({ imagePosition = "left", image, title, subtitle, columns, list, mainIcon, primaryCta, secondaryCta }: HomeSectionProps) => {
    return (
        <Section className="flex flex-col lg:flex-row px-4 py-6 lg:py-12 justify-between items-center gap-4 lg:gap-8">
            <div className={twMerge("flex-[1_1_50%] w-full", imagePosition === "right" && "lg:order-1")}>
                <Image className="aspect-square w-full object-cover rounded-md" src={image.src} alt={image.alt} width={640} height={640} />
            </div>
            <div className="flex-[1_1_50%]">
                <h2 className="text-3xl xl:text-4xl font-bold min-w-xs pb-6">{title}</h2>
                <article className="space-y-3 flex-1 min-w-xs ">
                    {!!mainIcon && mainIcon}
                    <p className="xl:text-lg pb-3">{subtitle}</p>
                    {!!columns && (
                        <div className="flex flex-col lg:flex-row gap-3">
                            {columns.map(({ description, title, icon }) => (
                                <div key={title}>
                                    {!!icon && icon}
                                    <h3 className="pb-2 text-lg font-semibold">{title}</h3>
                                    <p className="pb-3">{description}</p>
                                </div>
                            ))}
                        </div>
                    )}
                    {!!list && (
                        <ul className="flex flex-col gap-2 list-disc list-inside text-lg">
                            {list.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    )}
                    {(!!primaryCta || !!secondaryCta) && (
                        <div className="flex gap-4 my-6">
                            {!!primaryCta && (
                                <Link
                                    href={primaryCta.href}
                                    className="border-2 border-accent-100 px-4 py-2 rounded-md text-text-100 capitalize text-sm hover:shadow-md transition-shadow">
                                    {primaryCta.label}
                                </Link>
                            )}
                            {!!secondaryCta && (
                                <Link
                                    href={secondaryCta.href}
                                    className="flex items-center gap-2 px-4 py-2 rounded-md capitalize text-sm text-text-100 hover:shadow-md transition-shadow">
                                    <span>{secondaryCta.label}</span> {secondaryCta.icon}
                                </Link>
                            )}
                        </div>
                    )}
                </article>
            </div>
        </Section>
    );
};

export default HomeSection;
