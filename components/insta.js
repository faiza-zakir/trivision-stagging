import { memo } from "react";
import Image from "next/image";
import PropTypes from "prop-types";

const Insta = memo(
  ({
    className = "",
    instaImages,
    instaImages1,
    instaImages2,
    instaImages3,
  }) => {
    return (
      <div
        className={`flex flex-col items-start justify-start pb-[60px] mq480:pb-[40px] pl-0 box-border gap-10 max-w-full text-left text-21xl text-black font-h4-32 mq750:gap-5 mq480:gap-10 ${className}`}
      >
        <div className="self-stretch flex flex-row items-start justify-start mq480:justify-center flex-wrap content-start gap-4  max-w-full">
          <h1 className="m-0 flex-1 relative text-inherit mq480:text-center leading-[120%] font-medium font-[inherit] inline-block min-w-[286px] max-w-full mq480:text-5xl mq480:leading-[29px] mq750:text-13xl mq750:leading-[38px]">
            Join Us @trivision
          </h1>
          <div className="flex flex-col items-start justify-start  pt-1 px-0 pb-0 text-center text-base text-background-color-primary">
            <div className="self-stretch bg-black overflow-hidden flex flex-row items-start justify-start py-2 pl-6 pr-[23px]">
              <div className="flex-1 relative leading-[150%] font-medium inline-block min-w-[102px]">
                FOLLOW US
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center flex-wrap content-start gap-2 mq480:gap-4 mq480:grid-cols-[minmax(235px,_1fr)] mq1050:justify-center mq1050:grid-cols-[repeat(2,_minmax(235px,_408px))]">
          <Image
            className="h-[290px] flex-1 relative max-w-[314px] overflow-hidden object-cover min-w-[289px] mq480:w-full"
            loading="lazy"
            width={314}
            height={290}
            alt=""
            src={instaImages}
          />
          <Image
            className="h-[290px] flex-1 relative max-w-[314px] overflow-hidden object-cover min-w-[289px] mq480:w-full"
            loading="lazy"
            width={314}
            height={290}
            alt=""
            src={instaImages1}
          />
          <Image
            className="h-[290px] flex-1 relative max-w-[314px] overflow-hidden object-cover min-w-[289px] mq480:w-full"
            loading="lazy"
            width={314}
            height={290}
            alt=""
            src={instaImages2}
          />
          <Image
            className="h-[290px] flex-1 relative max-w-[314px] overflow-hidden object-cover min-w-[289px] mq480:w-full"
            loading="lazy"
            width={314}
            height={290}
            alt=""
            src={instaImages3}
          />
        </div>
      </div>
      // <div
      //   className={`self-stretch overflow-hidden flex flex-col items-center justify-start py-[60px] px-20 box-border gap-10 max-w-full text-left text-21xl text-black font-h4-32 mq825:gap-5 mq825:py-[39px] mq825:px-10 mq825:box-border ${className}`}
      // >
      //   <div className="self-stretch flex flex-row items-center justify-start flex-wrap content-center gap-4 max-w-full">
      //     <h1 className="m-0 flex-1 relative text-inherit leading-[120%] font-medium font-[inherit] inline-block min-w-[286px] max-w-full mq480:text-5xl mq480:leading-[29px] mq825:text-13xl mq825:leading-[38px]">
      //       Join Us @trivision
      //     </h1>
      //     <div className="bg-black overflow-hidden flex flex-row items-center justify-center py-2 px-[23px] text-center text-base text-background-color-primary">
      //       <div className="flex-1 relative leading-[150%] font-medium inline-block min-w-[102px]">
      //         FOLLOW US
      //       </div>
      //     </div>
      //   </div>
      //   <div className="self-stretch flex flex-row items-center justify-center flex-wrap content-center gap-2 lg:justify-center lg:grid-cols-[repeat(2,_minmax(235px,_408px))] mq825:grid-cols-[minmax(235px,_1fr)]">
      //     <Image
      //       className="h-[290px] flex-1 relative max-w-[314px] overflow-hidden object-cover min-w-[289px] mq825:w-full"
      //       loading="lazy"
      //       width={314}
      //       height={290}
      //       alt=""
      //       src={instaImages}
      //     />
      //     <Image
      //       className="h-[290px] flex-1 relative max-w-[314px] overflow-hidden object-cover min-w-[289px] mq825:w-full"
      //       loading="lazy"
      //       width={314}
      //       height={290}
      //       alt=""
      //       src={instaImages1}
      //     />
      //     <Image
      //       className="h-[290px] flex-1 relative max-w-[314px] overflow-hidden object-cover min-w-[289px] mq825:w-full"
      //       loading="lazy"
      //       width={314}
      //       height={290}
      //       alt=""
      //       src={instaImages2}
      //     />
      //     <Image
      //       className="h-[290px] flex-1 relative max-w-[314px] overflow-hidden object-cover min-w-[289px] mq825:w-full"
      //       width={314}
      //       height={290}
      //       alt=""
      //       src={instaImages3}
      //     />
      //   </div>
      // </div>
    );
  }
);

Insta.propTypes = {
  className: PropTypes.string,
  instaImages: PropTypes.string.isRequired,
  instaImages1: PropTypes.string.isRequired,
  instaImages2: PropTypes.string.isRequired,
  instaImages3: PropTypes.string.isRequired,
};

export default Insta;
