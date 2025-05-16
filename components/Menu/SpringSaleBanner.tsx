import { use } from "react";
import { getActiveSaleByCouponCode } from "@/sanity/lib/sales/getActiveSaleByCouponCode";

const SpringSaleBanner = () => {
  const sale = use(getActiveSaleByCouponCode("SPRING2025"));

  if (!sale?.isActive) return null;

  return (
    <div className="saleBannerElement bg-black/90 text-white w-full h-12 flex items-center justify-center">
      <div className="text-center text-xs md:text-sm font-semibold sm:px-2 px-0">
        <div className="flex flex-wrap lg:flex-nowrap justify-center">
          <div className="flex justify-center">
            <span>Dont miss our {sale.title}! All items</span>
            <span className="text-yellow-300 ml-1">
              {sale.discountAmount}% OFF.
            </span>
          </div>

          <div className="flex justify-center">
            <span className="ml-1">Use code on checkout:</span>
            <span className="text-yellow-300 ml-1 font-semibold">
              {sale.couponCode}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpringSaleBanner;
