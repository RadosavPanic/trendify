import HomeCarousel from "@/components/Carousel/HomeCarousel";

export const dynamic = "force-static";
export const revalidate = 1800;

const Home = () => {
  return (
    <div>
      <HomeCarousel />
    </div>
  );
};

export default Home;
