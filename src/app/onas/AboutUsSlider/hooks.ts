import { useRef, useState } from "react";
import Slider, { Settings } from "react-slick";

export const useSlider = () => {
    const sliderRef = useRef<Slider>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setTransitioning] = useState(false);

    const handlePrev = () => {
        if (sliderRef.current && !isTransitioning) {
            sliderRef.current.slickPrev();
            setCurrentIndex((prevIndex) => (prevIndex === 0 ? 4 : prevIndex - 1));
        }
    };

    const handleNext = () => {
        if (sliderRef.current && !isTransitioning) {
            sliderRef.current.slickNext();
            setCurrentIndex((prevIndex) => (prevIndex === 4 ? 0 : prevIndex + 1));
        }
    };

    const handleGoTo = (index: number) => {
        setCurrentIndex(index);
        if (sliderRef.current && !isTransitioning) {
            sliderRef.current.slickGoTo(index);
        }
    };

    const handleSwipe = (index: number) => {
        setCurrentIndex(index);
    };

    const handleAfterChange = () => {
        setTransitioning(false);
    };

    const handleBeforeChange = () => {
        setTransitioning(true);
    };

    const sliderSettings: Settings = {
        centerMode: true,
        infinite: true,
        centerPadding: "10%",
        slidesToShow: 1,
        speed: 500,
        beforeChange: (oldIndex, newIndex) => {
            handleSwipe(newIndex);
            handleBeforeChange();
        },
        afterChange: handleAfterChange
    };

    return { handleNext, handlePrev, handleGoTo, sliderRef, sliderSettings, currentIndex };
};
