import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { cToF, round } from '../utils/utils'


const ForecastCard = ({ dailyWeather }) => {
  return (
    <ForecastCardStyled>
      <div className="forecastCard" >
        <h5>{dailyWeather.applicable_date}</h5>
        <p>High: <span>{cToF(dailyWeather.max_temp)}</span></p>
        <p>Low: <span>{cToF(dailyWeather.min_temp)}</span></p>
        <img src={`https://www.metaweather.com/static/img/weather/ico/${dailyWeather.weather_state_abbr}.ico`} />
      </div>
    </ForecastCardStyled>
  );
}

const ForecastCardStyled = styled.div`
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
padding: 10px 50px;
margin: 10px 10px;
border-radius: 10px;
`;



export default ForecastCard;
