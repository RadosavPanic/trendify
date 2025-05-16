import Header from "./Header";
import SpringSaleBanner from "./SpringSaleBanner";

const Navigation = () => {
  return (
    <div className="sticky top-0 z-50">
      <Header />
      <SpringSaleBanner />
    </div>
  );
};

export default Navigation;
