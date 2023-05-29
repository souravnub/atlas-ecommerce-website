import {
    cartAtom,
    decreaseCartItemCountAtom,
    getSubTotalAtom,
    getTotalCost,
    getTotalDiscountAtom,
    increaseCartItemCountAtom,
    removeCartItemAtom,
    removeMultipleCartItemsAtom,
} from "@/stores/cartStore";
import { useAtomValue, useSetAtom } from "jotai";

export function useCart() {
    const cart = useAtomValue(cartAtom);
    const removeItem = useSetAtom(removeCartItemAtom);
    const increaseItem = useSetAtom(increaseCartItemCountAtom);
    const decreaseItem = useSetAtom(decreaseCartItemCountAtom);
    const removeMultipleItemsAtom = useSetAtom(removeMultipleCartItemsAtom);

    const subTotal = useAtomValue(getSubTotalAtom);
    const discount = useAtomValue(getTotalDiscountAtom);
    const totalCost = useAtomValue(getTotalCost);

    return {
        cart,

        subTotal,
        discount,
        totalCost,

        increaseItem,
        removeItem,
        decreaseItem,
        removeMultipleItemsAtom,
    };
}
