import React from 'react'
import { Link } from 'react-router';


export default class AircraftSelectCT extends React.Component {

  render() {
    return (
      <div>
        <div className="logo"><img src="img/Title.png"/><img src="img/logoAirbusBlanc.png" style={{float:'right'}}/></div>
        <div>Customer Care</div>
        <div><img src="img/A380.JPG" style={{margin:'auto',display:'block'}}/></div>
        <Link to="/AircraftSelectCT" className="btn btn-danger ValidateButton">Home Page</Link>
      </div>
    )
  }
}
