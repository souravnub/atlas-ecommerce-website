import React from "react";
import { atom, useAtom } from "jotai";
import CustomCarousel from "./Carousel";

const plans = [
    {
        name: "Yearly",
        img: "https://cdn-icons-png.flaticon.com/512/6941/6941697.png",
        monthly_cost: 100,
        href: "/premium?type=yearly",
        benefits: [
            "Free delivery on all purchases",
            "Instant cashback",
            "No question returns",
            "24/7 customer services",
        ],
    },
    {
        name: "3 Months",
        img: "https://cdn-icons-png.flaticon.com/512/9476/9476579.png",
        monthly_cost: 120,
        benefits: [
            "Free delivery on all purchases",
            "Instant cashback",
            "No question returns",
        ],
    },
];

const idxAtom = atom(0);

const GoPremiumAdvertisement = () => {
    const [idx, setIdx] = useAtom(idxAtom);

    return (
        <>
            <div className="mt-14 shadow-sm shadow-gray-400 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900  text-white p-4 px-5 rounded-xl">
                <span className="font-semibold text-lg">Get atlas premium</span>
                <p className="text-xs mt-0.5 text-gray-200 font-medium">
                    Select the offer that suits the best your needs
                </p>

                <div className="mt-6 relative rounded-lg overflow-hidden">
                    <div className="absolute inset-0  bg-gray-700 opacity-10"></div>
                    <CustomCarousel data={plans} setIdx={setIdx} idx={idx} />
                </div>

                <div className="w-full justify-center mt-3 flex gap-2">
                    {plans.map((plan, planIdx) => {
                        return (
                            <button
                                key={planIdx}
                                onClick={() => setIdx(planIdx)}
                                className={`w-1.5 h-1.5 bg-blue-400 rounded-full transition-opacity duration-500 ${
                                    planIdx === idx
                                        ? "opacity-100"
                                        : "opacity-30"
                                }`}></button>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default GoPremiumAdvertisement;
