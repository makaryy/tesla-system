"use client";
import { useSlider } from "./hooks";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { Dot } from "../Dot";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
import { AboutUsSliderProps } from "./types";
import Image from "next/image";

const AboutUsSlider = ({ images }: AboutUsSliderProps) => {
    const { currentIndex, handleNext, handlePrev, handleGoTo, sliderRef, sliderSettings } = useSlider();

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -20% 0px" }}
            className="relative overflow-hidden max-h-[calc(100vh-4rem)]">
            <Slider ref={sliderRef} {...sliderSettings}>
                {images.map(({ alt, src, height, width }) => (
                    <Image
                        key={src}
                        src={src}
                        alt={alt}
                        className="w-full h-full aspect-[3/2] object-cover rounded-md"
                        height={height}
                        width={width}
                        priority
                    />
                ))}
            </Slider>

            {images.length > 1 && (
                <>
                    <motion.button
                        initial={{ y: "-50%" }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="absolute top-1/2 left-2 bg-accent-100/80 text-primary-200 text-2xl p-2 rounded-full"
                        onClick={handlePrev}>
                        <MdChevronLeft />
                    </motion.button>
                    <motion.button
                        initial={{ y: "-50%" }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="absolute top-1/2 right-2 bg-accent-100/80 text-primary-200 text-2xl p-2 rounded-full"
                        onClick={handleNext}>
                        <MdChevronRight />
                    </motion.button>

                    <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                        {images.map(({ src }, index) => (
                            <Dot key={src} isActive={index === currentIndex} onClick={() => handleGoTo(index)} />
                        ))}
                    </div>
                </>
            )}
        </motion.div>
    );
};

export default AboutUsSlider;
