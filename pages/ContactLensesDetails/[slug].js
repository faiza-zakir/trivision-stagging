// import { useCallback, useRef, useState } from "react";
// import Image from "next/image";
// import FrameComponent1 from "../../components/frame-component1";
// import FrameComponent13 from "../../components/frame-component13";
// import ProductInfo from "../../components/product-info";
// import IdeologyBullets from "../../components/ideology-bullets";
// import ProductCards from "../../components/product-cards";
// import Insta from "../../components/insta";
// import AccordionItem from "../../components/accordion-item";
// import AccordionItem2 from "../../components/accordion-item2";
// import ImagePlaceholders from "../../components/image-placeholders";
// import Footer from "../../components/footer";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Navigation } from "swiper/modules";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import icons

// export const getStaticPaths = async () => {
//   const fetchAllLenses = async () => {
//     let allLenses = [];
//     let page = 1;
//     const limit = 24; // Assuming the API returns 24 items per page

//     while (true) {
//       try {
//         const res = await fetch(
//           `https://apitrivsion.prismcloudhosting.com/api/contactlens?page=${page}&limit=${limit}`
//         );
//         const data = await res.json();

//         if (
//           !data.lenses ||
//           !Array.isArray(data.lenses) ||
//           data.lenses.length === 0
//         ) {
//           break;
//         }

//         allLenses = allLenses.concat(data.lenses);
//         page++;
//       } catch (error) {
//         console.error("Error fetching lenses:", error);
//         break;
//       }
//     }

//     return allLenses;
//   };

//   try {
//     const lenses = await fetchAllLenses();
//     // console.log(lenses, "contactlenses Data");

//     if (!lenses || !Array.isArray(lenses)) {
//       return { paths: [], fallback: "blocking" };
//     }

//     const paths = lenses
//       .filter((item) => item.slug)
//       .map((item) => ({
//         params: { slug: item.slug },
//       }));

//     // console.log(paths, "paths");

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
//   // console.log(params.slug, "params")
//   try {
//     const res = await fetch(
//       `https://apitrivsion.prismcloudhosting.com/api/contactlens/contact-lenses/${params.slug}`
//     );
//     const data = await res.json();
//     // console.log(data, "in get Static Props")

//     if (!data || !data) {
//       return { notFound: true };
//     }

//     return {
//       props: {
//         products: data.product,
//       },
//       revalidate: 60,
//     };
//   } catch (error) {
//     console.error("Error fetching data in getStaticProps:", error);
//     return { notFound: true };
//   }
// };

// const ClearContactLensDetails = (products) => {
//   const prevButtonRef = useRef(null);
//   const nextButtonRef = useRef(null);

//   // console.log(products.relatedProducts, "snapdragon")

//   return (
//     <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal] text-left text-base text-black font-h4-32">
//       <FrameComponent1 />
//       <FrameComponent13 products={products} />
//       <div className="w-[1280px] border-gray-800 border-t-[1px] border-solid border-gray-800 border-b-[1px] border-solid box-border hidden flex-row items-center justify-between py-3.5 px-0 gap-5 max-w-full z-[2]">
//         <div className="relative leading-[150%] font-medium">
//           More Information
//         </div>
//         <Image
//           className="h-6 w-6 relative overflow-hidden shrink-0 object-contain"
//           width={24}
//           height={24}
//           alt=""
//         />
//       </div>
//       <section className="self-stretch flex flex-col items-center justify-center pt-0 px-10 pb-[60px] box-border relative max-w-full text-center text-21xl text-black font-h4-32 mq750:pb-[39px] mq750:box-border">
//         <ProductInfo products={products} weuiarrowFilled1="/pending_807:4251" />
//       </section>
//       <section className="overflow-hidden flex flex-row items-start justify-start py-[218px] px-[688px] bg-[url('/video@3x.png')] bg-cover bg-no-repeat bg-[top] mq480:pl-5 mq480:pr-5 mq480:box-border mq750:py-[142px] mq750:px-[344px] mq750:box-border">
//         <Image
//           className="h-16 w-16 relative rounded-81xl overflow-hidden shrink-0"
//           loading="lazy"
//           width={64}
//           height={64}
//           alt=""
//           src="/mdiplay.svg"
//         />
//       </section>
//       <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[30px] box-border max-w-full mq750:pb-[30px] mq750:box-border">
//         <div className="flex-1 flex flex-row items-start justify-center flex-wrap content-start py-[60px] px-20 box-border gap-10 max-w-full mq750:gap-5 mq750:py-[20px] mq750:px-10 mq750:box-border">
//           <IdeologyBullets
//             ideologyBulletsMinWidth="160px"
//             emptyBullets="/52@2x.png"
//           />
//           <IdeologyBullets
//             ideologyBulletsMinWidth="160px"
//             emptyBullets="/52@2x.png"
//           />
//           <IdeologyBullets
//             ideologyBulletsMinWidth="160px"
//             emptyBullets="/52@2x.png"
//           />
//         </div>
//       </section>
//       {/* <section className="w-[1400px] flex flex-col items-center justify-center pt-0 px-10 pb-[60px] box-border max-w-full text-center text-21xl text-black font-h4-32 mq825:pb-[39px] mq825:box-border">
//         <h1 className="m-0 relative text-inherit leading-[120%] font-medium font-[inherit] text-3xl mb-10">
//           Related Products
//         </h1>
//         <div className="flex flex-row items-center justify-center gap-4 max-w-full w-full">
//           <button
//             ref={prevButtonRef}
//             className="p-2 rounded-full bg-gray-200 shadow-lg hover:bg-gray-300 focus:outline-none flex items-center justify-center"
//           >
//             <FaArrowLeft size={20} />
//           </button>
//           <Swiper
//             modules={[Navigation]}
//             spaceBetween={20}
//             slidesPerView={1}
//             navigation={{
//               prevEl: prevButtonRef.current,
//               nextEl: nextButtonRef.current,
//             }}
//             onBeforeInit={(swiper) => {
//               swiper.params.navigation.prevEl = prevButtonRef.current;
//               swiper.params.navigation.nextEl = nextButtonRef.current;
//             }}
//             breakpoints={{
//               640: { slidesPerView: 1 },
//               768: { slidesPerView: 2 },
//               1024: { slidesPerView: 3 },
//             }}
//             className="w-full max-w-full"
//           >
//             {products.products.relatedProducts?.map((relatedProduct, index) => (
//               <SwiperSlide key={index}>
//                 <ProductCards
//                   imgBackgroundImage={relatedProduct.product_images[0]}
//                   colorOptionJustifyContent="space-between"
//                   next="/pending_I807:4280;491:5147"
//                   next1="/pending_I807:4280;491:5150"
//                   priceContainerJustifyContent="space-between"
//                   iconamoonheartLight="/iconamoonheartlight1.svg"
//                   sVG="/svg-11.svg"
//                   productItem={relatedProduct}
//                   name={relatedProduct.product_name_short}
//                   brand_name={relatedProduct.brand.name}
//                   price={relatedProduct.retail_price}
//                   slug={relatedProduct.slug}
//                 />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//           <button
//             ref={nextButtonRef}
//             className="p-2 rounded-full bg-gray-200 shadow-lg hover:bg-gray-300 focus:outline-none flex items-center justify-center"
//           >
//             <FaArrowRight size={20} />
//           </button>
//         </div>
//       </section> */}
//       <section className="self-stretch flex flex-col items-center justify-center pt-0 px-0 pb-[74px] box-border max-w-full text-left text-21xl text-black font-h4-32 mq750:pb-[31px] mq750:box-border mq1250:pb-12 mq1250:box-border">
//         <Insta
//           instaImages="/8@2x.png"
//           instaImages1="/7@2x.png"
//           instaImages2="/6@2x.png"
//           instaImages3="/5@2x.png"
//         />
//       </section>
//       <section className="self-stretch flex flex-row items-start justify-start pt-0 px-20 pb-[34px] box-border max-w-full mq750:pl-10 mq750:pr-10 mq750:box-border">
//         <div className="flex-1 flex flex-row items-start justify-start max-w-full [row-gap:20px] mq1250:flex-wrap">
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

// export default ClearContactLensDetails;

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import FrameComponent1 from "../../components/frame-component1";
import FrameComponent13 from "../../components/frame-component13";
import ProductInfo from "../../components/product-info";
import Insta from "../../components/insta";
import Footer from "../../components/footer";

const ClearContactLensDetails = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    const fetchProduct = async () => {
      try {
        const res = await fetch(
          `https://apitrivsion.prismcloudhosting.com/api/contactlens/contact-lenses/${slug}`
        );
        const data = await res.json();
        setProduct(data.product);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-start justify-start text-left text-base text-black font-h4-32">
      <FrameComponent1 />
      <FrameComponent13 products={product} />
      <section className="self-stretch flex flex-col items-center justify-center pt-0 px-10 pb-[60px] box-border text-center text-21xl text-black">
        <ProductInfo products={product} weuiarrowFilled1="/pending_807:4251" />
      </section>
      <section className="self-stretch flex flex-col items-center justify-center pt-0 px-0 pb-[74px]">
        <Insta
          instaImages="/8@2x.png"
          instaImages1="/7@2x.png"
          instaImages2="/6@2x.png"
          instaImages3="/5@2x.png"
        />
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

export default ClearContactLensDetails;
