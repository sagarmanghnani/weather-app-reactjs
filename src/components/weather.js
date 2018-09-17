import React, { Component } from 'react';
import '../css/weather.css';
import {Grid, Row, Col} from 'react-bootstrap';
export class Weather extends Component {
  render() {
    var date = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var getDays = weekday[date.getDay()];

    //var dd = date.getDate();
    var today = date.toDateString();
    var displayDate = today.substring(today.indexOf(' '));

    return (
      <Grid>
      <div className = "upadding">
        <Row className = "dateColor">{displayDate}</Row>
        <Row className = "temperature">{this.props.showWeather.temperature}&deg;</Row>
        <Row className = "description">{this.props.showWeather.descriptions}</Row>
      </div>
      
      </Grid>
    )
  }
}

export default Weather;
