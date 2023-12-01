"use client";
import { motion } from "framer-motion";

const Section = ({ children, className }: { children: React.ReactNode } & React.HTMLProps<HTMLElement>) => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -50% 0px" }}
            className={className}
        >
            {children}
        </motion.section>
    );
};

export default Section;
