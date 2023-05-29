import Link from "next/link";
import React from "react";
import { useCart } from "../hooks/useCart";

const CostDisplay = () => {
    const { discount, subTotal, totalCost } = useCart();

    return (
        <div className="mt-16 h-min  lg:mt-0 lg:col-span-2 border-[1.8px] border-gray-100 p-6 flex flex-col gap-5 rounded-lg">
            <div className=" flex justify-between items-center">
                <span className="font-medium text-gray-500">Subtotal</span>
                <span className="font-semibold">$ {subTotal}</span>
            </div>

            <div className=" flex justify-between items-center">
                <span className="font-medium text-gray-500">Discount</span>
                <span
                    className={`font-semibold ${
                        discount === 0 ? "text-gray-500" : "text-black"
                    }`}>
                    $ {discount}
                </span>
            </div>

            <div className="w-full h-px bg-gray-100 rounded-full my-1"></div>

            <div className="flex justify-between  text-lg items-center">
                <span className="font-semibold">Grand total</span>
                <span className="font-bold">$ {totalCost}</span>
            </div>

            <Link
                href="/checkout"
                className="font-medium w-full text-center mt-5 rounded-md bg-gray-900 text-white py-4 px-2">
                Checkout now
            </Link>
        </div>
    );
};

export default CostDisplay;
