# Weather App

### Description of app architecture
  - **App component** renders and passes down props to the `<Main />` or `<CityForecast />` component depending on the particular route. As soon as the dom elements are mounted, a `useEffect` hook is triggered to start the process of fetching data - thus, triggering a rerender to pass down the new information to its child components.
  
  - **Main component** displays a `<CityCard />` component for all prefered cities (along with current temperature) that were saved in local storage. The Main component also renders `<buttons>` representing all non-prefered cities. On an onClick event, the button will add its respective city to the prefered list.
  
  - **CityForecast component** uses route parameters to determine which city forecast to display. The data is filtered using the route parameters and renders the current temperature along with a five day forecast using the `<ForecastCard />` component
  
### Description of any trade-offs made
  - Implemented React hooks to make code slightly more readable
  
### Description of how to run within the device simulator
    npm install
    npm run dev
    
#### MAY HAVE TO INSTALL Moesif CORS CHROME EXT TO FIX CORS ISSUE

