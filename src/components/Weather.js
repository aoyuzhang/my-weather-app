import React from 'react';
import moment from 'moment';
import '../App.css';
import{ Card } from 'semantic-ui-react'

const Weather = ({weatherData}) => (
  <div className = "main">
    <p className = "header">{weatherData.name}</p>
    <div>
      <p className = "day">Day: {moment().format('dddd')}</p>
    </div>
    <div>
      <p className = "temp">Temperature: {weatherData.main.temp} &deg;C</p>
    </div>
  </div>


  // <Card>
  //   <Card.Content>
  //     <Card.Header className = "header">{weatherData.name} </Card.Header>
  //     <p>Temprature: {weatherData.main.temp} &deg;C </p>
  //     <p>Sunrise: {new Date(weatherData.sys.sunrise *1000).toLocaleTimeString('en-IN')} </p>
  //     <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
  //     <p>Description: {weatherData.weather[0].main}</p>
  //     <p>Humidity: {weatherData.main.humidity} %</p>
  //     <p>Day: {moment().format('dddd')}</p>
  //     <p>Date: {moment().format('LL')}</p>
  //   </Card.Content>
  // </Card>
)

export default Weather;
