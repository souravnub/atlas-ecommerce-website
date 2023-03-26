import CarouselIndicators from "@/components/common/carousel/CarouselIndicators";
import { atom, useAtom } from "jotai";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import { HiArrowRight } from "react-icons/hi";
import CarouselNavigationButtons from "@/components/common/carousel/CarouselNavigationButtons";

const activeIndexAtom = atom(0);

export default function HomePageCarousel() {
    const [activeIndex, setIndex] = useAtom(activeIndexAtom);
    return (
        <div className="relative">
            <Carousel
                selectedItem={activeIndex}
                onChange={(idx) => setIndex(idx)}
                showIndicators={false}
                showThumbs={false}
                showArrows={false}
                showStatus={false}
                className="rounded-2xl mt-3 overflow-hidden">
                <div>
                    <img
                        src="https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2xvdGhpbmclMjBtb2RlbHN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                        className=" absolute object-cover inset-0 h-full -z-10 object-top"
                        alt=""
                    />

                    <div className="absolute -z-10 inset-0 h-full bg-black opacity-50"></div>

                    <div className="py-28 lg:py-32 text-white px-2">
                        <h1 className="text-4xl font-bold tracking-wide  leading-[45px] md:text-5xl">
                            Level up your styles with our collections this
                            summer
                        </h1>
                        <Link
                            href="/shop/summers"
                            className="flex gap-2 group max-w-max mt-8 rounded-md items-center mx-auto bg-white text-black px-4 py-2.5 font-medium">
                            Shop now{" "}
                            <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
                <div>
                    <img
                        src="https://images.unsplash.com/photo-1533541120754-3a341a8f19bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjA0fHxmYXNoaW9uJTIwbWFsZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=600&q=60"
                        className="absolute object-cover inset-0 h-full -z-10 object-top"
                        alt=""
                    />

                    <div className="absolute -z-10 inset-0 h-full bg-black opacity-50"></div>

                    <div className="py-28 lg:py-32 text-white px-2">
                        <h1 className="text-4xl font-bold tracking-wide  leading-[45px] md:text-5xl">
                            Make yourself the attention with formal wears
                        </h1>
                        <Link
                            href="/shop/summers"
                            className="flex gap-2 max-w-max mt-8 rounded-md items-center mx-auto group bg-white text-black px-4 py-2.5 font-medium">
                            Grab the deal
                            <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </Carousel>

            <CarouselNavigationButtons
                className="absolute right-5 top-5 md:right-8 md:top-8"
                setIndex={setIndex}
                slideCount={2}
                activeIndex={activeIndex}
            />

            <CarouselIndicators
                count={2}
                activeIndex={activeIndex}
                setIndex={setIndex}
                activeClassNames="!opacity-100 drop-shadow-[0_0px_2px_rgb(255,255,255)]"
                className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2 px-4"
            />
        </div>
    );
}
