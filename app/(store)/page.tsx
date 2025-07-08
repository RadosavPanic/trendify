import IntroSliderWrapper from "@/components/Home/IntroSliderWrapper";
import BrandHighlights from "@/components/Home/BrandHighlights";
import FeaturedProducts from "@/components/Home/FeaturedProducts";
import FashionSlider from "@/components/Home/FashionSlider";
import BrandList from "@/components/Home/BrandList";

const Home = () => {
  return (
    <>
      <IntroSliderWrapper />
      <FeaturedProducts category="shoes" columnLayout="reversed" />
      <BrandHighlights />
      <FeaturedProducts category="featured" rowLayout="reversed" />
      <FashionSlider />
      <BrandList />
    </>
  );
};

export default Home;
