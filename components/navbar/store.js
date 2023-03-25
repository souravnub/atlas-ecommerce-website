const { atom } = require("jotai");

export const mobileMenuStateAtom = atom(false);

export const setMobileMenuOpenStateAtom = atom(
    (get) => get(mobileMenuStateAtom),
    (get, set, arg) => {
        if (typeof arg === "boolean") {
            set(mobileMenuStateAtom, arg);
        } else {
            console.error(
                `mobile menu state can be false or true only, you passed: ${arg}`
            );
        }
    }
);

export const toggleMobileMenuAtom = atom(
    (get) => get(mobileMenuStateAtom),
    (get, set, arg) => {
        set(mobileMenuStateAtom, !get(mobileMenuStateAtom));
    }
);
