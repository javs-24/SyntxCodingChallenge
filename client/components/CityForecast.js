import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

import ForecastCard from './ForecastCard';
import { cToF, round } from '../utils/utils'


const CityForecast = ({ cityData, retrievedData, }) => {
  let { cityName } = useParams()

  const filteredCity = cityData.filter(city => {
    return city.title === cityName;
  })[0];

  const weatherState = filteredCity.consolidated_weather[0].weather_state_abbr
  const currentTemp = cToF(filteredCity.consolidated_weather[0].the_temp)

  const forecastCards = filteredCity.consolidated_weather.map((dailyWeather, index) => {
    return <ForecastCard dailyWeather={dailyWeather} key={`forecast${index}`} />
  })

  return (
    <>
      <h1><Link to="/">{cityName}</Link></h1>
      <img src={`https://www.metaweather.com/static/img/weather/ico/${weatherState}.ico`} />
      <h5>{currentTemp + ' \xB0F'}</h5>
      <ForecastCardsStyled>{forecastCards}</ForecastCardsStyled>
    </>
  );
}

const ForecastCardsStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default CityForecast;
