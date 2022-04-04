import moment from "moment";
import axios from "axios";
import { useEffect, useState } from "react";

import style from "./InfoSection.module.css";

const InfoSection = () => {
  const [myWeather, setMyWeather] = useState([]);
  const [latitude, setLatitude] = useState('0');
  const [longitude, setLongitude] = useState('0');

  const getWeather = async () => {
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=78d93d422f5e37b235d733c44863b2a7`      );
      const { main } = data;
      setMyWeather(main.temp.toFixed(0));
    } catch (error) {
      console.log(error);
    }
  };

  const getPosition = (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    setLatitude(lat);
    setLongitude(lon);
  }
  
  useEffect(() => {    
    navigator.geolocation.getCurrentPosition(getPosition);
    getWeather();
    // eslint-disable-next-line
  }, [getPosition]);

  return (
    <div className={style.containerInfoSection}>
      <div className={style.infoSection}>
        <div>{moment().format("LLLL")}</div>
        <div>{ myWeather } ºC</div>
      </div>
    </div>
  );
};

export default InfoSection;
