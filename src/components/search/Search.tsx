import { useEffect, useState, FC } from "react";
import { search } from "../../api/weatherApi/weatherApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { handleError } from "../../util/errorHandling";

interface SearchProps {
  updateWeather: (weatherUpdate: WeatherResponse) => void;
  setLoading: (bol: boolean) => void;
}

const Search: FC<SearchProps> = ({ updateWeather, setLoading }) => {
  const [location, setLocation] = useState<string>("");

  const handleSearch = async () => {
    try {
      setLoading(true);
      const data = await search(location);
      if (data.error) {
        throw new Error(data.error);
      }
      if (data) {
        updateWeather(data);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      const errorMsg = handleError((error as Error))
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

  useEffect(() => {
    let getData:ReturnType<typeof setTimeout>;
    if (location) {
      getData = setTimeout(() => {
        handleSearch();
      }, 2000);
    }
    return () => clearTimeout(getData);
  }, [location]);

  return (
    <div className="container">
      <div className="magnifying-glass"></div>
      <input
        className="location-search"
        type="text"
        placeholder="Search for city or airport"
        value={location}
        onInput={(ev) => setLocation((ev.target as HTMLInputElement).value)}
      />
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
  );
};

export default Search;
