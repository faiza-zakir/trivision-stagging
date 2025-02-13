// import Image from "next/image";
// import FrameComponent1 from "../../components/frame-component1";
// import FiltersAndProducts from "../../components/sunglasses/filter&product";
// import FrameComponent4 from "../../components/frame-component4";
// import Footer from "../../components/footer";

// export const getStaticPaths = async () => {
//   try {
//     const res = await fetch(
//       "https://apitrivsion.prismcloudhosting.com/api/category/all"
//     );
//     const data = await res.json();

//     if (!data || !Array.isArray(data)) {
//       return { paths: [], fallback: "blocking" };
//     }

//     const paths = data
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
//       `https://apitrivsion.prismcloudhosting.com/api/products/category/${params.slug}`
//     );
//     if (!res.ok) {
//       console.error("Failed to fetch data from the API");
//       return { notFound: true };
//     }
//     const data = await res.json();
//     if (!data.products || data.products.length === 0) {
//       // console.warn("No products found for brand slug:", categorySlug);
//       return { notFound: true };
//     }
//     return {
//       props: {
//         products: data.products, // Ensure it matches the API response structure
//       },
//       revalidate: 60,
//     };
//   } catch (error) {
//     console.error("Error fetching data in getStaticProps:", error);
//     return { notFound: true };
//   }
// };

// const ProductListing = ({ products }) => {
//   //

//   return (
//     <>
//       <FrameComponent1 />
//       <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-center justify-center px-0 pb-0 box-border gap-[34px] leading-[normal] tracking-[normal] text-center text-base text-background-color-primary font-h4-32 mq750:gap-[17px]">
//         <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[26px] box-border max-w-full">
//           <div className="flex-1 overflow-hidden flex flex-col items-end justify-end pt-[340px] px-[284px] pb-[60px] box-border gap-6 bg-[url('/banner1@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq750:pt-[221px] mq750:px-[142px] mq750:pb-[39px] mq750:box-border mq480:pl-5 mq480:pr-5 mq480:box-border"></div>
//         </div>
//         <section className="w-[1440px] flex flex-row items-start justify-start pt-0 px-20 pb-[26px] box-border max-w-full mq750:pl-10 mq750:pr-10 mq750:box-border">
//           <FiltersAndProducts product={products} />
//         </section>
//         <Footer
//           maskGroup="/mask-group@2x.png"
//           formMargin="0"
//           iconYoutube="/icon--youtube21.svg"
//           itemImg="/item--img3.svg"
//           itemImg1="/item--img-13.svg"
//           itemImg2="/item--img-14.svg"
//         />
//       </div>
//     </>
//   );
// };

// export default ProductListing;

import FrameComponent1 from "../../components/frame-component1";
import FiltersAndProducts from "../../components/sunglasses/filter&product";
import Footer from "../../components/footer";

export const getServerSideProps = async ({ params }) => {
  try {
    const res = await fetch(
      `https://apitrivsion.prismcloudhosting.com/api/products/category/${params.slug}`
    );

    if (!res.ok) {
      console.error("Failed to fetch data from the API");
      return { notFound: true };
    }

    const data = await res.json();

    if (!data.products || data.products.length === 0) {
      return { notFound: true };
    }

    return {
      props: {
        products: data.products,
      },
    };
  } catch (error) {
    console.error("Error fetching data in getServerSideProps:", error);
    return { notFound: true };
  }
};

const ProductListing = ({ products }) => {
  return (
    <>
      <FrameComponent1 />
      <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-center justify-center px-0 pb-0 box-border gap-[34px] text-center text-base text-background-color-primary font-h4-32 mq750:gap-[17px]">
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[26px] box-border max-w-full">
          <div className="flex-1 overflow-hidden flex flex-col items-end justify-end pt-[340px] px-[284px] pb-[60px] gap-6 bg-[url('/banner1@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq750:pt-[221px] mq750:px-[142px] mq750:pb-[39px] mq480:pl-5 mq480:pr-5"></div>
        </div>
        <section className="w-[1440px] flex flex-row items-start justify-start pt-0 px-20 pb-[26px] box-border max-w-full mq750:pl-10 mq750:pr-10">
          <FiltersAndProducts product={products} />
        </section>
        <Footer
          maskGroup="/mask-group@2x.png"
          formMargin="0"
          iconYoutube="/icon--youtube21.svg"
          itemImg="/item--img3.svg"
          itemImg1="/item--img-13.svg"
          itemImg2="/item--img-14.svg"
        />
      </div>
    </>
  );
};

export default ProductListing;
