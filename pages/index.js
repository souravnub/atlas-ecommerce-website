import HomePageCarousel from "@/components/layout/home/HomePageCarousel";
import PartnerBrands from "@/components/layout/home/partnerBrands";
import ProductCategoriesSection from "@/components/layout/home/ProductCategoriesSection";
import Services from "@/components/layout/home/Services";
import React from "react";

const Home = () => {
    return (
        <div className="overflow-hidden">
            <HomePageCarousel />
            <PartnerBrands />
            <Services />
            <ProductCategoriesSection />
        </div>
    );
};

export default Home;
