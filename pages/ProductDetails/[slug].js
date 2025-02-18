// import Image from "next/image";
// import { useRef } from "react";
// import Main1 from "../../components/main1";
// import IdeologyBullets from "../../components/ideology-bullets";
// import ProductCards from "../../components/product-cards";
// import Insta from "../../components/insta";
// import ImagePlaceholders from "../../components/image-placeholders";
// import Footer from "../../components/footer";
// import FrameComponent1 from "../../components/frame-component1";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Navigation } from "swiper/modules";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import icons
// import ImageComponent from "../../components/ecommercepanle";

// export const getStaticPaths = async () => {
//   try {
//     const res = await fetch(
//       "https://apitrivsion.prismcloudhosting.com/api/products"
//     );
//     const data = await res.json();

//     if (!data.product || !Array.isArray(data.product)) {
//       return { paths: [], fallback: "blocking" };
//     }

//     const paths = data.product
//       .filter((item) => item.slug)
//       .map((item) => ({
//         params: { slug: item.slug },
//       }));

//     return {
//       paths,
//       fallback: "blocking",
//     };
//   } catch (error) {
//     console.error("Error in getStaticPaths:", error);
//     return { paths: [], fallback: "blocking" };
//   }
// };

// export const getStaticProps = async ({ params }) => {
//   try {
//     const res = await fetch(
//       `https://apitrivsion.prismcloudhosting.com/api/products/${params.slug}`
//     );
//     const data = await res.json();

//     if (!data.product || !data.product) {
//       return { notFound: true };
//     }

//     return {
//       props: {
//         products: data,
//       },
//       revalidate: 60,
//     };
//   } catch (error) {
//     console.error("Error fetching data in getStaticProps:", error);
//     return { notFound: true };
//   }
// };

// const SunglassesProductDetails = ({ products }) => {
//   const prevButtonRef = useRef(null);
//   const nextButtonRef = useRef(null);

//   return (
//     <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-center justify-center leading-[normal] tracking-[normal]">
//       <FrameComponent1 />
//       {/* <ImageComponent/> */}
//       <Main1 product={products} />
//       <section className="overflow-hidden flex flex-row items-start justify-start py-[218px] px-[688px] bg-[url('/video1@3x.png')] bg-cover bg-no-repeat bg-[top] mq480:pl-5 mq480:pr-5 mq480:box-border mq825:py-[142px] mq825:px-[344px] mq825:box-border">
//         <Image
//           className="h-16 w-16 relative rounded-81xl overflow-hidden shrink-0"
//           loading="lazy"
//           width={64}
//           height={64}
//           alt=""
//           src="/mdiplay1.svg"
//         />
//       </section>
//       <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[60px] box-border max-w-full mq825:pb-[39px] mq825:box-border">
//         <div className="flex-1 flex flex-row items-start justify-center flex-wrap content-start py-[60px] px-20 box-border gap-10 max-w-full mq825:gap-5 mq825:py-[39px] mq825:px-10 mq825:box-border">
//           <IdeologyBullets
//             ideologyBulletsMinWidth="160px"
//             emptyBullets={products.product.product_images[1]}
//           />
//           <IdeologyBullets
//             ideologyBulletsMinWidth="160px"
//             emptyBullets={products.product.product_images[2]}
//           />
//           <IdeologyBullets
//             ideologyBulletsMinWidth="160px"
//             emptyBullets={products.product.product_images[3]}
//           />
//         </div>
//       </div>
//       <section className="w-[1400px] flex flex-row items-center justify-center pt-0 px-10 pb-[60px] box-border max-w-full text-center text-21xl text-black font-h4-32 mq825:pb-[39px] mq825:box-border">
//         <div className="flex-1 flex flex-col items-center justify-center gap-10 max-w-full mq825:gap-5">
//           <div className="w-[1279.5px] flex flex-row items-center justify-center py-0 pl-[463px] pr-[464px] box-border max-w-full mq480:pl-5 mq480:pr-5 mq480:box-border mq825:pl-[115px] mq825:pr-[116px] mq825:box-border mq1410:pl-[231px] mq1410:pr-[232px] mq1410:box-border">
//             <h1 className="m-0 flex-1 relative text-inherit leading-[120%] font-medium font-[inherit] mq480:text-5xl mq480:leading-[29px] mq825:text-13xl mq825:leading-[38px]">
//               Related Products
//             </h1>
//           </div>
//           <div className="self-stretch flex flex-row items-center justify-center gap-4 max-w-full">
//             <button
//               ref={prevButtonRef}
//               className="p-2 rounded-full bg-gray-200 shadow-lg hover:bg-gray-300 focus:outline-none flex items-center justify-center"
//             >
//               <FaArrowLeft size={20} />
//             </button>
//             <Swiper
//               modules={[Navigation]}
//               spaceBetween={20}
//               slidesPerView={1}
//               navigation={{
//                 prevEl: prevButtonRef.current,
//                 nextEl: nextButtonRef.current,
//               }}
//               onBeforeInit={(swiper) => {
//                 swiper.params.navigation.prevEl = prevButtonRef.current;
//                 swiper.params.navigation.nextEl = nextButtonRef.current;
//               }}
//               breakpoints={{
//                 640: { slidesPerView: 1 },
//                 768: { slidesPerView: 2 },
//                 1024: { slidesPerView: 3 },
//               }}
//               className="w-full max-w-full"
//             >
//               {products.relatedProducts?.map((relatedProduct, index) => (
//                 <SwiperSlide key={index}>
//                   <ProductCards
//                     key={index}
//                     imgBackgroundImage={relatedProduct.product_images[0]}
//                     colorOptionJustifyContent="space-between"
//                     next="/pending_I807:4280;491:5147"
//                     next1="/pending_I807:4280;491:5150"
//                     priceContainerJustifyContent="space-between"
//                     iconamoonheartLight="/iconamoonheartlight1.svg"
//                     sVG="/svg-11.svg"
//                     productItem={relatedProduct}
//                     name={relatedProduct.product_name_short}
//                     brand_name={relatedProduct.brand.name}
//                     price={relatedProduct.retail_price}
//                     slug={relatedProduct.slug}
//                   />
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//             <button
//               ref={nextButtonRef}
//               className="p-2 rounded-full bg-gray-200 shadow-lg hover:bg-gray-300 focus:outline-none flex items-center justify-center"
//             >
//               <FaArrowRight size={20} />
//             </button>
//           </div>
//         </div>
//       </section>
//       <Image
//         className="w-6 h-6 absolute !m-[0] right-[40px] bottom-[2232.5px] overflow-hidden shrink-0 object-contain"
//         width={24}
//         height={24}
//         alt=""
//         src="/next-2@2x.png"
//       />
//       <section className="self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-[74px] box-border max-w-full text-left text-21xl text-black font-h4-32 mq825:pb-[31px] mq1410:pb-12">
//         <Insta
//           instaImages="/8@2x.png"
//           instaImages1="/7@2x.png"
//           instaImages2="/6@2x.png"
//           instaImages3="/5@2x.png"
//         />
//       </section>
//       <section className="self-stretch flex flex-row items-start justify-start pt-0 px-20 pb-[34px] box-border max-w-full mq825:pl-10 mq825:pr-10">
//         <div className="flex-1 flex flex-row items-start justify-start max-w-full [row-gap:20px] mq1410:flex-wrap">
//           <ImagePlaceholders
//             imagePlaceholdersFlex="1"
//             imagePlaceholdersMinWidth="240px"
//             perfumeImageContainersAlignSelf="stretch"
//             img="/img1@2x.png"
//             perfumes="100% Authentic Products"
//           />
//           <ImagePlaceholders
//             imagePlaceholdersFlex="0.6602"
//             imagePlaceholdersMinWidth="240px"
//             perfumeImageContainersAlignSelf="stretch"
//             img="/img-1@2x.png"
//             perfumes="Secure Payment"
//           />
//           <ImagePlaceholders
//             imagePlaceholdersFlex="0.5625"
//             imagePlaceholdersMinWidth="240px"
//             perfumeImageContainersAlignSelf="stretch"
//             img="/img-2@2x.png"
//             perfumes="Free Shipping"
//           />
//           <ImagePlaceholders
//             imagePlaceholdersFlex="0.6133"
//             imagePlaceholdersMinWidth="240px"
//             perfumeImageContainersAlignSelf="stretch"
//             img="/img-3@2x.png"
//             perfumes="1 Year Warranty"
//           />
//         </div>
//       </section>
//       <Footer
//         maskGroup="/mask-group@2x.png"
//         formMargin="0"
//         iconYoutube="/icon--youtube-1.svg"
//         itemImg="/item--img41.svg"
//         itemImg1="/item--img-15.svg"
//         itemImg2="/item--img-25.svg"
//       />
//     </div>
//   );
// };

// export default SunglassesProductDetails;

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import Main1 from "../../components/main1";
import IdeologyBullets from "../../components/ideology-bullets";
import ProductCards from "../../components/product-cards";
import Insta from "../../components/insta";
import Footer from "../../components/footer";
import FrameComponent1 from "../../components/frame-component1";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"; // Import icons
import Loader from "../../components/Loader/Loader";

const SunglassesProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const { slug } = router.query;
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  useEffect(() => {
    if (!slug) return;

    const fetchProduct = async () => {
      try {
        const res = await fetch(
          `https://apitrivsion.prismcloudhosting.com/api/products/${slug}`
        );
        const data = await res.json();
        if (!data.product) {
          setError("Product not found");
        } else {
          setProduct(data);
        }
      } catch (err) {
        setError("Failed to fetch product data");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);

  const addCart = () => {
    alert("Product added to cart!");
  };

  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;
  if (!product) return null;

  return (
    <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-center justify-center">
      <FrameComponent1 />
      <Main1 product={product} />
      <section
        className="flex items-center justify-center py-20 px-10 bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/video1@3x.png')" }}
      >
        <Image
          className="h-16 w-16"
          width={64}
          height={64}
          alt="Play Button"
          src="/mdiplay1.svg"
        />
      </section>
      <div className="flex flex-wrap justify-center py-10 px-5 gap-5">
        {product?.product?.product_images?.slice(1, 4).map((img, index) => (
          <IdeologyBullets
            key={index}
            ideologyBulletsMinWidth="160px"
            emptyBullets={img}
          />
        ))}
      </div>
      <section className="w-[1400px] flex flex-row items-center justify-center pt-0 px-10 pb-[60px] box-border max-w-full text-center text-21xl text-black font-h4-32 mq825:pb-[39px] mq825:box-border">
        <div className="flex-1 flex flex-col items-center justify-center gap-10 max-w-full mq825:gap-5">
          <div className="w-[1279.5px] flex flex-row items-center justify-center py-0 pl-[463px] pr-[464px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border mq825:pl-[115px] mq825:pr-[116px] mq825:box-border mq1410:pl-[231px] mq1410:pr-[232px] mq1410:box-border">
            <h1 className="m-0 flex-1 relative text-inherit leading-[120%] font-medium font-[inherit] mq450:text-5xl mq450:leading-[29px] mq825:text-13xl mq825:leading-[38px]">
              Related Products
            </h1>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center gap-4 max-w-full">
            <button
              ref={prevButtonRef}
              className="p-2 rounded-full bg-gray-200 shadow-lg hover:bg-gray-300 focus:outline-none flex items-center justify-center"
            >
              <FaAngleLeft size={20} />
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
              {product?.relatedProducts?.map((relatedProduct, index) => (
                <SwiperSlide key={index}>
                  <ProductCards
                    key={index}
                    product_id={relatedProduct._id}
                    imgBackgroundImage={relatedProduct.product_images[0]}
                    colorOptionJustifyContent="space-between"
                    next="/pending_I807:4280;491:5147"
                    next1="/pending_I807:4280;491:5150"
                    priceContainerJustifyContent="space-between"
                    iconamoonheartLight="/iconamoonheartlight1.svg"
                    sVG="/svg-11.svg"
                    productItem={relatedProduct}
                    name={relatedProduct.product_name_short}
                    brand_name={relatedProduct.brand.name}
                    price={relatedProduct.retail_price}
                    slug={relatedProduct.slug}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <button
              ref={nextButtonRef}
              className="p-2 rounded-full bg-gray-200 shadow-lg hover:bg-gray-300 focus:outline-none flex items-center justify-center"
            >
              <FaAngleRight size={20} />
            </button>
          </div>
        </div>
      </section>
      <Insta
        instaImages="/8@2x.png"
        instaImages1="/7@2x.png"
        instaImages2="/6@2x.png"
        instaImages3="/5@2x.png"
      />
      <Footer
        maskGroup="/mask-group@2x.png"
        iconYoutube="/icon--youtube-1.svg"
      />
    </div>
  );
};

export default SunglassesProductDetails;
