import Header from "../../components/header/Header";
import Search from "../../components/search/Search";
import WeatherCard from "../../components/weatherCard/WeatherCard";
import { search } from "../../api/weatherApi/weatherApi";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { handleError } from "../../util/errorHandling";

const WeatherPage = () => {
  const [weather, setWeather] = useState<WeatherResponse>();
  const [loading, setLoading] = useState<boolean>(false);

  const [weatherFavorite, setWeatherFavorite] = useState<WeatherResponse[]>([]);

  const handleUpdateWeather = (weatherUpdate: WeatherResponse) => {
    setWeather(weatherUpdate);
  };

  const handleGetFavWeather = async () => {
    try {
      setLoading(true);
      const telAviv = await search("tel aviv");
      const jerusalem = await search("jerusalem");
      if(telAviv.error) {
        throw new Error(telAviv.error)
      } else if (jerusalem.error) {
        throw new Error(jerusalem.error)
      }
      if (telAviv.location.name && jerusalem.location.name) {
        setLoading(false);
        setWeatherFavorite([telAviv, jerusalem]);
      }
    } catch (error) {
      console.log(error)
      setLoading(false);
      const errorMsg = handleError((error as Error))
      console.log(errorMsg)
      toast.info(errorMsg, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        icon: "⛈️",
      });
    }
  };

  const handleSetLoading = (bol: boolean) => {
    setLoading(bol);
  };

  useEffect(() => {
    handleGetFavWeather();
  }, []);

  return (
    <div className="page">
      <div className="page-overlay">
        {/* loader */}
        <div
          className="lds-ripple"
          style={{ display: loading ? "block" : "none" }}
        >
          <div></div>
          <div></div>
        </div>
      </div>

      <Header />
      <Search
        updateWeather={handleUpdateWeather}
        setLoading={handleSetLoading}
      />
      <div className="main">
        {weather && weather.location && weather.location.name && !loading ? (
          <WeatherCard weather={weather} />
        ) : null}
        {weatherFavorite.length > 0 &&
          weatherFavorite.map((fav) => {
            return <WeatherCard weather={fav} />;
          })}
      </div>
      {!weather?.location && weatherFavorite.length == 0 && !loading ? (
        <div className="error">
          <h2>It Seems that Something Went Wrong. Please try again.</h2>
          <button
            onClick={() => {
              window.location.reload();
            }}
            className="error_button"
          >
            RELOADE
          </button>
        </div>
      ) : null}
      <div style={{ zIndex: 10 }}>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </div>
  );
};

export default WeatherPage;
