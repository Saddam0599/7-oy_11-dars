import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MainLayout from "../layouts/Main_layout";
import Slider from "../components/Slider";
import Render from "../components/Render";
import useFetchData from "../hooks/Fetch";
import { Bars } from "react-loader-spinner";

function Home() {
  const { data: movieData, loading, error } = useFetchData("/movies");
  const [showSpinner, setShowSpinner] = useState(true); 
  const location = useLocation();

  useEffect(() => {
    setShowSpinner(true);
  
    const timer = setTimeout(() => {
      setShowSpinner(false);
    }, 1000); 
  
    return () => clearTimeout(timer);
  }, [location]); 
  
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
        {error && (
          <p className="mt-4 text-red-500 text-center text-xl font-semibold">
            There was an error loading movies...
          </p>
        )}
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
        <div className="max-w-[1360px] w-full mx-auto">
          <MainLayout>
            <Slider />
            <Render data={movieData} />
          </MainLayout>
        </div>
      )}
    </>
  );
}

export default Home;
