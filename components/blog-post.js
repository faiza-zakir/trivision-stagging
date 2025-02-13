import { memo } from "react";
import Image from "next/image";
import ContentParagraphs from "./content-paragraphs";
import PropTypes from "prop-types";

const BlogPost = memo(({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-20 pb-[77px] box-border max-w-full text-center text-base text-black font-h4-32 mq480:pb-[21px] mq480:box-border mq750:pl-10 mq750:pr-10 mq750:box-border mq1050:pb-8 mq1050:box-border mq1250:pb-[50px] mq1250:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-10 max-w-full mq750:gap-5">
        <div className="self-stretch flex flex-col items-start justify-start gap-4 text-21xl">
          <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-medium font-[inherit] mq480:text-5xl mq480:leading-[29px] mq750:text-13xl mq750:leading-[38px]">
            How To Clean Your Sunglasses
          </h1>
          <div className="self-stretch relative text-base leading-[150%] font-medium">
            November 08, 2024 - By Mary Herald
          </div>
        </div>
        <Image
          className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover"
          loading="lazy"
          width={1280}
          height={400}
          alt=""
          src="/image@2x.png"
        />
        <div className="self-stretch flex flex-col items-start justify-start gap-4 text-left">
          <div className="relative leading-[150%] font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
            Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
            lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
            elementum tellus.
          </div>
          <div className="relative leading-[150%] font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
            Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
            lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
            elementum tellus.
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center flex-wrap content-start gap-10 max-w-full mq750:gap-5 mq750:grid-cols-[minmax(300px,_1fr)] mq1050:justify-center mq1050:grid-cols-[repeat(2,_minmax(300px,_520px))]">
          <ContentParagraphs emptyContent="/51@2x.png" />
          <ContentParagraphs emptyContent="/5-1@2x.png" />
          <ContentParagraphs emptyContent="/5-2@2x.png" />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-4 text-left">
          <div className="relative leading-[150%] font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
            Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
            lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
            elementum tellus.
          </div>
          <div className="relative leading-[150%] font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
            Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
            lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
            elementum tellus.
          </div>
        </div>
        <div className="self-stretch h-[73px] flex flex-col items-start justify-start pt-0 px-0 pb-px box-border gap-6">
          <div className="self-stretch h-px relative border-gray-300 border-t-[1px] border-solid box-border" />
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
            <div className="flex flex-row items-start justify-start gap-3">
              <Image
                className="h-6 w-6 relative overflow-hidden shrink-0"
                loading="lazy"
                width={24}
                height={24}
                alt=""
                src="/icon--facebook1.svg"
              />
              <Image
                className="h-6 w-6 relative overflow-hidden shrink-0"
                loading="lazy"
                width={24}
                height={24}
                alt=""
                src="/icon--instagram1.svg"
              />
              <Image
                className="h-6 w-6 relative overflow-hidden shrink-0"
                loading="lazy"
                width={24}
                height={24}
                alt=""
                src="/icon--x1.svg"
              />
              <Image
                className="h-6 w-6 relative overflow-hidden shrink-0"
                loading="lazy"
                width={24}
                height={24}
                alt=""
                src="/icon--linkedin1.svg"
              />
              <Image
                className="h-6 w-6 relative overflow-hidden shrink-0"
                loading="lazy"
                width={24}
                height={24}
                alt=""
                src="/icon--youtube2.svg"
              />
            </div>
          </div>
          <div className="self-stretch h-px relative border-gray-300 border-t-[1px] border-solid box-border" />
        </div>
      </div>
    </div>
  );
});

BlogPost.propTypes = {
  className: PropTypes.string,
};

export default BlogPost;
