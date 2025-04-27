import EasterBanner from "@/components/EasterBanner";

export const dynamic = "force-static";
export const revalidate = 1800;

const Home = () => {
  return (
    <div>
      <EasterBanner />

      <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100 p-4"></div>
    </div>
  );
};

export default Home;
