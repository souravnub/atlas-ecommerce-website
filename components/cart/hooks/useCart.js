import {
    cartAtom,
    decreaseCartItemCountAtom,
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

    return [
        cart,
        increaseItem,
        removeItem,
        decreaseItem,
        removeMultipleItemsAtom,
    ];
}
