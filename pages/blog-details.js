import Image from "next/image";
import BlogPost from "../components/blog-post";
import FrameComponent5 from "../components/frame-component5";
import FrameComponent6 from "../components/frame-component6";
import FrameComponent7 from "../components/frame-component7";
import ImagePlaceholders from "../components/image-placeholders";
import Footer from "../components/footer";

const BlogDetails = () => {
  return (
    <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-start justify-start gap-[34px] leading-[normal] tracking-[normal] mq750:gap-[17px]">
      <header className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[26px] box-border max-w-full text-center text-xs text-background-color-primary font-h4-32">
        <div className="self-stretch bg-black overflow-hidden flex flex-row items-start justify-between py-[13px] px-10 gap-5">
          <Image
            className="h-6 w-6 relative overflow-hidden shrink-0 object-contain"
            loading="lazy"
            width={24}
            height={24}
            alt=""
            src="/iconamoonarrowup2@2x.png"
          />
          <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0 mq1250:w-[-1px]">
            <div className="self-stretch relative leading-[150%] font-medium mq1250:hidden">
              Sale: 20% Off - Limited Time Only
            </div>
          </div>
          <Image
            className="h-6 w-6 relative overflow-hidden shrink-0 object-contain"
            width={24}
            height={24}
            alt=""
            src="/iconamoonarrowup2-1@2x.png"
          />
        </div>
        <div className="self-stretch flex-1 bg-whitesmoke-100 border-gray-800 border-b-[1px] border-solid box-border overflow-hidden flex flex-row items-start justify-start pt-[18px] px-20 pb-4 max-w-full z-[1] text-sm text-black mq750:pl-10 mq750:pr-10 mq750:box-border">
          <div className="flex-1 flex flex-row items-start justify-start gap-[70.7px] max-w-full mq480:gap-[18px] mq750:gap-[35px]">
            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
              <Image
                className="self-stretch h-9 relative max-w-full overflow-hidden shrink-0 object-cover"
                loading="lazy"
                width={186}
                height={36}
                alt=""
                src="/logo@2x.png"
              />
            </div>
            <div className="flex flex-col items-start justify-start pt-[5.5px] px-0 pb-0 box-border max-w-full mq480:w-0">
              <div className="self-stretch flex flex-row items-start justify-start gap-6 max-w-full mq480:hidden">
                <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                  <div className="self-stretch relative leading-[150%] uppercase font-medium inline-block min-w-[80px]">
                    FEATURED
                  </div>
                </div>
                <div className="flex-1 flex flex-row items-start justify-start gap-3 max-w-full mq480:hidden">
                  <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                    <div className="self-stretch relative leading-[150%] uppercase font-medium">
                      Brands
                    </div>
                  </div>
                  <div className="flex-[0.8899] flex flex-row items-start justify-start py-1.5 pl-3 pr-[11px]">
                    <div className="flex-1 relative leading-[150%] uppercase font-medium">
                      Sunglasses
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-1.5 pb-0 pl-0 pr-[11px]">
                    <div className="self-stretch relative leading-[150%] uppercase font-medium inline-block min-w-[94px]">
                      Eyeglasses
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start pt-1.5 pb-0 pl-0 pr-[11px]">
                    <div className="self-stretch relative leading-[150%] uppercase font-medium inline-block min-w-[112px]">
                      Contact Lens
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                    <div className="self-stretch relative leading-[150%] uppercase font-medium inline-block min-w-[103px]">
                      ACCESSORIES
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0 text-red">
                  <div className="self-stretch relative leading-[150%] uppercase font-medium inline-block min-w-[90px]">
                    BEST VALUE
                  </div>
                </div>
              </div>
            </div>
            <div className="w-44 flex flex-row items-start justify-start text-left text-smi font-inter">
              <Image
                className="h-11 w-11 relative"
                loading="lazy"
                width={44}
                height={44}
                alt=""
                src="/search2.svg"
              />
              <Image
                className="h-11 w-11 relative"
                loading="lazy"
                width={44}
                height={44}
                alt=""
                src="/account1.svg"
              />
              <Image
                className="h-11 w-11 relative"
                loading="lazy"
                width={44}
                height={44}
                alt=""
                src="/wish.svg"
              />
              <div className="h-11 flex-1 relative z-[1]">
                <Image
                  className="absolute top-[calc(50%_-_11px)] left-[calc(50%_-_11px)] w-[22px] h-[22px]"
                  width={22}
                  height={22}
                  alt=""
                  src="/svg2.svg"
                />
                <a className="[text-decoration:none] absolute top-[0px] left-[28.9px] leading-[13px] text-[inherit] flex items-center w-[9px] h-[13px] min-w-[9px] z-[1]">
                  0
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <BlogPost />
      <FrameComponent5 />
      <FrameComponent6 />
      <FrameComponent7 />
      <section className="self-stretch flex flex-row items-start justify-start py-0 px-20 box-border max-w-full mq750:pl-10 mq750:pr-10 mq750:box-border">
        <div className="flex-1 flex flex-row items-start justify-start max-w-full [row-gap:20px] mq1250:flex-wrap">
          <ImagePlaceholders
            imagePlaceholdersFlex="1"
            imagePlaceholdersMinWidth="240px"
            perfumeImageContainersAlignSelf="stretch"
            img="/img1@2x.png"
            perfumes="100% Authentic Products"
          />
          <ImagePlaceholders
            imagePlaceholdersFlex="0.6602"
            imagePlaceholdersMinWidth="240px"
            perfumeImageContainersAlignSelf="stretch"
            img="/img-1@2x.png"
            perfumes="Secure Payment"
          />
          <ImagePlaceholders
            imagePlaceholdersFlex="0.5625"
            imagePlaceholdersMinWidth="240px"
            perfumeImageContainersAlignSelf="stretch"
            img="/img-2@2x.png"
            perfumes="Free Shipping"
          />
          <ImagePlaceholders
            imagePlaceholdersFlex="0.6133"
            imagePlaceholdersMinWidth="240px"
            perfumeImageContainersAlignSelf="stretch"
            img="/img-3@2x.png"
            perfumes="1 Year Warranty"
          />
        </div>
      </section>
      <Footer
        maskGroup="/mask-group@2x.png"
        formMargin="0"
        iconYoutube="/icon--youtube1.svg"
        itemImg="/item--img2.svg"
        itemImg1="/item--img-12.svg"
        itemImg2="/item--img-22.svg"
      />
    </div>
  );
};

export default BlogDetails;
