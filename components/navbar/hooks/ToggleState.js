import { useMemo, useState } from "react";

const useToggle = () => {
    const [isOpen, setIsOpen] = useState(false);

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
