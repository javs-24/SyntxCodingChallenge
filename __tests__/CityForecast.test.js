import React from 'react'
import ReactDOM from 'react-dom'
import { MemoryRouter as Router, Route } from "react-router-dom";
import CityForecast from '../client/components/CityForecast';

const cityDataMock = [{
  "consolidated_weather": [
    {
      "weather_state_abbr": "hc",
      "applicable_date": "2019-11-05",
      "min_temp": 10,
      "max_temp": 20.625,
      "the_temp": 19.28,
    },
    {
      "weather_state_abbr": "hc",
      "applicable_date": "2019-11-06",
      "min_temp": 11,
      "max_temp": 20.625,
      "the_temp": 19.28,
    },
    {
      "weather_state_abbr": "hc",
      "applicable_date": "2019-11-07",
      "min_temp": 12,
      "max_temp": 20.625,
      "the_temp": 19.28,
    },
    {
      "weather_state_abbr": "hc",
      "applicable_date": "2019-11-08",
      "min_temp": 13,
      "max_temp": 20.625,
      "the_temp": 19.28,
    },
    {
      "weather_state_abbr": "hc",
      "applicable_date": "2019-11-08",
      "min_temp": 14,
      "max_temp": 20.625,
      "the_temp": 19.28,
    },
  ],
  "title": "San Francisco",
  "woeid": 2487956,
}]
const retrievedDataMock = true

test('CityForecast Displays accurate data', () => {
  const container = document.createElement('div')
  ReactDOM.render(
    <Router initialEntries={['/cityForecast/San Francisco']}>
      <Route path='/cityForecast/:cityName'>
        <CityForecast cityData={cityDataMock} retrievedData={retrievedDataMock} />
      </Route>
    </Router>
    , container)

  const [cityNameH1] = container.querySelectorAll('h1')
  const forecastCards = container.querySelectorAll('.forecastCard')

  expect(cityNameH1.textContent).toEqual('San Francisco')
  expect(forecastCards.length).toEqual(5)
});