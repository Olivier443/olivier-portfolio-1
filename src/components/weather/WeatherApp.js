import React from 'react'
import { useEffect, useState } from "react";
import WeatherCard from './WeatherCard';
import styled from 'styled-components'

const WeatherApp = () => {

  const [lat, setLat] = useState(100);     // latitude  is -90°  to +90°
  const [long, setLong] = useState(200);   // longitude is -180° to +180°
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        console.log(`WeatherApp position.coords.lat: ${position.coords.latitude} position.coords.long=${position.coords.longitude}`);
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      // We do not fetch when real latitude and longitude are not both set
      if (lat < 100 && long < 200) {
        fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
          .then(res => res.json())
          .then(result => {
            console.log(`WeatherApp fetch lat: ${lat} long: ${long}`);
            setData(result);
            console.log(result);
          });
      }
    }
    fetchData();
  }, [lat, long])

  return (
    <div>
      {
        (typeof data.main != 'undefined')
          ? (<WeatherCard weatherData={data} />)
          : (<DivUndefined>Data is undefined!</DivUndefined>)
      }
    </div>
  )
}

export default WeatherApp

// This is in case that the data that we get is undefined
const DivUndefined = styled.div`
  color: red;
  font-weight: bold;
`