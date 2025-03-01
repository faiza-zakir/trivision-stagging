import { memo, useCallback } from "react";
import Image from "next/image";
import PropTypes from "prop-types";

const AccordionItem = memo(({ className = "" }) => {
  const onAccordionHeaderClick = useCallback((event) => {
    const element = event.target;

    const accItem = element.closest("[data-acc-item]") || element;
    const accContent = accItem.querySelector("[data-acc-content]");
    const isOpen = accItem.hasAttribute("data-acc-open");
    const nextOuterSibling =
      accItem?.nextElementSibling || accItem?.parentElement?.nextElementSibling;
    const prevOuterSibling =
      accItem?.previousElementSibling ||
      accItem?.parentElement?.previousElementSibling;
    const siblingContainerAccItem = accItem?.hasAttribute("data-acc-original")
      ? accItem?.nextElementSibling ||
        nextOuterSibling?.querySelector("[data-acc-item]") ||
        nextOuterSibling
      : accItem?.previousElementSibling ||
        prevOuterSibling?.querySelector("[data-acc-item]") ||
        prevOuterSibling;
    const siblingAccItem =
      siblingContainerAccItem?.querySelector("[data-acc-item]") ||
      siblingContainerAccItem;

    if (!siblingAccItem) return;
    const originalDisplay = "flex";
    const siblingDisplay = "flex";

    const openClasses = ["grid-rows-[1fr]"];
    const closeClasses = ["pt-0", "pb-0", "mb-0", "mt-0", "grid-rows-[0fr]"];

    if (isOpen) {
      accContent?.classList.remove(...openClasses);
      accContent?.classList.add(...closeClasses);

      setTimeout(() => {
        if (accItem) {
          accItem.style.display = "none";
          siblingAccItem.style.display = siblingDisplay;
        }
      }, 100);
    } else {
      if (accItem) {
        accItem.style.display = "none";
        siblingAccItem.style.display = originalDisplay;
      }
      const siblingAccContent =
        siblingAccItem?.querySelector("[data-acc-content]");
      setTimeout(() => {
        siblingAccContent?.classList.remove(...closeClasses);
        siblingAccContent?.classList.add(...openClasses);
      }, 1);
    }
  }, []);

  return (
    <div
      className={`w-full max-w-[612px] h-auto border-gray-800 border-b-[1px] border-solid box-border flex flex-col items-start justify-start [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] text-left text-xl text-black font-h4-32 ${className}`}
      data-acc-item
      data-acc-open
      data-acc-original
      data-acc-default-open
    >
      <div
        className="w-full max-w-[612px] h-16 overflow-hidden shrink-0 flex flex-row items-center justify-start py-4 px-0 box-border gap-6 cursor-pointer"
        data-acc-header
        onClick={onAccordionHeaderClick}
      >
        <h3 className="m-0 h-7 flex-1 relative text-inherit leading-[140%] font-medium font-[inherit] inline-block mq480:text-base mq480:leading-[22px]">
          Question text goes here
        </h3>
        <Image
          className="h-8 w-8 relative overflow-hidden shrink-0"
          loading="lazy"
          width={32}
          height={32}
          alt=""
          src="/mynauiplus.svg"
        />
      </div>
      <div
        className="w-full max-w-[612px] grid grid-rows-[1fr] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] text-base accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr]"
        data-acc-content
      >
        <div className="w-full max-w-[612px] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
          <div className="w-full max-w-[612px] h-auto flex flex-row items-start justify-start pt-0 px-0 pb-6 box-border">
            <div className="h-auto flex-1 relative leading-[150%] font-medium inline-block mq480:text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

AccordionItem.propTypes = {
  className: PropTypes.string,
};

export default AccordionItem;
