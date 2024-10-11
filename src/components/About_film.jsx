import imd from "../assets/imd.svg";
import kinopoisk from "../assets/kinopoisk.svg";
import Cinema_data from "./Cinema_data";
import { BsTicketPerforatedFill } from "react-icons/bs";
import useStore from "../zustand/index";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from 'prop-types'; 


function About_film({ set = () => {}, data }) {
  const { setTicket, tickets } = useStore();

  return (
    <div className="max-w-[380px] w-full mx-auto mt-12">
      <div className="flex gap-5 mb-12">
        <button className="flex gap-1 items-center text-[20px] font-black border border-[#252525]  pl-6 rounded-xl">
          6.6 <img src={imd} alt="" />
        </button>
        <button className="flex gap-1 items-center text-[20px] font-black border border-[#252525]  pl-6 rounded-xl">
          6.8 <img src={kinopoisk} alt="" />
        </button>
      </div>
      <div>
        <Cinema_data />
        <hr className="border border-[#2D2D2D] my-8" />
        <Cinema_data title="В ролях" />
        <hr className="border border-[#2D2D2D] my-8" />

        <div>
          <h5 className="text-[20px] mb-6">Сюжет</h5>
          <p className="text-[#A1A1A1] mb-12">
            Продолжение приключений легендарного Воина Дракона, его верных
            друзей и наставника (часть вторая)
          </p>
          <button
            onClick={() => {
              localStorage.setItem("bilet", JSON.stringify(data))
              setTicket(data);
              toast.success(
                "Malumotingiz saqlandi, uni tickets page dan ko'ra olasiz"
              );
            }}
            className="w-full bg-[#C61F1F] flex justify-center items-center gap-2 py-4 rounded-xl"
          >
            <BsTicketPerforatedFill />
            Купить билет
          </button>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}


About_film.propTypes = {
  set: PropTypes.func,   
  data: PropTypes.object.isRequired,
};

export default About_film;
