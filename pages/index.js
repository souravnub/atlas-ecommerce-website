import FeaturedProducts from "@/components/layout/home/FeaturedProducts";
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
            <FeaturedProducts />
        </div>
    );
};

export default Home;
