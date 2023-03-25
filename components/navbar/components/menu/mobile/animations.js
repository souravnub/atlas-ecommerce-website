import gsap from "gsap";

export const openMobileMenuAni = (menu) =>
    gsap
        .timeline({ defaults: { ease: "power4.inOut" } })
        .set(menu, { display: "block" })
        .to(menu, {
            translateY: 0,
        });
export const closeMobileMenuAni = (menu) =>
    gsap
        .timeline()
        .to(menu, {
            translateY: "100%",
            ease: "power4.inOut",
        })
        .set(menu, { display: "none" });
