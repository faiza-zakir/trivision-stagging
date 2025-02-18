import { useState, useEffect } from "react";
import FrameComponent1 from "../../components/frame-component1";
import FiltersAndProducts from "../../components/eyeglasses/filter&product";
import FrameComponent4 from "../../components/frame-component4";
import Loader from "../../components/Loader/Loader";
import Footer from "../../components/footer";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const { slug } = router.query;
  const pathname = usePathname();

  useEffect(() => {
    // Ensure slug is available before making the API call
    if (!slug) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(
          `http://localhost:5055/api/products/products/new-arrivals?category=${slug}&page=1&limit=10`
        );

        if (!res.ok) {
          throw new Error(`Failed to fetch data for ${slug}`);
        }

        const data = await res.json();
        // console.log(data.data, "hi");
        if (!data.newArrivals || data.newArrivals.length === 0) {
          throw new Error(`No products found for ${slug}`);
        }

        setProducts(data.newArrivals);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  console.log(products, "hi too ")
  return (
    <>
      <FrameComponent1 />
      <div className="w-full bg-gray-100 flex flex-col items-center">
        <section className="w-full max-w-7xl px-5 pb-[60px] pt-[60px]">
          <FiltersAndProducts products={products} />
        </section>
        <section className="pb-[60px]">
          <FrameComponent4 products={products} />
        </section>
        <Footer maskGroup="/mask-group@2x.png" />
      </div>
    </>
  );
};

export default ProductListing;