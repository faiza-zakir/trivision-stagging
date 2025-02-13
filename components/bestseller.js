import { memo, useRef } from "react";
import PropTypes from "prop-types";
import ProductCards from "./product-cards";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import icons

const Bestseller = memo(({ className = "" }) => {
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  return (
    <div
      className={`w-[1320px] flex flex-col items-end justify-start mq750:items-center gap-10 max-w-full text-center text-21xl text-black font-h4-32 mq750:gap-5 ${className}`}
    >
      <div className="flex flex-row items-start justify-end py-0 pl-[491px] pr-[492px] box-border max-w-full mq480:pl-5 mq480:pr-5 mq750:pl-[122px] mq750:pr-[123px] mq1250:pl-[245px] mq1250:pr-[246px]">
        <h1 className="m-0 flex-1 relative text-inherit leading-[120%] font-medium font-[inherit] mq480:text-5xl mq480:leading-[29px] mq750:text-13xl mq750:leading-[38px]">
          BEST SELLER
        </h1>
      </div>

      <div className="self-stretch flex flex-row items-center justify-between gap-4 max-w-full">
        {/* Custom Arrow Buttons */}
        <button
          ref={prevButtonRef}
          className="p-2 rounded-full bg-gray-200 shadow-lg hover:bg-gray-300 focus:outline-none flex items-center justify-center"
        >
          <FaArrowLeft size={20} />
        </button>

        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            prevEl: prevButtonRef.current,
            nextEl: nextButtonRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevButtonRef.current;
            swiper.params.navigation.nextEl = nextButtonRef.current;
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full max-w-full"
        >
          <SwiperSlide>
            <div className="h-[374px] flex flex-col items-start justify-start pt-0 px-0 pb-6 box-border gap-4 bg-[url('/2@3x.png')] bg-cover bg-no-repeat bg-[top]">
              <div className="self-stretch flex-1 relative overflow-hidden" />
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-4 pr-[7px]">
                <h3 className="m-0 flex-1 relative leading-[140%] text-white text-5xl font-medium font-[inherit] mq480:text-base">
                  Explore Our Best Sellers
                </h3>
              </div>
            </div>
          </SwiperSlide>

          {[1, 2, 3].map((item, index) => (
            <SwiperSlide key={index}>
              <ProductCards
                imgBackgroundImage="url('/img@3x.png')"
                colorOptionJustifyContent="center"
                priceContainerJustifyContent="center"
                iconamoonheartLight={`/iconamoonheartlight-${item}.svg`}
                sVG={`/svg-${item}.svg`}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          ref={nextButtonRef}
          className="p-2 rounded-full bg-gray-200 shadow-lg hover:bg-gray-300 focus:outline-none flex items-center justify-center"
        >
          <FaArrowRight size={20} />
        </button>
      </div>
    </div>
  );
});

Bestseller.propTypes = {
  className: PropTypes.string,
};

export default Bestseller;
