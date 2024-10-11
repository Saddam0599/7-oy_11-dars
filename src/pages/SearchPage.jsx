import { useState, useMemo } from "react";
import MainLayout from "../layouts/Main_layout";
import searchBtn from "../assets/search-line.svg";
import OneTicket from "../components/OneTicket";
import useFetchData from "../hooks/Fetch";

function SearchPage() {
  const [inputValue, setInputValue] = useState("");
  const [hasSearched, setHasSearched] = useState(false); 
  const { data, isLoading, error } = useFetchData("/movies");

  const filteredData = useMemo(() => {
    if (!data || !inputValue) return [];
    return data.filter((movie) =>
      movie.title.toLowerCase().startsWith(inputValue.toLowerCase())
    );
  }, [data, inputValue]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setHasSearched(!!e.target.value); 
  };

  return (
    <MainLayout>
      <div className="flex flex-col items-center">
        <form
          onSubmit={(e) => e.preventDefault()} 
          className="mt-12 relative flex items-center max-w-[380px] w-full mb-12"
        >
          <button type="submit" className="absolute cursor-pointer left-5">
            <img src={searchBtn} alt="Search" />
          </button>
          <input
            placeholder="Названия фильма"
            value={inputValue}
            onChange={handleInputChange} 
            className="max-w-[380px] w-full bg-[#111111] py-5 text-[#c3c3c3] outline-none pl-14 rounded-xl"
            type="text"
          />
        </form>

        {isLoading ? (
          <p>Загрузка...</p>
        ) : error ? (
          <p>Ошибка: {error.message}</p>
        ) : hasSearched ? ( 
          filteredData.length > 0 ? (
            filteredData.map((movie) => (
              <OneTicket key={movie.id} title={movie.title} img={movie.img} />
            ))
          ) : (
            <p>Ничего не найдено</p>
          )
        ) : null}
      </div>
    </MainLayout>
  );
}

export default SearchPage;
