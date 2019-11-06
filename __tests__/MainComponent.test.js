import React from 'react'
import ReactDOM from 'react-dom'
import { StaticRouter as Router } from "react-router-dom";

import Main from '../client/components/Main';

test('createAddCityButtons returns right buttons', () => {
  const prefCitiesMock = [{ name: 'new york', id: 2459115 }]
  const setPrefCitiesMock = jest.fn()
  const retrievedDataMock = true

  const container = document.createElement('div')
  ReactDOM.render(<Main cityData={[]} setPrefCities={setPrefCitiesMock} prefCities={prefCitiesMock} retrievedData={retrievedDataMock} />, container)

  const mockButtons = container.querySelectorAll('button')
  const [SF_Button, LA_Button, SEA_Button, AU_Button] = mockButtons
  expect(mockButtons.length).toEqual(4)
  expect(SF_Button.textContent).toEqual('Add, san francisco')
  expect(LA_Button.textContent).toEqual('Add, los angeles')
  expect(SEA_Button.textContent).toEqual('Add, seattle')
  expect(AU_Button.textContent).toEqual('Add, austin')
});

test('creates proper number of CityCards', () => {
  const prefCitiesMock = [{ name: 'new york', id: 2459115 }]
  const setPrefCitiesMock = jest.fn()
  const retrievedDataMock = true
  const cityDataMock = [
    {
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
    },
  ]
  const container = document.createElement('div')
  ReactDOM.render(
    <Router>
      <Main cityData={cityDataMock} setPrefCities={setPrefCitiesMock} prefCities={prefCitiesMock} retrievedData={retrievedDataMock} />
    </Router>
    , container)

  const [SF_Card] = container.querySelectorAll('h3')
  expect(SF_Card.textContent).toEqual('San Francisco  66.7 °F')
});