import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi";

const CategoryCard = ({ img, title, href }) => {
    return (
        <div className="relative overflow-hidden min-w-[15rem]  aspect-square isolate   rounded-xl">
            <Image
                alt=""
                src={img}
                fill={true}
                className="object-cover "
                sizes="(max-width: 768px) 100vw,
              (max-width: 1000px) 50vw,
              (max-width: 1250px) 33vw,
              25vw"
            />
            <Link
                href={href}
                className=" capitalize z-10 flex group items-center justify-between gap-3 p-3 bg-white font-medium text-slate-700 rounded-lg absolute  inset-6 top-auto">
                {title}
                <HiOutlineArrowRight className="text-xl  opacity-90 group-hover:translate-x-0 transition-transform -translate-x-1" />
            </Link>
            <div
                style={{
                    background:
                        "radial-gradient(transparent 50%, rgba(0 0 0 / .5))",
                }}
                className="inset-0 w-full h-full absolute opacity-50 "></div>
        </div>
    );
};

export default CategoryCard;
