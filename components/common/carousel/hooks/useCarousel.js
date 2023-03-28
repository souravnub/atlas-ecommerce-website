import { atom, useAtom } from "jotai";
import { useMemo } from "react";

export function useCarousel() {
    // have to use useMemo to create atom inside a component
    // if atom is not created inside the component then it will have the same value for all the components in which it will be used
    const idxAtom = useMemo(() => atom(0), []);
    const [idx, setIdx] = useAtom(idxAtom);

    return [idx, setIdx];
}
