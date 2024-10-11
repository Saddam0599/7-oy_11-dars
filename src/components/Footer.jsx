import logo from "../assets/footer-logo.svg";
import play_market from "../assets/google-play.svg";
import app_store from "../assets/app-store.svg";
import List from "../assets/List.svg";
import Advertising from "../assets/Advertising.svg";
import FAQ from "../assets/FAQ.svg";
import Contact from "../assets/Contact.svg";
import Instagram from "../assets/Instagram.svg";
import Movie from "../assets/Movie.svg";
import Theater from "../assets/Theater.svg";
import Concerts from "../assets/Concerts.svg";
import Sport from "../assets/Sport.svg";
import Facebook from "../assets/Facebook.svg";
import Youtube from "../assets/Youtube.svg";

function Footer() {
  return (
    <footer className="flex justify-between bg-[#111111] px-[50px] py-[30px] rounded-[12px] mt-[120px]">
      <div className="flex flex-col gap-[48px]">
        <img
          className="w-[10vh] h-[6vh] border-x-4 border-y-2 border-solid border-transparent hover:border-gray-800"
          src={logo}
          alt="logo.svg footer logo"
        />
        <div className="flex flex-col gap-2">
          <a href="https://play.google.com/store/apps?hl=ru">
            <img
              className="border-x-4 border-y-2 border-dashed border-transparent hover:border-gray-800 rounded-[8px]"
              src={play_market}
              alt="play_market.svg footer Скачать из  Google Play"
            />
          </a>
          <a href="https://apps.apple.com/ru/app/apple-store/id375380948">
            <img
              className="border-x-4 border-y-2 border-dashed border-transparent hover:border-red-800 rounded-[8px]"
              src={app_store}
              alt="app_store.svg Загрузите из App Store"
            />
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-[18px]">
        <h5 className="mb-[2px] hover:underline font-aeonik-pro font-medium leading-[20px] tracking-[0.01em]">
          О нас
        </h5>
        <div className="flex gap-[8px] items-center">
          <img src={List} alt=" List.svg footer icon" />
          <p className="text-[#A1A1A1] text-[16px] hover:text-[#C61F1F] hover:border-b-[#C61F1F] hover:underline font-aeonik-pro font-medium leading-[20px] tracking-[0.01em]">
            Публичная оферта
          </p>
        </div>{" "}
        <div className="flex gap-[8px] items-center">
          <img src={Advertising} alt=" Advertising.svg footer icon" />
          <p className="text-[#A1A1A1] text-[16px] hover:text-[#C61F1F] hover:border-b-[#C61F1F] hover:underline font-aeonik-pro font-medium leading-[20px] tracking-[0.01em]">
            Реклама
          </p>
        </div>{" "}
        <div className="flex gap-[8px] items-center">
          <img src={FAQ} alt=" FAQ.svg footer icon" />
          <p className="text-[#A1A1A1] text-[16px] hover:text-[#C61F1F] hover:border-b-[#C61F1F] hover:underline font-aeonik-pro font-medium leading-[20px] tracking-[0.01em]">
            F.A.Q
          </p>
        </div>{" "}
        <div className="flex gap-[8px] items-center">
          <img src={Contact} alt="Contact.svg footer icon" />
          <p className="text-[#A1A1A1] text-[16px] hover:text-[#C61F1F] hover:border-b-[#C61F1F] hover:underline font-aeonik-pro font-medium leading-[20px] tracking-[0.01em]">
            Контакты
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-[22px]">
        <h5 className="mb-[2px] hover:underline font-aeonik-pro font-medium leading-[20px] tracking-[0.01em]">
          Категории
        </h5>
        <div className="flex gap-[8px] items-center">
          <img src={Movie} alt="Movie.svg footer icon" />
          <p className="text-[#A1A1A1] text-[16px] hover:text-[#C61F1F] hover:border-b-[#C61F1F] hover:underline font-aeonik-pro font-medium leading-[20px] tracking-[0.01em]">
            Кино
          </p>
        </div>{" "}
        <div className="flex gap-[8px] items-center">
          <img src={Theater} alt="Theater.svg footer icon" />
          <p className="text-[#A1A1A1] text-[16px] hover:text-[#C61F1F] hover:border-b-[#C61F1F] hover:underline font-aeonik-pro font-medium leading-[20px] tracking-[0.01em]">
            Театр
          </p>
        </div>{" "}
        <div className="flex gap-[8px] items-center">
          <img src={Concerts} alt="Concerts.svg footer icon" />
          <p className="text-[#A1A1A1] text-[16px] hover:text-[#C61F1F] hover:border-b-[#C61F1F] hover:underline font-aeonik-pro font-medium leading-[20px] tracking-[0.01em]">
            Концерты
          </p>
        </div>{" "}
        <div className="flex gap-[8px] items-center">
          <img src={Sport} alt="Sport.svg footer icon" />
          <p className="text-[#A1A1A1] text-[16px]  hover:text-[#C61F1F] hover:border-b-[#C61F1F] hover:underline font-aeonik-pro font-medium leading-[20px] tracking-[0.01em]">
            Спорт
          </p>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex flex-col mb-14">
          <h5 className="hover:underline font-aeonik-pro font-medium leading-[20px] tracking-[0.01em]">
            Связаться с нами
          </h5>
          <h5 className="text-[#C61F1F] mt-5 text-[20px] font-[500]">
            +998 (95) 897-33-38
          </h5>
        </div>

        <div className="flex flex-col">
          <h5 className="hover:underline font-aeonik-pro font-medium leading-[20px] tracking-[0.01em]">
            Социальные сети
          </h5>
          <div className="flex">
            <a href="https://www.instagram.com/">
              <img
                width={"24px"}
                src={Instagram}
                className="mt-5 mr-5 w-[22px] h-[22px]"
                alt="Instagram.svg footer icon"
              />
            </a>

            <a href="https://www.facebook.com/">
              <img
                width={"24px"}
                src={Facebook}
                className="mt-5 mr-5 w-[20px] h-[20px]"
                alt="Facebook.svg footer icon"
              />
            </a>

            <a href="https://www.youtube.com/">
              <img
                width={"24px"}
                src={Youtube}
                className="mt-5 w-[22px] h-[18px]"
                alt="Youtube.svg footer icon"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
