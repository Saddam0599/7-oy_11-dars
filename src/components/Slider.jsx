import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import panda from "../assets/panda.png";
import king_kong from "../assets/king-kong.png";
import cinema_market from "../assets/cinema-market.png";
import { useState } from "react";

function Slayder() {
  const [swiperInstance, setSwiperInstance] = useState(null);

    const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
  };


  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSwiper={(swiper) => {
          setSwiperInstance(swiper);
        }}
      >
        <SwiperSlide>
          <img src={panda} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={king_kong} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="max-h-[640px] h-full max-w-[1360px] w-full"
            src={cinema_market}
            alt=""
          />
        </SwiperSlide>
      </Swiper>

      <div className="flex justify-center gap-5 my-[10px] relative">
        <button
          className="text-[#C61F1F] w-[48px] h-[48px] rounded-[50%] bg-[#1D1D1D] absolute top-[-50vh] left-[-7vh]"
          onClick={() => swiperInstance?.slidePrev()}
        >
          {" "}
          {" < "}{" "}
        </button>

        <button
          className="text-[#C61F1F] w-[48px] h-[48px] rounded-[50%] bg-[#1D1D1D] absolute top-[-50vh] right-[-7vh]"
          onClick={() => swiperInstance?.slideNext()}
        >
          {" "}
          {" > "}{" "}
        </button>
      </div>
            <div className="w-[450px] h-[64px] mx-auto mb-[24px] rounded-[12px]">
        <Slider {...settings} className="multiple-items w-full mr-[-100px] h-[64px] text-red-600">
          <div>
            <img
              src={panda}
              alt=""
              className="w-[108px] h-[64px] rounded-[12px]"
            />
          </div>
          <div>
            <img
              src={king_kong}
              alt=""
              className="w-[108px] h-[64px] rounded-[12px]"
            />
          </div>
          <div>
            <img
              src={cinema_market}
              alt=""
              className="w-[108px] h-[64px] rounded-[12px]"
            />
          </div>
          <div>
            <img
              src={panda}
              alt=""
              className="w-[108px] h-[64px] rounded-[12px]"
            />
          </div>
          <div>
            <img
              src={king_kong}
              alt=""
              className="w-[108px] h-[64px] rounded-[12px]"
            />
          </div>
          <div>
            <img
              src={cinema_market}
              alt=""
              className="w-[108px] h-[64px] rounded-[12px]"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Slayder;
