import React from 'react'
import { Link } from 'react-router';
import SessionStore from '../store/session';
/********To reset the last Stores of my last config**********/
import cafe from '../store/cafeStore'
import ife from '../store/ifeStore'
import lighting from '../store/lightingStore'
import onOff from '../store/onOffStore'
import priceCab from '../store/priceCabin'
import PriceGlob from '../store/priceGlobal'
import seats from '../store/seatsStore'
import systems from '../store/systemFlyingToolsStore'
import separator from '../store/separatorStore'


export default class Connect extends React.Component {
constructor(props){
  super(props)
  this.state = {
    gotoPage : "",
    login:"",
    password:"",
    loginCT:"",
    passwordCT:""
  }
}

connectTo(){
  let linkToPage = "";
  let login = $('#login').val()
  let password = $('#password').val()
  if(login == this.state.login && password == this.state.password) linkToPage = "/SelectorConf";
  if(login == this.state.loginCT && password == this.state.passwordCT){
    linkToPage = "/SelectorConf";
    /*reset the stores of the last config*/
    cafe.reset();
    ife.reset();
    lighting.reset();
    onOff.reset();
    priceCab.reset();
    PriceGlob.reset();
    seats.reset();
    systems.reset();
    separator.reset();
  }

  SessionStore.setSession(login);
  this.setState({gotoPage:linkToPage})
}


  componentDidMount(){
    this.getConnections();
  }

getConnections() {
  fetch('/json/connection.json')
  .then(response => response.json())
  .then(data => this.setState(
    {data:data,
    login: data.accounts.accountAirlines[0].login,
    password: data.accounts.accountAirlines[0].password,
    loginCT: data.accounts.accountCT[0].login,
    passwordCT: data.accounts.accountCT[0].password
  }
  ))
  .catch(err => console.error('/json/connection.json', err.toString()))
}

  render() {
    return (
      <div className="connect">
              <img src="img/src/CarréBlancDégradé.png" style={{position:'absolute',top:'0%',right:'3%'}}/>
              <img src="img/src/logoCo.png" style={{position:'absolute',top:'3%',right:'12%'}}/>
              <img src="img/src/5avions.png" style={{width:'100%',height:'100%'}}/>
              <div className="projectConnect">
                <div><input id="login" type="text" className="inputLogin"/></div>
                <div><input id="password" type="password" className="inputPassword"/></div>
                <br></br>
                <div><Link to={this.state.gotoPage} className="btn btn-primary ValidateButton" onMouseOver={this.connectTo.bind(this)}>VALIDATE</Link></div>
              </div>
      </div>
    )
  }
}
