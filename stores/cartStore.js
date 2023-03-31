import {
    getDecreasedItemCountCart,
    getIncreasedItemCountCart,
    removeItemFromCart,
} from "@/components/cart/utils/cartUtils";

const { atom } = require("jotai");

export const cartAtom = atom([
    {
        id: 1,
        img: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2xvdGhlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        name: "sourav",
        count: 2,
        unitPrice: 10,
        props: {
            color: "green",
            size: "M",
        },
        discountPerItem: 5,
    },
    {
        id: 2,
        img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
        name: "wow",
        count: 1,
        unitPrice: 10,
        props: {
            color: "green",
            size: "M",
        },
    },
]);

export const addProductAtom = atom(null, (get, set, product) => {
    const isProductAlreadyPresent = get(cartAtom).find(
        (cartItem) => cartItem.id === product.id
    );

    if (isProductAlreadyPresent) {
        set(cartAtom, getIncreasedItemCountCart(get(cartAtom), product.id, 1));
    } else {
        if (product.count && typeof product.count === number) {
            set(cartAtom, [...get(cartAtom), product]);
        } else {
            set(cartAtom, [...get(cartAtom), { ...product, count: 1 }]);
        }
    }
});

export const increaseCartItemCountAtom = atom(
    null,
    (get, set, { id, increment }) => {
        set(cartAtom, getIncreasedItemCountCart(get(cartAtom), id, increment));
    }
);

export const decreaseCartItemCountAtom = atom(
    null,
    (get, set, { id, decrement }) => {
        set(cartAtom, getDecreasedItemCountCart(get(cartAtom), id, decrement));
    }
);

export const removeCartItemAtom = atom(null, (get, set, id) => {
    set(cartAtom, removeItemFromCart(get(cartAtom), id));
});

export const removeMultipleCartItemsAtom = atom(
    null,
    (get, set, productIdsArr) => {
        const newCart = get(cartAtom).filter((cartItem) => {
            if (!productIdsArr.find((id) => id === cartItem.id)) {
                return cartItem;
            }
        });

        set(cartAtom, newCart);
    }
);

export const getSubTotalAtom = atom((get) => {
    let total = 0;
    get(cartAtom).forEach(({ unitPrice, count }) => {
        total += count * unitPrice;
    });
    return total;
});

export const getTotalDiscountAtom = atom((get) => {
    let d = 0;
    get(cartAtom).forEach(({ count, discountPerItem = 0 }) => {
        d += discountPerItem * count;
    });
    return d;
});

export const getTotalCost = atom((get) => {
    return get(getSubTotalAtom) - get(getTotalDiscountAtom);
});
