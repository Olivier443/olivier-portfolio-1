import React from 'react';
import styled from 'styled-components'
import moment from 'moment';
import Techicons from '../Techicons'
import Footer from '../Footer'

const WeatherCard = ({ weatherData }) => {

  return (
    <div>

      <DivMain>
          <PHeader>{weatherData.name}</PHeader>
          <div>
            <PDay>{moment().format('dddd')}, <span>{moment().format('LL')}</span></PDay>
            <p>{weatherData.weather[0].main}</p>
            <ImgIcon src={`/assets/weathericons/${weatherData.weather[0].icon}.png`} alt='displays an icon showing weather' />
          </div>

          <div>
            <PTemp>Description: {weatherData.weather[0].description}</PTemp>
            <PTemp>Temperature: {weatherData.main.temp} &deg;C</PTemp>
            <PTemp>Humidity: {weatherData.main.humidity} %</PTemp>
            <PTemp>Latitude: {weatherData.coord.lat}</PTemp>
          </div>

          <div>
            <PSsunriseSunset>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-US')}</PSsunriseSunset>
            <PSsunriseSunset>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-US')}</PSsunriseSunset>
          </div>

      </DivMain>

      <Techicons />

      <Footer />

    </div>
  )

}

export default WeatherCard;

const DivMain = styled.div`
  width: 100vw;
  height: auto;
  margin-top: 8vh;
  border-bottom: solid 1px #000;
  background-image: linear-gradient(to right, #000000, #434343);
`  


const PHeader = styled.p`
  height: auto;
  background-color: #424242;
  color: #fff;
  padding: 2vh 2vw 2vh 2vw;
  font-size: 3rem;
  font-family: 'Recursive', sans-serif;
`

const ImgIcon = styled.img`
  padding: 0 1vw 0 1vw;
`

const PDay = styled.p`
  height: auto;
  padding: 2vh 2vw 2vh 2vw;
  color: #fff;
  font-family: 'Recursive', sans-serif;
  font-size: 1.4rem;
  font-weight: 600;
`

const PTemp = styled.p`
  height: auto;
  padding: 2vh 2vw 2vh 2vw;
  color: #fff;
  font-family: 'Recursive', sans-serif;
  font-size: 1rem;
`

const PSsunriseSunset = styled.p`
  height: auto;
  padding: 2vh 2vw 2vh 2vw;
  color: #fff;
  font-family: 'Recursive', sans-serif;
  font-size: 1rem;
`