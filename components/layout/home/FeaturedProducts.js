import React, { useCallback, useEffect, useMemo } from "react";

import ProductCardImg from "@/components/common/cards/ProductCardImg";
import CarouselNavigationButtons from "@/components/common/carousel/CarouselNavigationButtons";
import { useCarousel } from "@/components/common/carousel/hooks/useCarousel";

import useBreakpoints from "@/hooks/useBreakpoints";

import { getChunkedArr } from "@/utils/getChunkedArr";

import { Carousel } from "react-responsive-carousel";
import { atom, useAtom } from "jotai";

import { CiShoppingCart } from "react-icons/ci";

const breakpoints = {
    550: 1,
    1000: 2,
    1200: 3,
    1600: 4,
};

const products = [
    {
        img: "https://images.unsplash.com/photo-1445052858312-134745f190f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2ltcGxlJTIwZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        name: "autumn dress",
        isOnSale: true,
        discounted_price: 58,
        price: 86,
    },
    {
        img: "https://images.unsplash.com/photo-1503341733017-1901578f9f1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
        name: "gray shirt",
        isOnSale: false,
        price: 87,
    },
    {
        img: "https://images.unsplash.com/photo-1489323588428-2cb185f5cd5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAxfHxsZWF0aGVyJTIwY29hdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        name: "leather coat",
        isOnSale: true,
        price: 40,
        discounted_price: 32,
    },
];

const ProductCard = ({ img, name, isOnSale, price, discounted_price }) => {
    return (
        <div className="flex-1 flex max-w-[20rem] flex-col">
            <div className="flex-1  aspect-square">
                <ProductCardImg isOnSale={isOnSale} img={img} />
            </div>

            <div className="mt-8 flex justify-between">
                <div className=" justify-start flex-col flex text-gray-800 font-medium">
                    <span className="capitalize">{name}</span>
                    <div className="flex gap-1.5 mt-1">
                        <span className="font-bold text-lg">${price}</span>
                        {isOnSale && (
                            <span className="text-sm opacity-60 line-through">
                                ${discounted_price}
                            </span>
                        )}
                    </div>
                </div>
                <button className="p-2 flex items-center  bg-gray-800 text-white rounded-lg text-2xl h-min">
                    <CiShoppingCart />
                </button>
            </div>
        </div>
    );
};

const childrenAtom = atom([]);
const FeaturedProducts = () => {
    const [children, setChildren] = useAtom(childrenAtom);
    const { key, value: childrenPerSlide } = useBreakpoints(breakpoints);

    const [idx, setIdx] = useCarousel();

    const slideCount = useMemo(() => {
        return getChunkedArr(products, childrenPerSlide).length;
    }, [childrenPerSlide, products]);

    //below func created because: carousel children were disappering due to fast refresh (in developemnt env) .. using below func will create children on every re-render ..therefore children will always be present
    const getChildren_ENV_DEVELOPMENT = useCallback(() => {
        const productCards = products.map((product) => (
            <ProductCard key={product.name} {...product} />
        ));
        return getChunkedArr(productCards, childrenPerSlide);
    }, [childrenPerSlide]);

    useEffect(() => {
        const productCards = products.map((product) => (
            <ProductCard key={product.name} {...product} />
        ));
        setChildren(getChunkedArr(productCards, childrenPerSlide));
    }, [childrenPerSlide]);

    return (
        <div className="mt-24">
            <div className="flex justify-between">
                <h1 className="font-semibold text-2xl mb-8">
                    Featured products
                </h1>
                <CarouselNavigationButtons
                    slideCount={slideCount}
                    activeIndex={idx}
                    setIndex={setIdx}
                />
            </div>

            <Carousel
                showIndicators={false}
                showThumbs={false}
                selectedItem={idx}
                onChange={setIdx}
                showStatus={false}
                showArrows={false}>
                {(process.env.NODE_ENV === "development"
                    ? getChildren_ENV_DEVELOPMENT()
                    : children
                ).map((outerArr, idx) => (
                    <div key={idx} className="flex justify-center gap-16">
                        {outerArr.map((item) => item)}
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default FeaturedProducts;
