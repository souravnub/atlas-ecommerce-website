import { atom, useAtomValue, useSetAtom } from "jotai";
import { useMemo } from "react";

export default function useSelect() {
    const selectedItemsAtom = useMemo(() => atom([]), []);

    const selectItemAtom = useMemo(
        () =>
            atom(null, (get, set, itemId) => {
                const isAlreadyChecked = get(selectedItemsAtom).find(
                    (id) => id === itemId
                );

                if (!isAlreadyChecked) {
                    set(selectedItemsAtom, [...get(selectedItemsAtom), itemId]);
                }
            }),
        []
    );
    const unSelectItemAtom = useMemo(
        () =>
            atom(null, (get, set, itemId) => {
                const isChecked = get(selectedItemsAtom).find(
                    (id) => id === itemId
                );
                if (isChecked) {
                    set(
                        selectedItemsAtom,
                        get(selectedItemsAtom).filter((id) => id !== itemId)
                    );
                }
            }),
        []
    );
    const selectMultipleItemsAtom = useMemo(
        () =>
            atom(null, (get, set, items) => {
                set(selectedItemsAtom, [...get(selectedItemsAtom), ...items]);
            }),
        []
    );
    const unSelectMultipleItemsAtom = useMemo(
        () =>
            atom(null, (get, set, items) => {
                const newSelectedItemsArr = get(selectedItemsAtom).filter(
                    (itemId) => {
                        if (!items.find((id) => id === itemId)) {
                            return itemId;
                        }
                    }
                );
                set(selectedItemsAtom, newSelectedItemsArr);
            }),
        []
    );

    const selectedItems = useAtomValue(selectedItemsAtom);
    const selectItem = useSetAtom(selectItemAtom);
    const unSelectItem = useSetAtom(unSelectItemAtom);
    const selectMultipleItems = useSetAtom(selectMultipleItemsAtom);
    const unSelectMultipleItems = useSetAtom(unSelectMultipleItemsAtom);

    return [
        selectedItems,
        selectItem,
        unSelectItem,
        selectMultipleItems,
        unSelectMultipleItems,
    ];
}
