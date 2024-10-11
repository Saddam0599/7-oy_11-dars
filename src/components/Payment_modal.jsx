import { IoIosArrowBack } from "react-icons/io";
import OneTicket from "./OneTicket";
import pila from "../assets/pila.png";
import click from "../assets/Click.png";
import payme from "../assets/payme.png";
import PropTypes from 'prop-types'; 

function Payment_modal({ open = false, func }) {
  if (open === false) {
    return <></>;
  } else {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-[#111111] rounded-lg shadow-lg p-6 max-w-[1150px] w-full">
          <button
            onClick={() => func(false)}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            <IoIosArrowBack />
          </button>
          <div className="flex flex-col items-center">
            <h1 className="mb-10 text-[20px]">Оплата</h1>
            <OneTicket title="Кунг Фу Панда 4" img={pila} history={true} />
            <div className="max-w-[370px] w-full bg-[#1D1D1D] py-5 px-5 flex justify-between mt-10 mb-2">
              <h2 className="text-[16px] text-white font-medium">
                Комиссия сервиса
              </h2>
              <p className="text-[16px] text-white font-medium">5 000 сум</p>
            </div>{" "}
            <div className="max-w-[370px] w-full bg-[#1D1D1D] py-5 px-5 flex justify-between mb-10">
              <h2 className="text-[16px] text-white font-medium">
                Общая сумма
              </h2>
              <p className="text-[16px] text-white font-medium">135 000 сум</p>
            </div>
            <p className="text-[12px] text-[#4D4D4D] font-medium mb-5">
              Выберите способ оплаты
            </p>
            <div className="flex gap-5">
              <button className="py-[27px] px-[96px] bg-[#1D1D1D] rounded-xl">
                <img src={click} alt="" />
              </button>
              <button className="py-[27px] px-[96px] bg-[#1D1D1D] rounded-xl">
                <img src={payme} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Payment_modal.propTypes = {
  open: PropTypes.bool,           
  func: PropTypes.func.isRequired, 
};

export default Payment_modal;
