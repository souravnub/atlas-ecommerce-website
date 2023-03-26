import React from "react";

const brands = [
    "https://cdn.iconscout.com/icon/free/png-256/brioni-202544.png?f=avif&w=256",
    "https://cdn.iconscout.com/icon/free/png-256/boss-19-202545.png?f=avif&w=256",
    "https://cdn.iconscout.com/icon/free/png-256/adidas-6-202717.png?f=avif&w=256",
    "https://cdn.iconscout.com/icon/free/png-256/converse-202549.png?f=avif&w=256",
    "https://cdn.iconscout.com/icon/free/png-256/dolce-1-202575.png?f=avif&w=256",
    "https://cdn.iconscout.com/icon/free/png-256/ecco-1-202585.png?f=avif&w=256",
    "https://cdn.iconscout.com/icon/free/png-256/levi-1-202634.png?f=avif&w=256",
    "https://cdn.iconscout.com/icon/free/png-256/corneliani-202560.png?f=avif&w=256",
];

const PartnerBrands = () => {
    return (
        <div className="mt-20">
            <h1 className="text-2xl font-semibold">Brands</h1>
            <div className="flex gap-8  justify-between items-center mt-5 max-w-full overflow-auto px-5 snap-x">
                {brands.map((brand) => {
                    return (
                        <img
                            key={brand}
                            src={brand}
                            alt=""
                            className="w-14 md:w-16 snap-start"
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default PartnerBrands;
