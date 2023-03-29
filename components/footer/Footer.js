import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import Logo from "../common/Logo";

const lists = [
    {
        title: "shop ",
        links: [
            { name: "all collections", href: "/shop/collections" },
            { name: "winter edition", href: "/shop/winter" },
            { name: "discount", href: "/shop/discount" },
        ],
    },
    {
        title: "company",
        links: [
            { name: "about us", href: "/about" },
            { name: "contact", href: "/contact" },
            { name: "affiliates", href: "/affiliates" },
        ],
    },
    {
        title: "support",
        links: [
            { name: "FAQs", href: "support/faq" },
            { name: "cookie policy", href: "/support/cookie_policy" },
            { name: "terms of use", href: "/support/terms_of_use" },
        ],
    },
];

const Footer = () => {
    return (
        <footer className="relative inset-0 top-auto mt-24 bg-slate-100 p-4 pb-0 lg:p-8 lg:pb-0">
            <div className=" flex gap-14 flex-wrap lg:flex-nowrap lg:gap-24">
                <div className="">
                    <Logo />
                    <p className="text-sm text-gray-500  font-medium mt-3">
                        Specializes in providing high-quality, stylish products
                        for your wardrobe
                    </p>
                </div>

                <div className="flex justify-between w-full flex-wrap gap-5">
                    {lists.map(({ title, links }) => {
                        return (
                            <div>
                                <span className="font-semibold uppercase mb-4 inline-block">
                                    {title}
                                </span>
                                <ul
                                    key={title}
                                    className="text-gray-500 text-sm flex-col flex gap-2 font-medium">
                                    {links.map(({ name, href }) => {
                                        return (
                                            <Link
                                                href={href}
                                                className="capitalize">
                                                {name}
                                            </Link>
                                        );
                                    })}
                                </ul>
                            </div>
                        );
                    })}

                    <div className="mt-5 lg:mt-0">
                        <span className="font-semibold uppercase mb-4 inline-block">
                            payment methods
                            <ul className="flex gap-4 mt-2">
                                <li>
                                    <Image
                                        src="/visa_icon.png"
                                        width={35}
                                        height={35}
                                    />
                                </li>
                                <li>
                                    <Image
                                        src="/mastercard_icon.png"
                                        width={35}
                                        height={35}
                                    />
                                </li>
                                <li>
                                    <Image
                                        src="/paytm_icon.png"
                                        width={35}
                                        height={35}
                                    />
                                </li>
                            </ul>
                        </span>
                    </div>
                </div>
            </div>

            <span className="font-medium text-sm text-gray-500 block border-t border-t-gray-300 mt-8 py-4 text-center lg:mt-14 lg:py-4">
                Copyright &#169;2023 Atlas. All rights reserved
            </span>
        </footer>
    );
};

export default Footer;
