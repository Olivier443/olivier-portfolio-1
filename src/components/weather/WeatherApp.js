import React from 'react'
import { useEffect, useState } from "react";
import WeatherCard from './WeatherCard';

const WeatherApp = () => {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
        // console.log(`WeatherApp lat: ${lat} long=${long}`);
        // console.log(`WeatherApp process.env.REACT_APP_API_URL=${process.env.REACT_APP_API_URL}`);
      });

      fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        // console.log(`WeatherApp.js fetchData=${JSON.stringify(result)}`);
        console.log(result);
      });
    }
    fetchData();
  }, [lat, long])
  return (
    <div>
    {(typeof data.main != 'undefined') ? (
      <WeatherCard weatherData={data}/>
    ): (
      <div>Loading!</div>
    )}
    </div>
  )
}

export default WeatherApp
