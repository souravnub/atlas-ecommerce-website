import Link from "next/link";
import React from "react";

const MenuElement = ({ title, icon, options }) => {
    return (
        <div>
            <span className=" rounded-sm text-lg text-gray-800 flex gap-2 items-center">
                {icon}
                <span className="text-xs font-bold uppercase">{title}</span>
            </span>

            <ul className="relative ml-5 space-y-3 text-sm font-medium mt-2 pt-0.5">
                <div className="absolute -left-3.5 top-0 bottom-2.5 bg-gray-200 w-px"></div>

                {options.map(({ name, href, onClick }) => {
                    return (
                        <li key={name} className="relative">
                            <div className="w-3 top-1/2 -translate-y-1/2 h-px bg-gray-200 absolute -left-3.5"></div>
                            {href ? (
                                <Link
                                    className="px-3 py-1 hover:bg-gray-100 rounded-sm transition duration-300"
                                    href={href}>
                                    {name}
                                </Link>
                            ) : (
                                <button
                                    className="px-3 py-1 hover:bg-gray-100 rounded-sm transition duration-300"
                                    onClick={onClick}>
                                    {name}
                                </button>
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default MenuElement;
