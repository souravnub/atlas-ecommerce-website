// const breakpoints = {
//     450: 1,
//     650: 2,
//     1200: 3,
//     1600: 4,
// };

const { useState, useEffect } = require("react");

export default (breakpoints) => {
    const [currentBreakpointVal, setCurrentBreakpointVal] = useState(undefined);
    const [currentBreakpointWidth, setCurrentBreakpointWidth] =
        useState(undefined);

    function handleChangeBreakpoint() {
        const currentBreakpointWidth = Object.keys(breakpoints).find(
            (breakpoint) => breakpoint >= window.innerWidth
        );

        if (!currentBreakpointWidth) {
            // viewport is bigger than the maximum breakpoint width defined

            const maxBreakpoint = Object.keys(breakpoints).at(-1);
            setCurrentBreakpointWidth(parseFloat(maxBreakpoint));
            setCurrentBreakpointVal(breakpoints[maxBreakpoint]);
            return;
        }

        setCurrentBreakpointWidth(parseFloat(currentBreakpointWidth));
        setCurrentBreakpointVal(breakpoints[currentBreakpointWidth]);
    }

    useEffect(() => {
        handleChangeBreakpoint();

        window.addEventListener("resize", handleChangeBreakpoint);

        return () => {
            window.removeEventListener("resize", handleChangeBreakpoint);
        };
    }, []);

    return { key: currentBreakpointWidth, value: currentBreakpointVal };
};
