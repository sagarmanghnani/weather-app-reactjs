import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import '../css/forms.css';
import { withStyles } from '@material-ui/core/styles';
import {Grid, Row, Col} from 'react-bootstrap';
export class Forms extends Component {


    

  render() {
    return (
      <Grid>
        <form onSubmit={this.props.loadWeather}>
        <Row className = "setMargin locationAlign">
          <Col md={6} lg={6}>
            <label className = "row">Name</label>
            <Input type = "text" name="city" placeholder="City" className = "input row"/>
          </Col>
          <Col md={6} lg={6}>
            <label className = "row">Country</label>
            <Input type = "text" name = "country" placeholder="Country" className = "input row"/>
          </Col>
        </Row>
          <Row className = "locationAlign">
            <button type = "submit" className = "btn bttning">Submit</button>
          </Row>
        </form>
      </Grid>
    )
  }
}

export default Forms
