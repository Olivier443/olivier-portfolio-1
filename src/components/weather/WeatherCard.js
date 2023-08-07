import React from 'react';
import styled from 'styled-components'
import moment from 'moment';
import Navbar from '../../Navbar/Navbar';
import Footer from '../Footer';

const WeatherCard = ({weatherData}) => (
  <>
    <Navbar />

    <MainDiv>
        <PHeader>{weatherData.name}</PHeader>
        <div>
          <PDay>{moment().format('dddd')}, <span>{moment().format('LL')}</span></PDay>
          <PWeather>{weatherData.weather[0].main}</PWeather>
          <img src={`/assets/weathericons/${weatherData.weather[0].icon}.png`} alt='displays an icon showing weather' />
        </div>

        <DivTemp>
          <PTemp>Temperature: {weatherData.main.temp} &deg;C</PTemp>
          <PTemp>Humidity: {weatherData.main.humidity} %</PTemp>
        </DivTemp>

        <DivSun>
          <PSun>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</PSun>
          <PSun>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</PSun>
        </DivSun>
      
    </MainDiv>

    <Footer />
  </>
)

export default WeatherCard;

const MainDiv = styled.div`
  width: 100vw;
  height: 92vh;
  margin-top: 8vh;
  background-image: linear-gradient(to right, #2980B9, #6DD5FA, #FFFFFF);
`

const PHeader = styled.p`
  background-image: linear-gradient(to right, #1488CC, #2B32B2);
  color: #fff;
  padding: 1vw;
  font-size: 28px;
`

const PDay = styled.p`
  padding: 1vw;
  color: #fff;
  font-size: 28px;
`

const PWeather = styled.p`
  background-image: linear-gradient(to right, #1488CC, #2B32B2);
  color: #fff;
  padding: 1vw;
  font-size: 28px;
`

const PTemp = styled.p`
  padding: 1vw;
  color: #fff;
  font-size: 24px;
`

const DivTemp = styled.div`
  color: #fff;
  background-image: linear-gradient(to right, #C02425, #F0CB35);
`

const DivSun = styled.div`
  color: #fff;
  background-image: linear-gradient(to right, #6A9113, #141517);
`

const PSun = styled.p`
  padding: 1vw;
  color: #fff;
  font-size: 24px;
`