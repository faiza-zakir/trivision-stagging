import { useRef } from "react";
import Image from "next/image";
import FrameComponent1 from "../components/frame-component1";
import Banner from "../components/banner";
import Bestseller from "../components/bestseller";
import ProductCards from "../components/product-cards";
import FrameComponent2 from "../components/frame-component2";
import JoinWrapper from "../components/join-wrapper";
import FaqComponentHome from "../components/faq-component-home";
import Footer from "../components/footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"; // Import icons
import InstaPosts from "../components/insta-posts";

const Home = () => {
  const prevButtonRefCategories = useRef(null);
  const nextButtonRefCategories = useRef(null);
  const prevButtonRefNewArrivals = useRef(null);
  const nextButtonRefNewArrivals = useRef(null);

  return (
    <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-end justify-start leading-[normal] tracking-[normal]">
      <FrameComponent1 />
      <Banner />
      <section className="self-stretch flex flex-row items-center justify-center pt-0 px-0 mq480:px-3 pb-[60px] box-border max-w-full mq480:pb-[20px] mq480:pt-[20px]">
        <Image
          className="h-[200px] flex-1 relative max-w-full overflow-hidden mq480:h-100 mq480:h-[100px]"
          loading="lazy"
          width={1440}
          height={200}
          alt=""
          src="/brands.svg"
        />
      </section>
      <section className="self-stretch flex flex-col items-center justify-center pt-0 px-10 mq480:px-3 pb-[60px] mq480:pb-[40px] box-border relative max-w-full text-center text-21xl text-black font-h4-32 mq750:pb-[39px] mq750:box-border">
        <Bestseller />
      </section>
      <section className="self-stretch flex flex-col items-center justify-center pt-0 px-10 pb-[60px] mq480:pb-[40px] mq480:px-3 box-border relative max-w-full text-center text-21xl text-black font-h4-32 mq750:pb-[39px] mq750:box-border">
        <div className="w-[1320px] flex flex-col items-center justify-center gap-10 max-w-full mq750:gap-5">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[508px] pr-[507px] mq480:pl-5 mq480:pr-5 mq480:box-border mq750:pl-[127px] mq750:pr-[126px] mq750:box-border mq1250:pl-[254px] mq1250:pr-[253px] mq1250:box-border">
            <h1 className="m-0 flex-1 relative text-inherit leading-[120%] font-medium font-[inherit] mq480:text-5xl mq480:leading-[29px] mq750:text-13xl mq750:leading-[38px]">
              CATEGORIES
            </h1>
          </div>
          <div className="self-stretch flex flex-row items-center justify-between gap-4 max-w-full">
            <button
              ref={prevButtonRefCategories}
              className="p-2 rounded-full bg-gray-200 shadow-lg hover:bg-gray-300 focus:outline-none flex items-center justify-center"
            >
              <FaAngleLeft size={20} />
            </button>
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              navigation={{
                prevEl: prevButtonRefCategories.current,
                nextEl: nextButtonRefCategories.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl =
                  prevButtonRefCategories.current;
                swiper.params.navigation.nextEl =
                  nextButtonRefCategories.current;
              }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="w-full max-w-full"
            >
              <div className="self-stretch flex flex-row items-start justify-center gap-4 text-left text-5xl text-background-color-primary mq1250:flex-wrap">
                {/* Category 1 */}
                <SwiperSlide>
                  <div className="lex-1 h-[314px] w-[380px] mq480:w-full overflow-hidden flex flex-row items-end justify-center p-6 box-border bg-[url('/sunglasses@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-5xl text-background-color-primary font-h4-32">
                    <h2 className="m-0 relative text-5xl leading-[120%] font-medium font-[inherit] mq480:text-base">
                      Sunglasses
                    </h2>
                  </div>
                </SwiperSlide>

                {/* Category 2 */}
                <SwiperSlide>
                  <div className="lex-1 h-[314px] w-[380px] mq480:w-full overflow-hidden flex flex-row items-end justify-center p-6 box-border bg-[url('/eyeglassimg.jpeg')] bg-cover bg-no-repeat bg-[top] text-left text-5xl text-background-color-primary font-h4-32">
                    <h2 className="m-0 relative text-5xl leading-[120%] font-medium font-[inherit] mq480:text-base">
                      Eyeglasses
                    </h2>
                  </div>
                </SwiperSlide>

                {/* Category 3 */}
                <SwiperSlide>
                  <div className="lex-1 h-[314px] w-[380px] mq480:w-full overflow-hidden flex flex-row items-end justify-center p-6 box-border bg-[url('/kidsimg.jpeg')] bg-cover bg-no-repeat bg-[top] text-left text-5xl text-background-color-primary font-h4-32">
                    <h2 className="m-0 relative text-5xl leading-[120%] font-medium font-[inherit] mq480:text-base">
                      Kid Sunglasses
                    </h2>
                  </div>
                </SwiperSlide>

                {/* Category 4 */}
                <SwiperSlide>
                  <div className="lex-1 h-[314px] w-[380px] mq480:w-full overflow-hidden flex flex-row items-end justify-center p-6 box-border bg-[url('/lensimg.jpeg')] bg-cover bg-no-repeat bg-[top] text-left text-5xl text-background-color-primary font-h4-32">
                    <h2 className="m-0 relative text-5xl leading-[120%] font-medium font-[inherit] mq480:text-base">
                      Contact Lenses
                    </h2>
                  </div>
                </SwiperSlide>

                {/* Category 5 */}
                <SwiperSlide>
                  <div className="lex-1 h-[314px] w-[380px] mq480:w-full overflow-hidden flex flex-row items-end justify-center p-6 box-border bg-[url('/category-links3@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-5xl text-background-color-primary font-h4-32">
                    <h2 className="m-0 relative text-5xl leading-[120%] font-medium font-[inherit] mq480:text-base">
                      Accessories
                    </h2>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
            <button
              ref={nextButtonRefCategories}
              className="p-2 rounded-full bg-gray-200 shadow-lg hover:bg-gray-300 focus:outline-none flex items-center justify-center"
            >
              <FaAngleRight ize={20} />
            </button>
          </div>

          <div className="bg-background-color-primary overflow-hidden hidden flex-row items-center justify-center py-3 px-10 whitespace-nowrap text-base">
            <div className="relative leading-[150%] font-medium">
              Explore More
            </div>
          </div>
        </div>
      </section>

      <section className="self-stretch flex flex-col items-center justify-center pt-0 px-10 pb-[60px] mq480:pb-[40px] mq480:px-3 box-border relative max-w-full text-center text-21xl text-black font-h4-32 mq750:pb-[39px] mq750:box-border">
        <div className="w-[1320px] flex flex-col items-center justify-center gap-10 max-w-full mq750:gap-5">
          <div className="w-[1279.5px] flex flex-row items-center justify-center py-0 pl-[479px] pr-[480px] box-border max-w-full mq480:pl-5 mq480:pr-5 mq480:box-border mq750:pl-[119px] mq750:pr-[120px] mq750:box-border mq1250:pl-[239px] mq1250:pr-60 mq1250:box-border">
            <h1 className="m-0 flex-1 relative text-inherit leading-[120%] font-medium font-[inherit] mq480:text-5xl mq480:leading-[29px] mq750:text-13xl mq750:leading-[38px]">
              NEW ARRIVALS
            </h1>
          </div>
          <div className="self-stretch flex flex-row items-center justify-between gap-4 max-w-full">
            <button
              ref={prevButtonRefNewArrivals}
              className="p-2 rounded-full bg-gray-200 shadow-lg hover:bg-gray-300 focus:outline-none flex items-center justify-center"
            >
              <FaAngleLeft size={20} />
            </button>
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              navigation={{
                prevEl: prevButtonRefNewArrivals.current,
                nextEl: nextButtonRefNewArrivals.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl =
                  prevButtonRefNewArrivals.current;
                swiper.params.navigation.nextEl =
                  nextButtonRefNewArrivals.current;
              }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="w-full max-w-full"
            >
              <SwiperSlide>
                <div className="h-[374px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-6 box-border gap-4 bg-[url('/1@3x.png')] bg-cover bg-no-repeat bg-[top]">
                  <div className="self-stretch flex-1 relative overflow-hidden" />
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pl-4 pr-[7px]">
                    <h3 className="m-0 flex-1 relative text-5xl text-white leading-[120%] font-medium font-[inherit] mq480:leading-[29px] mq750:text-13xl mq750:leading-[38px] mq480:text-base">
                      Explore Our New Arrivals
                    </h3>
                  </div>
                  <div className="relative text-base leading-[150%] font-medium text-right hidden">
                    Shop Now
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <ProductCards
                  imgBackgroundImage="/newarriv1.jpg"
                  title="NEW ARRIVALS"
                  price="10"
                  colorOptionJustifyContent="center"
                  priceContainerJustifyContent="center"
                  iconamoonheartLight="/iconamoonheartlight.svg"
                  sVG="/svg-1.svg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCards
                  imgBackgroundImage="/newarriv2.jpg"
                  title="NEW ARRIVALS"
                  price="20"
                  colorOptionJustifyContent="center"
                  priceContainerJustifyContent="center"
                  iconamoonheartLight="/iconamoonheartlight-1.svg"
                  sVG="/svg-2.svg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCards
                  imgBackgroundImage="/newarriv3.jpg"
                  title="NEW ARRIVALS"
                  price="30"
                  colorOptionJustifyContent="center"
                  priceContainerJustifyContent="center"
                  iconamoonheartLight="/iconamoonheartlight-2.svg"
                  sVG="/svg-3.svg"
                />
              </SwiperSlide>
            </Swiper>
            <button
              ref={nextButtonRefNewArrivals}
              className="p-2 rounded-full bg-gray-200 shadow-lg hover:bg-gray-300 focus:outline-none flex items-center justify-center"
            >
              <FaAngleRight size={20} />
            </button>
          </div>
        </div>
      </section>
      <FrameComponent2 />
      <section className="self-stretch flex flex-col items-center justify-center pt-0 px-10 pb-[60px] gap-[60px] mq480:pb-[40px] mq480:px-3 box-border relative max-w-full text-center text-21xl text-black font-h4-32 mq750:pb-[39px] mq750:box-border">
        <JoinWrapper
          joinWrapperPadding="0px 20px 0px 0px"
          joinWrapperFlex="unset"
          joinWrapperAlignSelf="unset"
          emptyPlaceholders="/8@2x.png"
          emptyPlaceholders1="/7@2x.png"
          emptyPlaceholders2="/6@2x.png"
          emptyPlaceholders3="/5@2x.png"
        />
        <FaqComponentHome />
        <InstaPosts />
      </section>
      <Footer
        maskGroup="/mask-group@2x.png"
        formMargin="0"
        iconYoutube="/icon--youtube-1.svg"
        itemImg="/item--img41.svg"
        itemImg1="/item--img-15.svg"
        itemImg2="/item--img-25.svg"
      />
    </div>
  );
};

export default Home;
