import Sunny from "../assets/3d weather icons/sun/26.png";
import PartlyCloudy from "../assets/3d weather icons/sun/27.png";
import Cloudy from "../assets/3d weather icons/cloud/35.png";
import Rain from "../assets/3d weather icons/cloud/7.png";
import Snow from "../assets/3d weather icons/cloud/23.png";
import LightStorm from "../assets/3d weather icons/cloud/25.png";
import HeavyStorm from "../assets/3d weather icons/cloud/28.png";
import Thunder from "../assets/3d weather icons/sun/28.png";
import SnowThunder from "../assets/3d weather icons/cloud/29.png";
import Ice from "../assets/3d weather icons/cloud/18.png";
import Mist from "../assets/3d weather icons/sun/4.png";
import Clear from "../assets/3d weather icons/cloud/32.png";

export interface Icon {
  name: string;
  url: string;
}

export const icons: Icon[] = [
  { name: "Sunny", url: Sunny },
  { name: "Clear", url: Clear },
  { name: "Partly cloudy", url: PartlyCloudy },
  { name: "Cloudy", url: Cloudy },
  { name: "Overcast", url: Cloudy },
  { name: "Mist", url: Mist },
  { name: "Patchy rain possible", url: Rain },
  { name: "Patchy snow possible", url: Snow },
  { name: "Patchy sleet possible", url: Rain },
  { name: "Patchy freezing drizzle possible", url: Ice },
  { name: "Thundery outbreaks possible", url: Thunder },
  { name: "Blowing snow", url: Snow },
  { name: "Blizzard", url: HeavyStorm },
  { name: "Fog", url: Mist },
  { name: "Freezing fog", url: Mist },
  { name: "Patchy light drizzle", url: Rain },
  { name: "Light drizzle", url: Rain },
  { name: "Freezing drizzle", url: Ice },
  { name: "Heavy freezing drizzle", url: Ice },
  { name: "Patchy light rain", url: Rain },
  { name: "Light rain", url: Rain },
  { name: "Moderate rain at times", url: Rain },
  { name: "Moderate rain", url: Rain },
  { name: "Heavy rain at times", url: Rain },
  { name: "Heavy rain", url: Rain },
  { name: "Light freezing rain", url: Ice },
  { name: "Moderate or heavy freezing rain", url: Rain },
  { name: "Light sleet", url: Rain },
  { name: "Moderate or heavy sleet", url: Rain },
  { name: "Patchy light snow", url: Snow },
  { name: "Light snow", url: Snow },
  { name: "Patchy moderate snow", url: Snow },
  { name: "Moderate snow", url: Snow },
  { name: "Patchy heavy snow", url: Snow },
  { name: "Heavy snow", url: Snow },
  { name: "Ice pellets", url: Ice },
  { name: "Light rain shower", url: Rain },
  { name: "Moderate or heavy rain shower", url: Rain },
  { name: "Torrential rain shower", url: HeavyStorm },
  { name: "Light sleet showers", url: Rain },
  { name: "Moderate or heavy sleet showers", url: Rain },
  { name: "Light snow showers", url: Snow },
  { name: "Moderate or heavy snow showers", url: Snow },
  { name: "Light showers of ice pellets", url: Ice },
  { name: "Moderate or heavy showers of ice pellets", url: Ice },
  { name: "Patchy light rain with thunder", url: LightStorm },
  { name: "Moderate or heavy rain with thunder", url: HeavyStorm },
  { name: "Patchy light snow with thunder", url: SnowThunder },
  { name: "Moderate or heavy snow with thunder", url: SnowThunder },
];
