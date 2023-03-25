import React, { useRef } from "react";

import { atom, useAtom } from "jotai";

import { BiMapPin } from "react-icons/bi";
import { AiOutlineShopping } from "react-icons/ai";
import { GoSettings } from "react-icons/go";
import { CgClose } from "react-icons/cg";

import SearchForm from "../components/SearchForm";
import UserProfile from "./components/UserProfile";
import MenuElement from "./components/MenuElement";
import { shopMenuOptions } from "../desktop/components/ShopMenu";
import GoPremiumAdvertisement from "./components/advertisement_card";

import { setMobileMenuOpenStateAtom } from "@/components/navbar/store";
import useMenuToggleAnimation from "./hooks/useMenuToggleAnimation";
import Overlay from "@/components/common/overlay/Overlay";

const userInfo = {
    name: "Alexis Enache",
    email: "alexis@gmail.com",
    profile_img:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60",
    new_notifications: true,
    is_premium: false,
};
const menuOptions = [
    {
        title: "site map",
        icon: <BiMapPin />,
        options: [
            { name: "Home", href: "/" },
            { name: "Contact us", href: "/contact" },
            { name: "Partners", href: "/partners" },
            { name: "About us", href: "/about" },
        ],
    },
    {
        title: "quick actions",
        icon: <GoSettings />,
        options: [
            { name: "Dashboard", href: "/dashboard" },
            { name: "Orders", href: "/orders" },
            { name: "Wishlist", href: "/wishlist" },
        ],
    },
    {
        title: "shop",
        icon: <AiOutlineShopping />,
        options: shopMenuOptions,
    },
];
const serachValAtom = atom("");

const MobileMenu = () => {
    const menuRef = useRef();
    const [isMobileMenuOpen, setMobileMenuOpenState] = useAtom(
        setMobileMenuOpenStateAtom
    );
    const [searchVal, setSearchVal] = useAtom(serachValAtom);

    useMenuToggleAnimation(menuRef, isMobileMenuOpen);

    return (
        <>
            <Overlay
                onClick={() => {
                    setMobileMenuOpenState(false);
                }}
                isVisible={isMobileMenuOpen}
            />
            <aside
                ref={menuRef}
                className="translate-y-full bg-white isolate fixed inset-0 top-10 rounded-t-2xl rounded-l-md pt-10 pb-5 overflow-auto px-3 z-20 md:hidden">
                <button
                    className="absolute flex items-center justify-center top-3 right-2 z-10 p-0.5 aspect-square rounded-full text-black text-2xl"
                    onClick={() => setMobileMenuOpenState(false)}>
                    <CgClose />
                </button>

                <UserProfile {...userInfo} />

                <div className="my-5 h-[1.5px] w-full bg-gray-200"></div>

                <SearchForm
                    value={searchVal}
                    onChange={(e) => setSearchVal(e.target.value)}
                />

                <div className="mt-10 flex gap-12 md:gap-16 px-3 flex-wrap">
                    {menuOptions.map((props) => {
                        return <MenuElement key={props.title} {...props} />;
                    })}
                </div>

                {!userInfo.is_premium && <GoPremiumAdvertisement />}
            </aside>
        </>
    );
};

export default MobileMenu;
