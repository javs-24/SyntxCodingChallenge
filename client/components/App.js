import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Main from './Main';
import CityForecast from './CityForecast';

const App = () => {
  const [cityData, setCityData] = useState([])
  const [retrievedData, setRetrievedData] = useState(false)
  const [prefCities, setPrefCities] = useState([])

  useEffect(() => {
    let local = JSON.parse(localStorage.getItem('prefCities'))
    if (local === null) setPrefCities([])
    else setPrefCities(local)
  }, [])

  useEffect(() => { fetchData() }, [prefCities])

  const fetchData = () => {
    if (prefCities.length === 0) return
    setRetrievedData(false)
    const requests = prefCities.map(city => {
      return fetch(`https://www.metaweather.com/api/location/${city.id}/`)
    });
    Promise.all(requests)
      .then(responses => Promise.all(responses.map(r => r.json())))
      .then(posts => {
        setCityData(posts)
        setRetrievedData(true)
      })
      .catch(err => console.error(err))
  }

  return (
    <AppStyled>
      <Router>
        <Switch>
          <Route path="/cityForecast/:cityName"><CityForecast cityData={cityData} retrievedData={retrievedData} /></Route>
          <Route path="/"><Main cityData={cityData} retrievedData={retrievedData} setPrefCities={setPrefCities} prefCities={prefCities} /></Route>
        </Switch>
      </Router >
    </AppStyled>
  )
}

const AppStyled = styled.div`
  margin: auto;
  width: 100%;
  text-align: center;
`;

export default App;
