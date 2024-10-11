import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../layouts/Main_layout";
import Bileti from "../components/Bileti";
import About_film from "../components/About_film";
import useFetchData from "../hooks/Fetch";
import { Bars } from "react-loader-spinner";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DetailPage = () => {
  const { id } = useParams();
  const [tab, setTab] = useState(1);
  const [showSpinner, setShowSpinner] = useState(true);

  const { data: movie, loading, error } = useFetchData(`/movies/${id}`);

  const sliderSettings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
  };

  
  useEffect(() => {
    setShowSpinner(true);
    
    const timer = setTimeout(() => {
      setShowSpinner(false);
    }, 1000); 

    return () => clearTimeout(timer);
  }, [loading]); 

  
  if (loading || error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Bars
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="bars-loading"
          visible={true}
        />
        {error && <p className=" mt-4 text-red-500">There was an error loading the movie...</p>}
      </div>
    );
  }

  
  return (
    <>
      {showSpinner ? (
        <div className="flex justify-center items-center h-screen">
          <Bars
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="bars-loading"
            visible={true}
          />
        </div>
      ) : (
        <MainLayout>
          <div className="relative mb-12">
            <img
              src={movie.img}
              alt=""
              className="max-w-[1360px] w-full max-h-[640px] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 h-28 bg-black opacity-50"></div>
            <h1 className="absolute bottom-20 left-[40%] text-[32px] font-medium text-white">
              {movie.title}
            </h1>
          </div>

          <div className="max-w-[380px] w-full mx-auto">
            <button
              onClick={() => setTab(1)}
              className={`py-4 w-[188px] rounded-xl ${
                tab == 1 ? "bg-[#1D1D1D] text-[#C61F1F]" : "bg-[#111111]"
              }`}
            >
              Билеты
            </button>
            <button
              onClick={() => setTab(2)}
              className={`py-4 w-[188px] rounded-xl ${
                tab == 2 ? "bg-[#1D1D1D] text-[#C61F1F]" : "bg-[#111111]"
              }`}
            >
              О фильме
            </button>
          </div>

          {tab == 1 ? (
            <Bileti />
          ) : (
            <About_film set={setTab} />
          )}

          <div className="mt-8">
            <h2 className="text-center text-xl font-bold mb-4">More Movies</h2>
            <Slider {...sliderSettings}>
              {movie.relatedMovies?.map((relatedMovie) => (
                <div key={relatedMovie.id}>
                  <img
                    src={relatedMovie.img}
                    alt={relatedMovie.title}
                    className="w-full h-[300px] object-cover"
                  />
                  <p className="text-center mt-2">{relatedMovie.title}</p>
                </div>
              ))}
            </Slider>
          </div>
        </MainLayout>
      )}
    </>
  );
};

export default DetailPage;
