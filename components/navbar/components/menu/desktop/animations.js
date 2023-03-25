import gsap from "gsap";

export function getShopMenuAni(menu) {
    return gsap.timeline().to(menu, {
        scaleY: 1,
        duration: 0.3,
        ease: "power3.inOut",
        onStart: () => {
            menu.style.display = "flex";
        },
        onReverseComplete: () => {
            menu.style.display = "none";
        },
    });
}
