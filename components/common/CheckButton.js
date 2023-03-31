import useToggle from "@/hooks/useToggle";
import React, { useEffect, useRef } from "react";
import { BsCheck } from "react-icons/bs";

const CheckButton = ({
    id,
    checked,
    disabled,
    defaultChecked,
    onChange,
    extraStyles,
}) => {
    const inputRef = useRef();
    const labelRef = useRef();
    const [isChecked, { on, off, toggle }] = useToggle(defaultChecked);

    useEffect(() => {
        if (isChecked) {
            off();
        }
        if (disabled) {
            labelRef.current.style.cursor = "not-allowed";
        }
    }, [disabled]);

    useEffect(() => {
        if (checked === true) {
            on();
        } else if (checked === false) {
            off();
        }
    }, [checked]);

    return (
        <div
            key={id}
            className="relative w-[20px] flex items-center"
            style={extraStyles}>
            <label
                ref={labelRef}
                htmlFor={id}
                className={`cursor-pointer block w-full relative aspect-square border-[1.8px] border-neutral-500 rounded-[.25rem]  ${
                    isChecked && "bg-gray-900 border-gray-900 text-white"
                } transition-colors`}>
                <BsCheck
                    className={`absolute -translate-x-1/2 -translate-y-1/2 opacity-0 top-1/2 left-1/2 text-lg transition-opacity ${
                        isChecked && "opacity-100"
                    }`}
                />
            </label>
            <input
                disabled={disabled}
                checked={isChecked}
                ref={inputRef}
                id={id}
                type="checkbox"
                className="w-0 h-0 opacity-0 absolute"
                onChange={(e) => {
                    toggle();
                    onChange && onChange(e);
                }}
            />
        </div>
    );
};

export default CheckButton;
