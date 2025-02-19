import { memo, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const FrameComponent2 = memo(({ className = "" }) => {
  const [testimonials, setTestimonials] = useState([]);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get("http://localhost:5055/api/testimonials/");
        if (response.data.success) {
          setTestimonials(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[60px] box-border max-w-full text-left text-base text-background-color-primary font-h4-32 mq750:pb-[39px] mq750:box-border ${className}`}
    >
      <div className="flex-1 overflow-hidden flex flex-row items-start justify-start pt-[268px] px-20 mq480:px-5 pb-[60px] box-border bg-[url('/testimonials@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq750:pt-[174px] mq750:px-10 mq750:pb-[39px] mq750:box-border">
        <div className="flex-1 flex flex-col items-center justify-end gap-6 max-w-full">
          <div className="self-stretch relative leading-[150%] font-medium">
            Testimonials
          </div>

          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              prevEl: prevButtonRef.current,
              nextEl: nextButtonRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevButtonRef.current;
              swiper.params.navigation.nextEl = nextButtonRef.current;
            }}
            className="w-full max-w-full"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="self-stretch flex flex-col items-start justify-start gap-4 max-w-full text-13xl">
                  <blockquote className="m-0 relative leading-[130%] font-medium mq480:text-lgi mq480:leading-[25px] mq750:text-7xl mq750:leading-[33px]">
                    “{testimonial.message}”
                  </blockquote>
                  <div className="self-stretch flex flex-row items-center justify-center flex-wrap content-center gap-4 max-w-full text-base">
                    <div className="flex-1 relative leading-[150%] font-medium inline-block min-w-[34px] max-w-full">
                      - {testimonial.name}
                    </div>
                    <div className="flex flex-row items-center justify-start gap-4">
                      <div className="flex flex-row items-center justify-start gap-2">
                        <button
                          ref={prevButtonRef}
                          className="h-6 w-6 flex items-center justify-center text-white bg-transparent cursor-pointer"
                        >
                          <FontAwesomeIcon icon={faArrowLeft} size="lg" />
                        </button>
                        <button
                          ref={nextButtonRef}
                          className="h-6 w-6 flex items-center justify-center text-white bg-transparent cursor-pointer"
                        >
                          <FontAwesomeIcon icon={faArrowRight} size="lg" />
                        </button>
                      </div>
                      <div className="h-[25px] w-px relative border-gray-700 border-r-[1px] border-solid box-border" />
                      <div className="relative leading-[150%] font-medium">
                        View More
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
});

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;