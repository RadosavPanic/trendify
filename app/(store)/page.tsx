import HomeCarousel from "@/components/Carousel/HomeCarousel";
import FeaturedProducts from "@/components/Products/FeaturedProducts";

const Home = () => {
  return (
    <div>
      <HomeCarousel />

      <FeaturedProducts category="shoes" columnLayout="reversed" />
      <FeaturedProducts category="clothing" rowLayout="reversed" />
    </div>
  );
};

export default Home;
