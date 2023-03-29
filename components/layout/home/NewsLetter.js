import { atom, useAtom } from "jotai";
import Link from "next/link";
import React, { useCallback, useEffect, useRef } from "react";
import { IoMail } from "react-icons/io5";

const emailAtom = atom("");
const NewsLetter = () => {
    const [email, setEmail] = useAtom(emailAtom);

    const iconRef = useRef();

    const validateEmail = useCallback((mail) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            return true;
        }
        return false;
    }, []);

    useEffect(() => {
        if (email === "") {
            return iconRef.current.setAttribute("data-valid", "empty");
        }

        if (validateEmail(email)) {
            iconRef.current.setAttribute("data-valid", "true");
        } else {
            iconRef.current.setAttribute("data-valid", "false");
        }
    }, [email]);

    function handleSubscribeNewsLetter(e) {
        e.preventDefault();
    }

    return (
        <div className="mt-24 text-center space-y-3 lg:space-y-4">
            <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl">
                Subscrible to our newsletter to get updates <br /> to our latest
                collections
            </h1>
            <p className="font-medium text-xs  text-slate-500 lg:text-sm">
                Get 20% off on your first order just by subscribing to our
                newsletter
            </p>
            <form
                className="text-sm py-5 flex justify-center lg:text-base lg:py-8"
                onSubmit={handleSubscribeNewsLetter}>
                <div className="relative">
                    <input
                        type="email"
                        required
                        className="px-2.5 pl-8 lg:pl-9 focus:outline-none lg:min-w-[18rem]  lg:py-2 placeholder:text-xs lg:placeholder:text-sm font-medium py-1.5 min-w-[15rem] border-[1.7px] rounded-md bg-slate-50"
                        placeholder="Enter your email"
                        aria-placeholder="enter your email"
                        aria-required="true"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div ref={iconRef} className="group ">
                        <IoMail className="group-data-[valid=empty]:fill-neutral-400 absolute group-data-[valid=true]:fill-green-600 group-data-[valid=false]:fill-red-600 top-1/2 -translate-y-1/2 left-2.5 text-lg transition-colors duration-300 lg:text-xl" />
                    </div>
                </div>
                <button className="ml-1 bg-gray-800 rounded-md text-white text-xs px-4 lg:text-sm lg:px-5">
                    Subscribe
                </button>
            </form>

            <div className="font-medium text-xs text-slate-400 lg:text-sm">
                <span className="block">
                    You will be able to unsubscribe at any time.
                </span>
                <span>
                    Read your Privacy Policy{" "}
                    <Link
                        href="/"
                        className="underline font-semibold underline-offset-1 text-gray-900">
                        here
                    </Link>
                </span>
            </div>
        </div>
    );
};

export default NewsLetter;
