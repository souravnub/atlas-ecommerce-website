import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

const EmptyCart = () => {
    return (
        <div className="mt-16 w-full flex flex-col items-center">
            <div className="mx-auto bg-gray-100  p-10 rounded-full">
                <Image
                    src="/shopping-bag.png"
                    className=""
                    width={150}
                    height={150}
                />
            </div>
            <h1 className="font-semibold text-4xl mt-5">Oops!</h1>
            <p className="font-medium text-gray-500 mt-1">
                It seems like your cart is empty
            </p>
            <Link
                href="/shop"
                className="px-6 py-3 bg-gray-900 flex gap-1 items-center mt-8 group  font-medium text-white rounded-lg">
                Shop now
                <BsArrowRightShort className="text-2xl group-hover:translate-x-0.5 transition-transform" />
            </Link>
        </div>
    );
};

export default EmptyCart;
