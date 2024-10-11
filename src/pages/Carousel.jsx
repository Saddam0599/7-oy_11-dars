import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Bars } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import useFetchData from "../hooks/Fetch";



const Carousel = () => {
  const { id } = useParams();
  const { data: loading } = useFetchData(`/movies/${id}`);



  const seasons = [
    {
      name: "Spring",
      months: [
        { name: "March", days: 31 },
        { name: "April", days: 30 },
        { name: "May", days: 31 }
      ]
    },
    {
      name: "Summer",
      months: [
        { name: "June", days: 30 },
        { name: "July", days: 31 },
        { name: "August", days: 31 }
      ]
    },
    {
      name: "Autumn",
      months: [
        { name: "September", days: 30 },
        { name: "October", days: 31 },
        { name: "November", days: 30 }
      ]
    },
    {
      name: "Winter",
      months: [
        { name: "December", days: 31 },
        { name: "January", days: 31 },
        { name: "February", days: 28 } 
      ]
    }
  ];

  const daysOfWeek = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

  const settings = {
    infinite: true,
    slidesToShow: 18, 
    slidesToScroll: 4,
    dots: true,
    arrows: true,
  };





  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Bars
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }


  return (
    <div>
      {seasons.map((season, seasonIndex) => (
        <div key={seasonIndex} className="mb-8">
          <h2 className="text-center text-lg text-white mb-4">{season.name}</h2>

          {season.months.map((month, monthIndex) => (
            <div key={monthIndex} className="mb-4">
              <h3 className="text-center text-md text-gray-300 mb-2">{month.name}</h3>

              <Slider {...settings} className="mx-20 px-2">
                {[...Array(month.days)].map((_, dayIndex) => (
                  <div key={dayIndex} className="w-[64px] h-[64px] bg-[#111111] flex flex-col items-center justify-between border rounded-[12px] hover:border-[#7C1313] p-2 border-b-4 border-r-4 border-solid border-blue-300 hover:bg-gray-800">
                    <p className="text-sm text-center text-white">
                      {daysOfWeek[dayIndex % 7]} 
                    </p>

                    <p className="text-lg text-center text-white">{dayIndex + 1}</p>
                  </div>
                ))}
              </Slider>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Carousel;













