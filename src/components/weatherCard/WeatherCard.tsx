import React, { FC, useEffect, useState } from "react";
import Rectangle from "../../assets/Rectangle1.svg";
import { Icon, icons } from "../../assets/icons";

interface WeatherCardProps {
  weather: WeatherResponse;
}

const WeatherCard: FC<WeatherCardProps> = ({ weather }) => {
  const [icon, setIcon] = useState<Icon>();

  const getIcon = () => {
    setIcon(
      icons.find((icon) => icon.name == weather.current.condition.text)
    );
  };

  useEffect(() => {
    getIcon();
  }, [weather]);
  
  return (
    <div className="card">
      <div className="card__left">
        {/* left */}
        <h3 className="card__left_temp">{weather.current.temp_c}°</h3>
        <div>
          <p className="card__left_darker">
            Feels like: {weather.current.feelslike_c}
          </p>
          <p className="card__left_location">
            {weather.location.name}, {weather.location.country}
          </p>
        </div>
      </div>
      <div className="card__right">
        {/* right */}
        <div className="card__right_img">
          <img className="big_png" src={icon?.url} alt={weather.current.condition.text} />
        </div>
        <p className="card__right_condition">{weather.current.condition.text}</p>
      </div>
      <img className="card__background" src={Rectangle} />
    </div>
  );
};

export default WeatherCard;
