import IntroSliderWrapper from "@/components/Home/IntroSlider/IntroSliderWrapper";
import FeaturedProducts from "@/components/Home/FeaturedProducts";
import BrandHighlights from "@/components/Home/BrandHighlights";
import FashionSliderWrapper from "@/components/Home/FashionSlider/FashionSliderWrapper";
import BrandListWrapper from "@/components/Home/BrandList/BrandListWrapper";

const Home = () => {
  return (
    <>
      <IntroSliderWrapper />
      <FeaturedProducts category="shoes" columnLayout="reversed" />
      <BrandHighlights />
      <FeaturedProducts category="featured" rowLayout="reversed" />
      <FashionSliderWrapper />
      <BrandListWrapper />
    </>
  );
};

export default Home;
