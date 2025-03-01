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
    if (!slug) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(
          `https://apitrivsion.prismcloudhosting.com/api/products/products/best-sellers?category=${slug}&page=1&limit=10`
        );

        if (!res.ok) {
          throw new Error(`Failed to fetch data for ${slug}`);
        }

        const data = await res.json();

        if (!data.bestSellers || data.bestSellers.length === 0) {
          throw new Error(`No products found for ${slug}`);
        }

        setProducts(data.bestSellers);
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
    return <div className="text-red-500">Error: {error}</div>;
  }

  console.log(products[0].category.name, "hi");

  return (
    <>
      <FrameComponent1 />
      <div className="w-full bg-gray-100 flex flex-col items-center">
        <section className="w-full max-w-7xl px-5 pb-[60px] pt-[60px]">
          {products && products.length > 0 ? (
            <FiltersAndProducts product={products} />
          ) : (
            <p className="text-center text-gray-600">No products available</p>
          )}
        </section>
        <section className="pb-[60px]">
          {products && products.length > 0 ? (
            <FrameComponent4 product={products} />
          ) : (
            <p className="text-center text-gray-600">No products found</p>
          )}
        </section>
        <Footer maskGroup="/mask-group@2x.png" />
      </div>
    </>
  );
};

export default ProductListing;
