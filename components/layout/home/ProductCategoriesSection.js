import CategoryCard from "@/components/common/cards/CategoryCard";
import React from "react";

const categrories = [
    {
        title: "travel",
        href: "/shop/travel",
        img: "https://images.unsplash.com/photo-1521402966881-852a3b2551fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjQ2fHxmYXNoaW9uJTIwd2hpdGUlMjBiZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    },
    {
        title: "casual",
        href: "/shop/casual",
        img: "https://images.unsplash.com/photo-1559127452-56b800eb2f23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjYxfHxmYXNoaW9uJTIwd2hpdGUlMjBiZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    },
    {
        title: "minimal",
        href: "/shop/minimal",
        img: "https://images.unsplash.com/photo-1542381335-c78825c1598b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjY1fHxmYXNoaW9uJTIwd2hpdGUlMjBiZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    },
    {
        title: "formal",
        href: "/shop/formal",
        img: "https://images.unsplash.com/photo-1524498250077-390f9e378fc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjU1fHxmYXNoaW9uJTIwd2hpdGUlMjBiZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    },
];

const ProductCategoriesSection = () => {
    return (
        <div className="my-24">
            <h1 className="font-semibold text-2xl ">Currated picks</h1>

            <div className="mt-8 flex gap-y-8 gap-x-6 flex-wrap justify-center lg:justify-start">
                {categrories.map((category) => {
                    return (
                        <div
                            className="flex-1 max-w-[20rem]"
                            key={category.title}>
                            <CategoryCard {...category} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProductCategoriesSection;
