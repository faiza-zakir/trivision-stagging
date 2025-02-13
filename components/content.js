import { memo } from "react";
import ContentItems from "./content-items";
import PropTypes from "prop-types";

const Content = memo(({ className = "" }) => {
  return (
    <div
      className={`h-[2080px] flex-1 relative max-w-full text-left text-xl text-black font-h4-32 ${className}`}
    >
      <ContentItems emptyContent="/5-3@2x.png" />
      <ContentItems
        contentItemsLeft="402px"
        contentItemsTop="60px"
        emptyContent="/5-4@2x.png"
      />
      <ContentItems
        contentItemsLeft="724px"
        contentItemsTop="60px"
        emptyContent="/5-3@2x.png"
      />
      <ContentItems
        contentItemsLeft="1046px"
        contentItemsTop="60px"
        emptyContent="/5-4@2x.png"
      />
      <ContentItems
        contentItemsLeft="80px"
        contentItemsTop="540px"
        emptyContent="/5-3@2x.png"
      />
      <ContentItems
        contentItemsLeft="402px"
        contentItemsTop="540px"
        emptyContent="/5-4@2x.png"
      />
      <ContentItems
        contentItemsLeft="724px"
        contentItemsTop="540px"
        emptyContent="/5-3@2x.png"
      />
      <ContentItems
        contentItemsLeft="1046px"
        contentItemsTop="540px"
        emptyContent="/5-4@2x.png"
      />
      <ContentItems
        contentItemsLeft="80px"
        contentItemsTop="1020px"
        emptyContent="/5-3@2x.png"
      />
      <ContentItems
        contentItemsLeft="402px"
        contentItemsTop="1020px"
        emptyContent="/5-4@2x.png"
      />
      <ContentItems
        contentItemsLeft="724px"
        contentItemsTop="1020px"
        emptyContent="/5-3@2x.png"
      />
      <ContentItems
        contentItemsLeft="1046px"
        contentItemsTop="1020px"
        emptyContent="/5-4@2x.png"
      />
      <ContentItems
        contentItemsLeft="80px"
        contentItemsTop="1500px"
        emptyContent="/5-3@2x.png"
      />
      <ContentItems
        contentItemsLeft="402px"
        contentItemsTop="1500px"
        emptyContent="/5-4@2x.png"
      />
      <ContentItems
        contentItemsLeft="724px"
        contentItemsTop="1500px"
        emptyContent="/5-3@2x.png"
      />
      <ContentItems
        contentItemsLeft="1046px"
        contentItemsTop="1500px"
        emptyContent="/5-4@2x.png"
      />
      <div className="absolute top-[1980px] left-[628.5px] bg-black w-[183px] overflow-hidden flex flex-row items-center justify-center py-2 px-[39px] box-border whitespace-nowrap text-center text-base text-background-color-primary">
        <div className="flex-1 relative leading-[150%] font-medium">
          LOAD MORE
        </div>
      </div>
    </div>
  );
});

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
