import FrameComponent1 from "../components/frame-component1";
import BlogPost from "../components/blog-post";
import FrameComponent5 from "../components/frame-component5";
import FrameComponent6 from "../components/frame-component6";
import FrameComponent7 from "../components/frame-component7";
import JoinWrapper from "../components/join-wrapper";
import Footer from "../components/footer";

const BlogDetails = () => {
  return (
    <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-center justify-center px-0 pb-0 box-border leading-[normal] tracking-[normal] mq750:gap-[17px]">
      <FrameComponent1 />
      <BlogPost />
      <FrameComponent5 />
      <FrameComponent6 />
      <section className="flex flex-col items-start justify-start pt-0 pb-[60px] mq480:pb-[40px] pl-5 pr-0 box-border gap-[60px] max-w-full text-left text-21xl text-black font-h4-32 mq750:gap-[30px]">
        <JoinWrapper
          joinWrapperPadding="0px 20px 0px 0px"
          joinWrapperFlex="unset"
          joinWrapperAlignSelf="unset"
          emptyPlaceholders="/8@2x.png"
          emptyPlaceholders1="/7@2x.png"
          emptyPlaceholders2="/6@2x.png"
          emptyPlaceholders3="/5@2x.png"
        />
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
