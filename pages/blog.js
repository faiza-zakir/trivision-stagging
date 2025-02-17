import FrameComponent from "../components/frame-component";
import Content from "../components/content";
import LowerContent from "../components/lower-content";
import Footer from "../components/footer";

const Blog = () => {
  return (
    <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-start justify-start pt-[50px] px-0 pb-0 box-border leading-[normal] tracking-[normal]">
      <FrameComponent
        logo="/logo@2x.png"
        search="/search2.svg"
        sVG="/svg2.svg"
      />
      <section className="self-stretch overflow-hidden flex flex-col items-start justify-end pt-[340px] px-[284px] pb-[60px] gap-6 bg-[url('/blogbanner.jpg')] bg-cover bg-no-repeat bg-[top] text-center text-21xl text-background-color-primary font-h4-32 mq480:pl-5 mq480:pr-5 mq480:box-border mq750:pt-[221px] mq750:px-[142px] mq750:pb-[39px] mq750:box-border">
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-[388px] mq480:pl-5 mq480:pr-5 mq480:box-border mq1050:pl-[194px] mq1050:pr-[194px] mq1050:box-border">
          <h1 className="m-0 flex-1 relative text-inherit leading-[120%] font-medium font-[inherit] mq480:text-5xl mq480:leading-[29px] mq750:text-13xl mq750:leading-[38px]">
            Blog
          </h1>
        </div>
        <div className="relative text-base leading-[150%] font-medium">
          Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus.
        </div>
      </section>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[60px] box-border max-w-full mq750:pb-5 mq750:box-border mq1050:pb-[25px] mq1050:box-border mq1250:pb-[39px] mq1250:box-border">
        <Content />
      </div>
      <LowerContent />
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

export default Blog;
