import { memo } from "react";
import Image from "next/image";
import PreviewElements from "./preview-elements";
import PropTypes from "prop-types";

const FrameComponent6 = memo(({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-10 pb-[86px] box-border max-w-full text-center text-21xl text-black font-h4-32 mq750:pb-14 mq750:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-10 max-w-full mq750:gap-5">
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[539px] pr-[538px] mq480:pl-5 mq480:pr-5 mq480:box-border mq750:pl-[134px] mq750:pr-[134px] mq750:box-border mq1250:pl-[269px] mq1250:pr-[269px] mq1250:box-border">
          <h1 className="m-0 flex-1 relative text-inherit leading-[120%] font-medium font-[inherit] mq480:text-5xl mq480:leading-[29px] mq750:text-13xl mq750:leading-[38px]">
            Related Blogs
          </h1>
        </div>
        <div className="self-stretch flex flex-row items-center justify-center flex-wrap content-center gap-4 max-w-full text-left text-xl">
          <Image
            className="h-6 w-6 relative overflow-hidden shrink-0 object-contain"
            loading="lazy"
            width={24}
            height={24}
            alt=""
            src="/next1@2x.png"
          />
          <div className="flex-1 flex flex-row items-center justify-start gap-2 min-w-[832px] max-w-full mq480:grid-cols-[minmax(235px,_1fr)] mq1050:justify-center mq1050:grid-cols-[repeat(2,_minmax(235px,_408px))] mq1050:min-w-full mq1250:flex-wrap">
            <PreviewElements emptyPreview="/5-3@2x.png" />
            <PreviewElements emptyPreview="/5-4@2x.png" />
            <PreviewElements emptyPreview="/5-3@2x.png" />
            <PreviewElements emptyPreview="/5-4@2x.png" />
          </div>
          <Image
            className="h-6 w-6 relative overflow-hidden shrink-0 object-contain"
            width={24}
            height={24}
            alt=""
            src="/next-11@2x.png"
          />
        </div>
      </div>
    </section>
  );
});

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
