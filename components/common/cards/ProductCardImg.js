import Image from "next/image";
import React from "react";

const ProductCardImg = ({ isOnSale, img }) => {
    return (
        <div className="relative rounded-xl h-full overflow-hidden">
            <Image src={img} fill={true} alt="" className="object-cover" />
            {isOnSale && (
                <span className="uppercase absolute top-3.5 left-3.5 text-white bg-red-600 text-xs font-medium px-2 py-1 rounded-[3px]">
                    sale
                </span>
            )}
        </div>
    );
};

export default ProductCardImg;
