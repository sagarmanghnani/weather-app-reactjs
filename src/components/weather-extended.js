import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import '../css/weatherextended.css';
import {Doughnut} from 'react-chartjs-2';
export class Weatherex extends Component {
  render() {

    
    var datas = {
      
        labels:["Humidity"],
        datasets:[{
          labels:"Humidity chart",
          backgroundColor: ['#ec5792','#f28067'],
          //fillColor:gradient,
          data:[this.props.extendWeather.humidity, 100 - this.props.extendWeather.humidity],}]
      
    }
    return (
      <Grid className = "colorText">
        <Row className = "locationAlign">
          <Col>City<span>{this.props.extendWeather.city}</span></Col>
        </Row>

        <Row className = "locationAlign">
          <Col>Country<span>{this.props.extendWeather.country}</span></Col>
        </Row>
        <Row className = "locationAlign">
        <Col>Humidity<span>{this.props.extendWeather.humidity}</span></Col>
        </Row>
        <Row className = "locationAlign">
        <Col>Wind Speed<span>{this.props.extendWeather.windSpeed}</span></Col>
        </Row>
        </Grid>
    )
  }
}

export default Weatherex
