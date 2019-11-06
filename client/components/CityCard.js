import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import { cToF, round } from '../utils/utils'


const CityCard = ({ cityInfo }) => {
  const weatherState = cityInfo.consolidated_weather[0].weather_state_abbr
  const currentTemp = cToF(cityInfo.consolidated_weather[0].the_temp)

  return (
    <StyledCityCard>
      <h3><Link to={`/cityForecast/${cityInfo.title}`}>{cityInfo.title}</Link> <br></br> {currentTemp + ' \xB0F'}</h3>
      <img src={`https://www.metaweather.com/static/img/weather/ico/${weatherState}.ico`} />
    </StyledCityCard>
  );
}

const StyledCityCard = styled.div`
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      padding: 10px 50px;
      margin: 10px 10px; 
      border-radius: 10px;
      width: 10%;
    `


export default CityCard;
