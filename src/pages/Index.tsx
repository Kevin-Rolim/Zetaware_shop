import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import CategoriesSection from "@/components/home/CategoriesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedProducts />
      <CategoriesSection />
      <TestimonialsSection />
    </Layout>
  );
};

export default Index;
