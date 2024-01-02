"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MdKeyboardArrowDown } from "react-icons/md";
import { OfferItemProps } from "./types";

const OfferItem = ({ items, subtitle, title, isOpen, onClick }: OfferItemProps) => {
    return (
        <motion.div className="flex flex-col overflow-hidden shadow-md rounded-md p-4">
            <div className="flex justify-between cursor-pointer" onClick={onClick}>
                <p className="text-xl lg:text-2xl font-semibold mb-2">{title}</p>
                <motion.button
                    animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                    className="flex justify-center items-center text-3xl rounded-full aspect-square h-full">
                    <MdKeyboardArrowDown />
                </motion.button>
            </div>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="offerItem"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: "auto" },
                            collapsed: { opacity: 0, height: 0 }
                        }}>
                        <p className="text-lg">{subtitle}</p>
                        <ul className="list-disc ml-6">
                            {items.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default OfferItem;
