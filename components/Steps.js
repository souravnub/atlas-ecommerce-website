import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Steps = ({ steps, activeStepIdx }) => {
    return (
        <div className="flex gap-2 items-center text-sm text-gray-400">
            {steps.map(({ title, href }, idx) => (
                <React.Fragment key={title}>
                    <Link
                        href={href}
                        className={`capitalize font-medium cursor-pointer ${
                            activeStepIdx === idx && "text-black"
                        }`}>
                        {title}
                    </Link>
                    {idx !== steps.length - 1 && <IoIosArrowForward />}
                </React.Fragment>
            ))}
        </div>
    );
};

export default Steps;
