import { IoTime } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import { toast, ToastContainer } from "react-toastify";
import PropTypes from 'prop-types';

function OneTicket({
  title = "",
  img = "",
  buy = false,
  history = false,
  open,
}) {
  return (
    <div className="max-w-[580px] w-full bg-[#1D1D1D] rounded-xl">
      <div className="flex gap-5 m-2">
        <div>
          <img width={"260px"} height={"260px"} src={img} alt="" />
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-[24px] font-medium">{title}</h1>
          <p className="text-[#A1A1A1] text-[14px] font-medium">
            2024 • RU • 6+ • 1ч 34м / 94 минут
          </p>
          <p className="text-[14px] font-medium">Magic Cinema</p>
          <p className="text-[14px] font-medium">Зал №1</p>
          <p className="text-[14px] font-medium">28 марта, 19:30</p>
          <button className="bg-[#2D2D2D] mt-3 w-[121px] flex justify-center py-3">
            {buy === false ? (
              <div className="flex gap-1 items-center">
                <TiTick />
                <p>Оплачено</p>
              </div>
            ) : (
              <div className="flex gap-1 items-center">
                <IoTime />
                <p>Ждет оплаты</p>
              </div>
            )}
          </button>
        </div>
      </div>
      {history == false ? (
        <div className="mt-3 py-6 m-5 flex justify-between items-center">
          <h4>{buy ? "Ваш билет готов" : "Ваш билет бронирован"}</h4>
          <button
            onClick={() =>
              buy ? toast.success("to'lov qilingan") : open(true)
            }
            className="py-4 w-[278px] flex justify-center bg-[#C61F1F] rounded-xl"
          >
            {buy ? "Получить билет" : "Оплатить"}
          </button>
        </div>
      ) : (
        ""
      )}
      <ToastContainer />
    </div>
  );
}

  OneTicket.propTypes = {
  title: PropTypes.string,      
  img: PropTypes.string,         
  buy: PropTypes.bool,           
  history: PropTypes.bool,       
  open: PropTypes.func.isRequired, 
};

export default OneTicket;
