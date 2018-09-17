import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Titles from "./components/titles";
import Forms from "./components/forms";
import fetchWeather from './components/api';
import Weather from './components/weather';
import Weatherex from './components/weather-extended';
//import { Grid } from '@material-ui/core';
import {Grid, Row, Col} from 'react-bootstrap';

class App extends Component {
  constructor(){
    super(); //for using this
    
    this.state = {
        city: '',
        country: '',
        temperature:'',
        descriptions:'',
        humidity: '',
        windSpeed:'',
        night:false,
      }
  }

  componentWillMount()
  {
    var defaultCity = "Bangalore";
    var defaultCountry = "India";
    fetchWeather(defaultCity, defaultCountry).then((res) => {
      console.log(res);
      this.setState({
        city:defaultCity,
        country:defaultCountry,
        temperature:Math.round(res.main.temp - 273.15),
        descriptions:res.weather[0].main,
        humidity: res.main.humidity,
        windSpeed: res.wind.speed,
      })
    });
  }

  
  getWeather = async (e) => {
    e.preventDefault();
    
    var Api_Key = "3cf05012b4055608cf3b66234acc1f43";
    var city = e.target.elements.city.value;
    var country = e.target.elements.country.value;
    
    if(city && country)
    {
      fetchWeather(city, country).then((res) =>{
        console.log(res);
        this.setState({
          city: res.name,
          country: res.sys.country,
          temperature: Math.round(res.main.temp - 273.15),
          descriptions:res.weather[0].main,
          humidity: res.main.humidity,
          windSpeed: res.wind.speed,
        })
      });
    }
    

    
    // console.log(result);

    
  }
  render() {
    return (
        <Grid>
          <Row className = "show-grid bodycontainer"> 
            <Col sm={4} lg={4} className = "leftpane"><Weather showWeather = {this.state}/></Col>
            <Col sm = {8} lg = {8} className = "rightpane">
            <Weatherex extendWeather = {this.state}/>
            <Forms loadWeather = {this.getWeather}/>
            </Col>
            
          </Row>
        </Grid>
          
        
      
      
    );
  }
}

export default App;
