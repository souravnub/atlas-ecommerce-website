import React from "react";

const CarouselIndicators = ({
    count,
    activeIndex,
    activeClassNames,
    btnClassNames,
    setIndex,
    ...props
}) => {
    return (
        <div {...props}>
            {Array(count)
                .fill("X")
                .map((_, idx) => {
                    return (
                        <button
                            onClick={() => setIndex(idx)}
                            aria-label={`move to carousel-item ${idx + 1}`}
                            className={` ${
                                btnClassNames
                                    ? btnClassNames
                                    : "p-1 bg-white rounded-full  aspect-square transition duration-300"
                            } ${
                                idx === activeIndex
                                    ? activeClassNames
                                    : "opacity-70"
                            }`}
                            key={idx}></button>
                    );
                })}
        </div>
    );
};

export default CarouselIndicators;
