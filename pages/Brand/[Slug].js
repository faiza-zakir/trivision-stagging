import Image from "next/image";
import FrameComponent1 from "../../components/frame-component1";
import FiltersAndProducts from "../../components/filters-and-products";
import FrameComponent4 from "../../components/frame-component4";
import Footer from "../../components/footer";

export const getStaticPaths = async () => {
  try {
    const res = await fetch(
      "https://apitrivsion.prismcloudhosting.com/api/brands/all"
    );
    const data = await res.json();

    if (!data || !Array.isArray(data)) {
      return { paths: [], fallback: "blocking" };
    }

    // Fix: Map paths with correct case for Slug parameter
    const paths = data
      .filter((item) => item.slug)
      .map((item) => ({
        params: { Slug: item.slug }, // Changed from slug to Slug
      }));

    return {
      paths,
      fallback: "blocking",
    };
  } catch (error) {
    console.error("Error in getStaticPaths:", error);
    return { paths: [], fallback: "blocking" };
  }
};

export const getStaticProps = async ({ params }) => {
  try {
    // Corrected API request with dynamic slug
    const res = await fetch(
      `https://apitrivsion.prismcloudhosting.com/api/products/brand/${params.Slug}`
    );
    const data = await res.json();

    if (!data.products || data.products.length === 0) {
      // console.warn("No products found for brand slug:", brandSlug);
      return { notFound: true };
    }

    return {
      props: {
        products: data.products, // Ensure it matches the API response structure
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error("Error fetching data in getStaticProps:", error);
    return { notFound: true };
  }
};

// Main component to render the product listing
const ProductListing = ({ products }) => {
  return (
    <>
      <FrameComponent1 />
      <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-center justify-center px-0 pb-0 box-border gap-[34px] leading-[normal] tracking-[normal] text-center text-base text-background-color-primary font-h4-32 mq750:gap-[17px]">
        <div className="w-full bg-[url('/brandBanner.jpg')] bg-cover bg-no-repeat bg-center h-[75vh] mq750:pt-[221px] mq750:px-[142px] mq750:pb-[39px] mq480:px-5" />
        <section className="w-[1440px] flex flex-col items-center justify-center pt-0 px-20 pb-[26px] box-border max-w-full mq750:pl-10 mq750:pr-10 mq750:box-border">
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
        <section className="w-[1440px] flex flex-row items-center justify-center pt-0 px-20 pb-[26px] box-border max-w-full mq750:pl-10 mq750:pr-10 mq750:box-border">
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
