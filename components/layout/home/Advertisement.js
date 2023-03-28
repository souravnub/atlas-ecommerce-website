import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi";

const Advertisement = () => {
    return (
        <div className="mt-24 mb-24 w-full grid grid-rows-5 md:grid-rows-none md:grid-cols-5 rounded-xl overflow-hidden">
            <div className="relative row-start-1 row-span-2  md:col-start-1 md:col-end-3">
                <Image
                    src="https://images.unsplash.com/flagged/photo-1570733117311-d990c3816c47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZhc2hpb258ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                    fill={true}
                    className="object-cover grayscale-[50%]"
                    alt=""
                />
            </div>

            <div className=" bg-gray-900 flex flex-col row-span-full row-start-3 justify-center md:col-start-3 md:col-span-full p-10 md:p-12 lg:py-16">
                <span className="uppercase font-semibold text-xs text-gray-300">
                    limited offer
                </span>
                <h1 className="mt-2 font-semibold text-4xl text-white">
                    35% off only this firday and get a free gift
                </h1>
                <Link
                    href="/"
                    className="mt-10 w-max rounded-lg flex items-center gap-2 px-4 py-2 font-medium bg-white text-gray-700 group">
                    Grab it now{" "}
                    <HiOutlineArrowRight className="text-lg group-hover:translate-x-0.5 transition-transform" />
                </Link>
            </div>
        </div>
    );
};

export default Advertisement;
