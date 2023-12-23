import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

// const Loader = () => <div className="loader"></div>;
const Loader = ({ className }: { className?: string }) => (
    <div className="w-full flex gap-1 justify-center items-center">
        <motion.span
            animate={{ scale: [0.8, 1.25, 0.8] }}
            transition={{ duration: 1.5, times: [0, 0.5, 1], repeat: Infinity, repeatDelay: 0.5 }}
            className={twMerge("inline-block border-2 border-white rounded-full bg-transparent w-4 aspect-square", className)}
        />
        <motion.span
            animate={{ scale: [0.8, 1.25, 0.8] }}
            transition={{ duration: 1.5, times: [0, 0.5, 1], repeat: Infinity, repeatDelay: 0.5, delay: 0.5 }}
            className={twMerge("inline-block border-2 border-white rounded-full bg-transparent w-4 aspect-square", className)}
        />
        <motion.span
            animate={{ scale: [0.8, 1.25, 0.8] }}
            transition={{ duration: 1.5, times: [0, 0.5, 1], repeat: Infinity, repeatDelay: 0.5, delay: 1 }}
            className={twMerge("inline-block border-2 border-white rounded-full bg-transparent w-4 aspect-square", className)}
        />
    </div>
);

export default Loader;
