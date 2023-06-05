import React from "react";
import { GrFormClose } from "react-icons/gr";

const Product = ({ img, name, count, unitPrice, props }) => {
    return (
        <div className="flex">
            <img
                src={img}
                alt={name}
                className="max-w-[4rem] aspect-square rounded-md object-cover"
            />

            <div className="ml-4 flex flex-col capitalize justify-between font-medium">
                <span>{name}</span>
                <span className="text-sm text-gray-500">{props.color}</span>
                <span className="text-xs">
                    <GrFormClose className="inline-block text-sm" />
                    {count}
                </span>
            </div>

            <span className="block ml-auto font-semibold text-gray-700">
                $ {unitPrice * count}
            </span>
        </div>
    );
};

export default Product;
