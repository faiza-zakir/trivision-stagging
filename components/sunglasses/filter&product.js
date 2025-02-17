import { memo, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import ProductCards from "../product-cards";
import PropTypes from "prop-types";

const FiltersAndProducts = memo(({ className = "", product = [] }) => {
  const [visibleProducts, setVisibleProducts] = useState(24);
  const router = useRouter();

  const loadMoreProducts = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 24);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigation = (slug) => {
    router.push(`/ProductDetails/${slug}`);
  };

  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[120px] max-w-full text-left text-base text-black font-h4-32 mq750:gap-[60px] mq480:gap-[30px] ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-10 mq750:gap-5">
        {/* <div className="self-stretch flex flex-row items-start justify-between gap-5 mq480:flex-wrap">
          <div className="h-10 border-black border-[1px] border-solid box-border flex flex-row items-center justify-center py-1.5 pl-4 pr-[13px] gap-2">
            <Image
              className="h-6 w-6 relative overflow-hidden shrink-0 object-contain mq480:h-4 mq480:w-4"
              loading="lazy"
              width={24}
              height={24}
              alt=""
              src="/magefilter@2x.png"
            />
            <div className="relative leading-[150%] font-medium mq480:text-sm">
              All Filters
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
            <div className="flex flex-row items-start justify-start gap-2">
              <div className="relative leading-[150%] font-medium mq480:text-sm">
                Sort By
              </div>
              <Image
                className="h-6 w-6 relative overflow-hidden shrink-0 object-contain mq480:h-5 mq480:w-5"
                width={24}
                height={24}
                alt=""
                src="/iconamoonarrowup2light@2x.png"
              />
            </div>
          </div>
        </div> */}
        <div className="self-stretch flex flex-row items-center justify-center flex-wrap content-start gap-x-2 gap-y-6">
          {product.slice(0, visibleProducts).map((productItem) => {
            const firstImageUrl = productItem?.product_images[0] || "";
            return (
              <div
                key={productItem._id}
                onClick={() =>
                  handleNavigation(productItem.slug, productItem.category)
                }
                className="cursor-pointer"
              >
                <ProductCards
                  {...productItem}
                  product_id={productItem._id}
                  name={productItem.product_name_short}
                  price={productItem.retail_price}
                  imgBackgroundImage={firstImageUrl} // ✅ Dynamically passed image URL
                  colorOptionJustifyContent="center"
                  priceContainerJustifyContent="center"
                  iconamoonheartLight="/iconamoonheartlight-2.svg"
                  sVG="/svg-3.svg"
                  slug={productItem.slug}
                  onAddToCart={(e) => e.stopPropagation()} // Stop navigation for Add to Cart
                  onAddToWishlist={(e) => e.stopPropagation()} // Stop navigation for Wishlist
                />
              </div>
            );
          })}
        </div>
        {Array.isArray(product) && visibleProducts < product.length && (
          <div className="self-stretch flex flex-col items-center justify-start py-0 px-5 gap-6 text-center text-background-color-primary">
            <div className="w-[305px] flex flex-row items-start justify-center gap-4">
              <div
                className="flex-1 bg-black overflow-hidden flex flex-row items-center justify-center py-2 px-[23px] cursor-pointer hover:bg-white hover:text-black hover:border-[1px] hover:border-solid transition-all duration-300"
                onClick={loadMoreProducts}
              >
                <div className="flex-1 relative leading-[150%] font-medium">
                  LOAD MORE PRODUCTS
                </div>
              </div>
              <Image
                className="h-10 w-10 relative overflow-hidden shrink-0 cursor-pointer"
                loading="lazy"
                width={40}
                height={40}
                alt=""
                src="/top.svg"
                onClick={scrollToTop}
              />
            </div>
            <div className="flex flex-row items-start justify-center text-xs text-black">
              <div className="flex-1 relative leading-[150%] font-medium">
                Showing {visibleProducts} of {product.length} Products
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

FiltersAndProducts.propTypes = {
  className: PropTypes.string,
  product: PropTypes.array.isRequired, // Ensuring `product` is an array
};

FiltersAndProducts.defaultProps = {
  product: [], // Default to an empty array if no products are provided
};

export default FiltersAndProducts;
