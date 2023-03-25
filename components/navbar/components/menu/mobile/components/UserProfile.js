import React from "react";

import { MdOutlineNotificationsNone } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

const UserProfile = ({ profile_img, name, email, new_notifications }) => {
    return (
        <div>
            <img
                src={profile_img}
                alt=""
                className="w-14 mb-3 aspect-square rounded-full object-cover object-top"
            />
            <div className="flex items-center justify-between">
                <div>
                    <span className="leading-6 block font-semibold text-lg">
                        {name}
                    </span>
                    <span className="block text-gray-500 text-xs font-semibold">
                        {email}
                    </span>
                </div>
                <div className="space-x-3">
                    <button className="hover:bg-gray-50 transition">
                        <IoSettingsOutline className="text-xl" />
                    </button>

                    <button className="relative bg-gray-50 p-1 rounded-full hover:bg-gray-100 transition">
                        {new_notifications && (
                            <div className="w-2 border border-white aspect-square rounded-full bg-orange-400 absolute top-0 right-0"></div>
                        )}
                        <MdOutlineNotificationsNone className="text-xl" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
