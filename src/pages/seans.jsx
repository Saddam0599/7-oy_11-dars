import React, { useCallback } from "react";
import MainLayout from "../layouts/Main_layout";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useFetchData from "../hooks/Fetch";
import kung from "../assets/kung.png";
import Carousel from "./Carousel";
import All from "../assets/All.svg";
import activeAll from "../assets/activeAll.svg";
import Movie from "../assets/Movie.svg";
import activeMovie from "../assets/activeMovie.svg";
import Theater from "../assets/Theater.svg";
import Concerts from "../assets/Concerts.svg";
import Sport from "../assets/Sport.svg";
import Other from "../assets/Other.svg";
import Sessions from "../assets/Sessions.svg";
import { useLocation, useNavigate } from "react-router-dom";



function SeansPage() {
  const { data: movies, isLoading, isError } = useFetchData("/movies");



  const location = useLocation();
  const navigate = useNavigate();


  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    dots: true,
    arrows: true,
  };


  const getButtonStyle = useCallback(
  (path) => {
    return location.pathname === path
      ? "bg-red-600 border border-transparent"
      : "bg-[#1D1D1D80] border border-transparent hover:border-red-600";
  },
  [location.pathname] 
);

const handleButtonClick = useCallback(
  (path) => {
    navigate(path);
  },
  [navigate] 
);

  
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading data.</p>;
  }



  return (
    <MainLayout>
      <nav className="bg-black text-white p-4 flex justify-between items-center ml-[10vh]">
        <div className="flex gap-[8px]">
          <button onClick={() => navigate("/All")} className="w-[125px] h-[48px] flex content-between gap-[8px] py-[14px] px-[32px] bg-red-600 border border-transparent hover:border-red-600 rounded-[12px]">
            <img className="w-[24px] h-[24px]" src={location.pathname === "/All" ? All : activeAll} alt=" All.svg seans icon" />
            <h3 className="font-aeonik-pro text-[16px] font-medium leading-[20px] mt-[5%] mr-[32px]">Все</h3>
          </button>

          <button onClick={() => navigate("/Movie")} className="w-[136px] h-[48px] flex content-between gap-[8px] py-[14px] px-[32px] bg-[#1D1D1D80] border border-transparent hover:border-red-600 rounded-[12px]">
            <img className="w-[24px] h-[24px]" src={location.pathname === "/Movie" ? activeMovie : Movie} alt=" Movie.svg seans icon" />
            <h3 className="font-aeonik-pro text-[16px] font-medium leading-[20px] mt-[5%] mr-[32px]">Кино</h3>
          </button>

          <button onClick={() => handleButtonClick("Theater")} className="w-[140px] h-[48px] flex content-between gap-[8px] py-[14px] px-[32px] bg-[#1D1D1D80] border border-transparent hover:border-red-600 rounded-[12px]">
            <img className="w-[24px] h-[24px]" src={Theater} alt=" Theater.svg seans icon" />
            <h3 className="font-aeonik-pro text-[16px] font-medium leading-[20px] mt-[5%] mr-[32px]">Театр</h3>
          </button>

          <button onClick={() => handleButtonClick("Concerts")} className="w-[173px] h-[48px] flex content-between gap-[8px] py-[14px] px-[32px] bg-[#1D1D1D80] border border-transparent hover:border-red-600 rounded-[12px]">
            <img className="w-[24px] h-[24px]" src={Concerts} alt=" Contacts.svg seans icon" />
            <h3 className="font-aeonik-pro text-[16px] font-medium leading-[20px] mt-[5%] mr-[32px]">Концерты</h3>
          </button>

          <button onClick={() => handleButtonClick("Sport")} className="w-[144px] h-[48px] flex content-between gap-[8px] py-[14px] px-[32px] bg-[#1D1D1D80] border border-transparent hover:border-red-600 rounded-[12px]">
            <img className="w-[24px] h-[24px]" src={Sport} alt=" Sport.svg seans icon" />
            <h3 className="font-aeonik-pro text-[16px] font-medium leading-[20px] mt-[5%] mr-[32px]">Спорт</h3>
          </button>

          <button onClick={() => handleButtonClick("Other")} className="w-[152px] h-[48px] flex content-between gap-[8px] py-[14px] px-[32px] bg-[#1D1D1D80] border border-transparent hover:border-red-600 rounded-[12px]">
            <img className="w-[24px] h-[24px]" src={Other} alt=" Other.svg seans icon" />
            <h3 className="font-aeonik-pro text-[16px] font-medium leading-[20px] mt-[5%] mr-[32px]">Другие</h3>
          </button>

          <button onClick={() => handleButtonClick("Sessions")} className="w-[156px] h-[48px] flex content-between gap-[8px] py-[14px] px-[32px] bg-[#1D1D1D80] border border-transparent hover:border-red-600 rounded-[12px] ml-[11.3%]">
            <img className="w-[24px] h-[24px]" src={Sessions} alt="Sessions.svg seans icon" />
            <h3 className="font-aeonik-pro text-[16px] font-medium leading-[20px] mt-[5%] mr-[32px]">Залы</h3>
          </button>
        </div>
      </nav>

      <div className="w-[1212px] mx-auto mb-[24px]">
        <Slider {...settings} className="flex justify-between">
          {movies.map((movie, index) => (
            <div key={index} className="p-2">
              <div className="w-[280px] h-[400px] flex flex-col items-end justify-center p-3 rounded-[12px] bg-[#111111] hover:bg-gray-800">
                <img
                  src={movie.image_url || kung} 
                  alt={movie.title}
                  className="w-full h-full object-cover rounded-[12px]"
                />
                <p className="m-auto text-center">{movie.title}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <Carousel />

      <div className="w-[1212px] mx-auto mb-[24px]">
        <Slider {...settings} className="flex justify-between">
          {movies.map((movie, index) => (
            <div key={index} className="p-2">
              <div className="w-[280px] h-[400px] flex flex-col items-end justify-center p-3 rounded-[12px] bg-[#111111] hover:bg-gray-800">
                <img
                  src={movie.image_url || kung} 
                  alt={movie.title}
                  className="w-full h-full object-cover rounded-[12px]"
                />
                <p className="m-auto text-center">{movie.title}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="w-[1212px] mx-auto mb-[24px]">
        <Slider {...settings} className="flex justify-between">
          {movies.map((movie, index) => (
            <div key={index} className="p-2">
              <div className="w-[280px] h-[400px] flex flex-col items-end justify-center p-3 rounded-[12px] bg-[#111111] hover:bg-gray-800">
                <img
                  src={movie.image_url || kung} 
                  alt={movie.title}
                  className="w-full h-full object-cover rounded-[12px]"
                />
                <p className="m-auto text-center">{movie.title}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="w-[1212px] mx-auto mb-[24px]">
        <Slider {...settings} className="flex justify-between">
          {movies.map((movie, index) => (
            <div key={index} className="p-2">
              <div className="w-[280px] h-[400px] flex flex-col items-end justify-center p-4 rounded-[12px] bg-[#111111] hover:bg-gray-800">
                <img
                  src={movie.image_url || kung} 
                  alt={movie.title}
                  className="w-full h-full object-cover rounded-[12px]"
                />
                <p className="m-auto text-center">{movie.title}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </MainLayout>
  );
}

export default SeansPage;



