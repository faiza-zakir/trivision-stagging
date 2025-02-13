// import Image from "next/image";
// import FrameComponent1 from "../../components/frame-component1";
// import FiltersAndProducts from "../../components/contactlenses/filter&product";
// import FrameComponent4 from "../../components/frame-component4";
// import Footer from "../../components/footer";

// export const getStaticPaths = async () => {
//   try {
//     const res = await fetch(
//       "https://apitrivsion.prismcloudhosting.com/api/brands/all"
//     );
//     const data = await res.json();
//     //

//     const paths = data
//       .filter((item) => item.slug)
//       .map((item) => ({
//         params: { slug: item.slug },
//       }));

//     //

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
//     //

//     const res = await fetch(
//       `https://apitrivsion.prismcloudhosting.com/api/contactlens/brand/${params.slug}`
//     );
//     const data = await res.json();
//     //

//     if (!data || data.length === 0) {
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

// // Main component to render the product listing
// const ProductListing = ({ products }) => {
//   // console.log(products, "--product");
//   return (
//     <>
//       <FrameComponent1 />
//       <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-center justify-center px-0 pb-0 box-border gap-[34px] leading-[normal] tracking-[normal] text-center text-base text-background-color-primary font-h4-32 mq750:gap-[17px]">
//         <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[26px] box-border max-w-full">
//           <div className="flex-1 overflow-hidden flex flex-col items-end justify-end pt-[340px] px-[284px] pb-[60px] box-border gap-6 bg-[url('/banner1@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq750:pt-[221px] mq750:px-[142px] mq750:pb-[39px] mq750:box-border mq480:pl-5 mq480:pr-5 mq480:box-border">
//             <div className="self-stretch flex flex-row items-start justify-center py-0 pl-px pr-0">
//               <Image
//                 className="h-12 w-[92.5px] relative overflow-hidden shrink-0"
//                 loading="lazy"
//                 width={93}
//                 height={48}
//                 alt="Brand Logo"
//                 src="/rayban-logosvg.svg"
//               />
//             </div>
//           </div>
//         </div>
//         <section className="w-[1440px] flex flex-col items-center justify-center pt-0 px-20 pb-[26px] box-border max-w-full mq750:pl-10 mq750:pr-10 mq750:box-border">
//           <div
//             className="self-stretch flex flex-col items-center justify-center text-left py-0 pl-px pr-0"
//             style={{ color: "black" }}
//           >
//             <h1>{products[0]?.brand?.title || "Special Title"}</h1>
//           </div>
//           <div
//             className="self-stretch flex flex-col items-center justify-center text-left py-0 pl-px pr-0"
//             style={{ color: "black" }}
//           >
//             <p>{products[0]?.brand?.content || "Special Title"}</p>
//           </div>
//         </section>
//         <section className="w-[1440px] flex flex-row items-center justify-center pt-0 px-20 pb-[26px] box-border max-w-full mq750:pl-10 mq750:pr-10 mq750:box-border">
//           <FiltersAndProducts product={products} />
//         </section>
//         <FrameComponent4 product={products} />
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

import { useState, useEffect } from "react";
import Image from "next/image";
import FrameComponent1 from "../../components/frame-component1";
import FiltersAndProducts from "../../components/contactlenses/filter&product";
import FrameComponent4 from "../../components/frame-component4";
import Footer from "../../components/footer";
import Loader from "../../components/Loader/Loader";

export const getServerSideProps = async ({ params }) => {
  try {
    const res = await fetch(
      `https://apitrivsion.prismcloudhosting.com/api/contactlens/brand/${params.slug}`
    );
    const data = await res.json();

    if (!data || data.length === 0) {
      return { notFound: true };
    }

    return {
      props: {
        products: data,
      },
    };
  } catch (error) {
    console.error("Error fetching data in getServerSideProps:", error);
    return { notFound: true };
  }
};

const ProductListing = ({ products }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (products && products.length > 0) {
      setLoading(false);
    }
  }, [products]);

  if (loading) return <Loader />;
  if (!products) return <p>Product not found</p>;

  return (
    <>
      <FrameComponent1 />
      <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-center justify-center px-0 pb-0 box-border gap-[34px] leading-[normal] tracking-[normal] text-center text-base text-background-color-primary font-h4-32">
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[26px] box-border max-w-full">
          <div className="flex-1 overflow-hidden flex flex-col items-end justify-end pt-[340px] px-[284px] pb-[60px] box-border gap-6 bg-[url('/banner1@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq750:pt-[221px] mq750:px-[142px] mq750:pb-[39px] mq750:box-border mq480:pl-5 mq480:pr-5 mq480:box-border">
            <div className="self-stretch flex flex-row items-start justify-center py-0 pl-px pr-0">
              <Image
                className="h-12 w-[92.5px] relative overflow-hidden shrink-0"
                loading="lazy"
                width={93}
                height={48}
                alt="Brand Logo"
                src="/rayban-logosvg.svg"
              />
            </div>
          </div>
        </div>

        <section className="w-[1440px] flex flex-col items-center justify-center pt-0 px-20 mq480:px-3 pb-[26px] box-border max-w-full">
          <div
            className="self-stretch flex flex-col items-center justify-center text-left py-0 pl-px pr-0"
            style={{ color: "black" }}
          >
            <h1 className="mq480:text-base mq480:text-center">
              {products[0]?.brand?.title || "Special Title"}
            </h1>
          </div>
          <div
            className="self-stretch flex flex-col items-center justify-center text-left py-0 pl-px pr-0"
            style={{ color: "black" }}
          >
            <p className="mq480:text-base mq480:text-center">
              {products[0]?.brand?.content || "Special Title"}
            </p>
          </div>
        </section>
        <section className="w-[1440px] flex flex-row items-center justify-center pt-0 px-20 mq480:px-3 pb-[26px] box-border max-w-full">
          <FiltersAndProducts product={products} />
        </section>
        <FrameComponent4 product={products} />
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
