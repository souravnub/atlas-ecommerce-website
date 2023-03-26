import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const CarouselNavigationButtons = ({
    slideCount,
    activeIndex,
    setIndex,
    onClick,
    ...props
}) => {
    return (
        <div {...props}>
            <button
                className="bg-white rounded-l-lg text-black px-2 py-2 disabled:text-gray-300 transition duration-200"
                disabled={activeIndex === 0}
                onClick={() => setIndex((prev) => prev - 1)}>
                <IoIosArrowBack className="text-xl" />
            </button>
            <button
                className="bg-white text-black rounded-r-lg px-2 py-2 border-l-2 disabled:text-gray-300 transition duration-200"
                disabled={activeIndex === slideCount - 1}
                onClick={() => setIndex((prev) => prev + 1)}>
                <IoIosArrowForward className="text-xl" />
            </button>
        </div>
    );
};

export default CarouselNavigationButtons;
