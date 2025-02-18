import { useState, useEffect } from "react";
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
        <div className="w-full bg-[url('/lensBanner.jpg')] bg-cover bg-no-repeat bg-center h-[60vh]" />
        <section className="w-[1440px] flex flex-col items-center justify-center pt-0 px-20 mq480:px-3 pb-[26px] pt-[60px] box-border max-w-full">
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
