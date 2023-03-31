import { useMemo, useState } from "react";

const useToggle = (initialState = false) => {
    const [isOpen, setIsOpen] = useState(initialState);

    const handlers = useMemo(() => {
        return {
            on: () => setIsOpen(true),
            off: () => setIsOpen(false),
            toggle: () => setIsOpen((prev) => !prev),
        };
    }, []);

    return [isOpen, handlers];
};

export default useToggle;
