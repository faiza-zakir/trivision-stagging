import { memo } from "react";
import Image from "next/image";
import PropTypes from "prop-types";

const FrameComponent2 = memo(({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[60px] box-border max-w-full text-left text-base text-background-color-primary font-h4-32 mq750:pb-[39px] mq750:box-border ${className}`}
    >
      <div className="flex-1 overflow-hidden flex flex-row items-start justify-start pt-[268px] px-20 mq480:px-5 pb-[60px] box-border bg-[url('/testimonials@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq750:pt-[174px] mq750:px-10 mq750:pb-[39px] mq750:box-border">
        <div className="flex-1 flex flex-col items-center justify-end gap-6 max-w-full">
          <div className="self-stretch relative leading-[150%] font-medium">
            Testimonials
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-4 max-w-full text-13xl">
            <blockquote className="m-0 relative leading-[130%] font-medium mq480:text-lgi mq480:leading-[25px] mq750:text-7xl mq750:leading-[33px]">
              “Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio.”
            </blockquote>
            <div className="self-stretch flex flex-row items-center justify-center flex-wrap content-center gap-4 max-w-full text-base">
              <div className="flex-1 relative leading-[150%] font-medium inline-block min-w-[34px] max-w-full">
                -Shivi
              </div>
              <div className="flex flex-row items-center justify-start gap-4">
                <div className="flex flex-row items-center justify-start gap-2">
                  <Image
                    className="h-6 w-6 relative overflow-hidden shrink-0 object-contain"
                    width={24}
                    height={24}
                    alt=""
                    src="/iconamoonarrowup2-2@2x.png"
                  />
                  <Image
                    className="h-6 w-6 relative overflow-hidden shrink-0 object-contain"
                    width={24}
                    height={24}
                    alt=""
                    src="/iconamoonarrowup2-1@2x.png"
                  />
                </div>
                <div className="h-[25px] w-px relative border-gray-700 border-r-[1px] border-solid box-border" />
                <div className="relative leading-[150%] font-medium">
                  View More
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
