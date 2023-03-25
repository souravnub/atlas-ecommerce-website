import gsap from "gsap";

export const getOpenAni = (overlay) =>
    gsap.timeline().set(overlay, { display: "block" }).to(overlay, {
        opacity: 1,
        ease: "power.inOut",
    });
export const getClosingAni = (overlay) =>
    gsap
        .timeline()
        .to(overlay, {
            opacity: 0,
            ease: "power.inOut",
        })
        .set(overlay, {
            display: "none",
        });
