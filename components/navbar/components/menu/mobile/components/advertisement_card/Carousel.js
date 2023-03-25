import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";

import { Carousel } from "react-responsive-carousel";

const CustomCarousel = ({ setIdx, idx, data }) => {
    return (
        <Carousel
            onChange={setIdx}
            selectedItem={idx}
            showStatus={false}
            swipeScrollTolerance={80}
            showThumbs={false}
            showArrows={false}
            showIndicators={false}>
            {data.map(({ img, monthly_cost, name, benefits }) => {
                return (
                    <div
                        className="py-4 pb-6 px-3 h-full flex flex-col"
                        key={name}>
                        <div className="flex gap-4">
                            <img
                                src={img}
                                alt=""
                                style={{ width: 60 }}
                                className=" bg-gray-800 p-3 rounded-lg"
                            />
                            <div className=" flex flex-col font-semibold justify-center items-start gap-1">
                                <span className="text-base">{name}</span>
                                <div className="text-sm font-medium flex">
                                    <span className="opacity-70 text-xs self-start mr-1">
                                        $
                                    </span>
                                    <span className="self-center font-semibold">
                                        {monthly_cost}
                                    </span>
                                    <span className="opacity-70 text-xs self-end ml-0.5">
                                        /m
                                    </span>
                                </div>
                            </div>
                        </div>
                        <ul className="space-y-2 mt-8 mb-12 pl-2">
                            {benefits.map((benefit) => {
                                return (
                                    <li
                                        key={benefit}
                                        className="flex gap-4 items-center">
                                        <AiFillStar className="text-blue-400" />
                                        <span className="font-medium text-sm">
                                            {benefit}
                                        </span>
                                    </li>
                                );
                            })}
                        </ul>
                        <Link
                            href={`/premium?type=`}
                            className="mt-auto max-w-max mx-auto text-sm bg-gradient-to-br from-blue-700 via-blue-600 to-blue-400 drop-shadow-[0_3px_5px_rgba(29,78,216,0.25)]  px-10 py-3 rounded-full  font-semibold">
                            Choose Plan
                        </Link>
                    </div>
                );
            })}
        </Carousel>
    );
};

export default CustomCarousel;
