import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import CityCard from "./CityCard";

const cities = [
  { name: 'san francisco', id: 2487956 },
  { name: 'los angeles', id: 2442047 },
  { name: 'seattle', id: 2490383 },
  { name: 'austin', id: 2357536 },
  { name: 'new york', id: 2459115 }
]

const Main = ({ cityData, retrievedData, setPrefCities, prefCities }) => {
  const Cards = cityData.map((cityData) => {
    return <CityCard cityInfo={cityData} key={cityData.woeid} />
  })
  //filtering out which cities aren't preferred by user and creating buttons for each
  const addCityButtons = createAddCityButtons(prefCities, cities, setPrefCities);

  return (
    <div>
      <h1>Syntx Weather App</h1>
      {(retrievedData || prefCities.length === 0) ? <StyledCards>{Cards}</StyledCards> : <h2>Retrieving Data...</h2>}
      {(retrievedData || prefCities.length === 0) && addCityButtons}
    </div>
  );
}

//helper function to create add buttons
const createAddCityButtons = (prefCities, cities, setPrefCities) => {
  return cities.filter((city) => {
    for (let i = 0; i < prefCities.length; i += 1) {
      if (city.name === prefCities[i].name) return false;
    }
    return true;
  }).map((el, index) => {
    return (
      <div key={'div' + index}>
        <button key={'button' + index} onClick={() => {
          const temp = [...prefCities, { name: el.name, id: el.id }]
          setPrefCities(temp)
          localStorage.setItem('prefCities', JSON.stringify(temp))
        }}>Add, {el.name}</button>
      </div>
    )
  })
}

const StyledCards = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap; 
`

export default Main;