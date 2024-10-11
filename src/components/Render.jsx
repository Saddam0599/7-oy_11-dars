import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router";
import PropTypes from 'prop-types';

function Render({ data = [] }) {
  const navigate = useNavigate();

  const settings = {
    infinite: true,
    slidesToShow: 4, 
    slidesToScroll: 2, 
    dots: true,
    arrows: true, 
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mx-[90px]">
      <h3 className="text-[20px] mb-5">На неделе</h3>

      <Slider {...settings}>
        {data.map((movie) => (
          <div
            onClick={() => {
              navigate(`/${movie.id}`);
            }}
            key={movie.id}
            className="flex flex-col bg-[#0F0F0F] rounded-lg p-3 cursor-pointer"
          >
            <div className="w-[265px] h-[400px] bg-[#1D1D1D] rounded-[12px] overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={movie.poster || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlxRynrXHlKxcbqmoevphl53BfdeCHFKV7Yg&s"} 
                alt={movie.title}
              />
            </div>
            <h4 className="font-medium w-[188px] mt-2">{movie.title}</h4>
            <p className="text-[#4D4D4D] text-[14px]">
              Комедия, Фэнтези
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

Render.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired, 
      title: PropTypes.string.isRequired, 
      poster: PropTypes.string.isRequired, 
    })
  ).isRequired,
};

export default React.memo(Render);
