import React from "react";

import { FaShippingFast } from "react-icons/fa";
import { MdAddAlarm } from "react-icons/md";
import { RiExchangeDollarLine } from "react-icons/ri";
import { TbFaceId } from "react-icons/tb";

const features = [
    {
        icon: <RiExchangeDollarLine />,
        title: "Original products",
        desc: "We provide the best quality and original products to the market",
    },
    {
        icon: <TbFaceId />,
        title: "satisfaction guranteed",
        desc: "Exchange the product if it doesn't match your fit",
    },
    {
        icon: <MdAddAlarm />,
        title: "new arrival everyday",
        desc: "we update your collections almost everyday",
    },

    {
        icon: <FaShippingFast />,
        title: "free & fast shipping",
        desc: "we offer fast and free delivery serivces for almost all the collections",
    },
];
const Services = () => {
    return (
        <div className="mt-20">
            <div className="mb-10 md:mb-8 flex gap-2 justify-between flex-wrap items-center">
                <h1 className="text-2xl font-semibold">
                    We provide best customer experiences
                </h1>
                <p className="relative text-sm font-medium text-gray-500 mt-2 py-4 pl-5 pr-3 md:mt-0">
                    <span
                        aria-hidden="true"
                        className="absolute inset-0 right-auto bg-gray-800 w-0.5 rounded-full"></span>
                    We ensure that your customers have best shopping experience
                </p>
            </div>

            <div className="flex gap-10 flex-wrap  justify-between">
                {features.map(({ title, icon, desc }) => {
                    return (
                        <div key={title} className="flex-1 basis-44">
                            <div className=" inline-block bg-gray-50 rounded-md p-2 text-2xl mb-3">
                                {icon}
                            </div>

                            <span className="font-semibold capitalize mb-1.5 block">
                                {title}
                            </span>
                            <p className="text-xs text-gray-500 font-medium">
                                {desc}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Services;
