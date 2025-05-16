import BrandHighlights from "@/components/Banners/BrandHighlights";
import HomeCarousel from "@/components/Banners/HomeCarousel";
import FeaturedProducts from "@/components/Banners/FeaturedProducts";

const Home = () => {
  return (
    <div>
      <HomeCarousel />

      <FeaturedProducts category="shoes" columnLayout="reversed" />
      <BrandHighlights />
      <FeaturedProducts category="featured" rowLayout="reversed" />
    </div>
  );
};

export default Home;
