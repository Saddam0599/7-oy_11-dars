import logo from "../assets/logo.svg";
import afisha from "../assets/afisha.svg";
import activeAfisha from "../assets/whiteMain.svg";
import seans from "../assets/Transfer.svg";
import bileti from "../assets/Monitoring.svg";
import search from "../assets/search.svg";
import activeSearch from "../assets/active_search.svg";
import activeSeans from "../assets/redSeans.svg";
import activeBilet from "../assets/active_bilet.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import {isEmpty} from './lodash'; ////lodash kutubxonasi

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = useSelector((prev) => prev.auth.token);



  return (
    <header className="px-[90px] flex mb-3 items-center">
      <Link to={"/"}>
        <div>
          <img
            className="w-[116px] h-[36px] border-x-4 border-y-2 border-solid border-transparent hover:border-[#111111]"
            src={logo}
            alt="BILK TICK.svg header logo"
          />
        </div>
      </Link>
      <div className=" flex ml-[25%] mr-[15%] hover:bg-gray-800 rounded-lg">
        <button
          onClick={() => navigate("/")}
          className="hover:bg-[#111111] rounded-lg"
        >
          <img
            src={location.pathname === "/" ? afisha : activeAfisha}
            alt="Афишa.svg page logo"
          />
        </button>
        <button
          onClick={() => navigate("/seans")}
          className="hover:bg-[#111111] rounded-lg"
        >
          <img
            src={location.pathname === "/seans" ? activeSeans : seans}
            alt="Seansy.svg page logo"
          />
        </button>
        <button
          onClick={() => navigate("/bilet")}
          className="hover:bg-[#111111] rounded-lg"
        >
          <img
            src={location.pathname === "/bilet" ? activeBilet : bileti}
            alt="Bilety.svg page logo"
          />
        </button>
        <button
          onClick={() => navigate("/search")}
          className="hover:bg-[#111111] rounded-lg"
        >
          <img
            src={location.pathname === "/search" ? activeSearch : search}
            alt="Poisk.svg page logo"
          />
        </button>
      </div>
      <div className="flex gap-[20px]">
        <select className="p-[15px] bg-[#1D1D1D80] hover:bg-gray-800 rounded-[12px] outline-none">
          <option value="ru">RU</option>
          <option value="uz">UZ</option>
        </select>
        <Link to={isLogin ? "/profile" : "/login"}>
          <button className="bg-red-600 hover:bg-red-700 px-[66px] py-[18px] rounded-[12px] hover:text-[#A1A1A1] font-aeonik-pro text-[16px] font-medium leading-[20px] tracking-[0.01em]">
            {isLogin ? "профиль" : "Войти"}
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;

