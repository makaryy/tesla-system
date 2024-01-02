"use client";

import { useState } from "react";
import { OfferItemsProps } from "./types";
import OfferItem from "../OfferItem";

const OfferItems = ({ offerItems }: OfferItemsProps) => {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <div className="flex flex-col gap-6 max-w-4xl justify-center mx-auto">
            {offerItems.map(({ items, subtitle, title }, index) => (
                <OfferItem
                    key={title}
                    items={items}
                    subtitle={subtitle}
                    title={title}
                    isOpen={activeIndex === index}
                    onClick={() => setActiveIndex(index)}
                />
            ))}
        </div>
    );
};

export default OfferItems;
