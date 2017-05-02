import React from 'react'
import {Accordion,Panel} from 'react-bootstrap';
import Menu from '../ui/elements/menu';
import GlobalPrice from '../ui/elements/globalprice';
import Market from './systems/Market';
import SkyLight from 'react-skylight';
import Table from '../ui/elements/table';
import Accor from '../ui/elements/accordion';
import {Link} from 'react-router'
import SessionStore from '../store/session'
import systemStore from '../store/systemFlyingToolsStore'
import PriceSystemStore from '../store/priceSystem'


export default class Systems extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFlipped : false,
      session:'NA',
      flyingtoolsPrice:0,
    }
  }


  componentWillMount() {

    this.state.subscription = PriceSystemStore.getStore$().subscribe((value) => {
      this.state.flyingtoolsPrice = value
      this.setState(this.state)
    });
  }

  componentWillUnmount() {
    this.state.subscription.dispose();
  }

  componentDidMount(){
    this.state.flyingtoolsPrice = PriceSystemStore.get()
    this.state.session = SessionStore.get();
    this.setState(this.state)
  }

  getLastOwnConfig(success) {
    $.ajax({
      url: '/json/data.json'
    })
    .done(success)
    .fail(function() {
      console.error('/json/data.json', err.toString());
    });
  }

  render () {
  return (
      <div>
      <div className="logo"><img src="img/Title.png"/><img src="img/logoAirbusBlanc.png" style={{float:'right'}}/></div>
          <GlobalPrice/>
          <Menu/>
            <Accor eventKey="Flying" title="Flying Tools (ATA 22,31,34)" price={this.state.flyingtoolsPrice}>
              <div style={{width:'80%',margin:'auto'}}>
              <Market name="runway" text="ROPS" src="img/ROPS.jpg" popup="true" title="ROPS mitigates N°1 source of insurance claims" price="80,000"/>
              <Market name="headUp" text="Dual Head-Up" src="img/Dual Huds.jpg" popup="false" title="CAAC issued a mandate making HUD required for Chinese registered airlines" price="488,000"/></div>
              <Table/>
              <div style={{margin:'5px'}}><img src="img/plus.png" style={{cursor:'not-allowed'}}/>add new item</div>
            </Accor>
            <Accor eventKey="Specific" title="Specific Operations (ATA 02,21)" price="0">
            </Accor>
            <Accor eventKey="Cargo" title="Cargo (ATA 11,21,25)" price="0">
            </Accor>
            <Accor eventKey="Cockpit" title="Cockpit & Cabin equipment (ATA 11,21,25)" price="0">
            </Accor>
          <SkyLight  hideOnOverlayClicked ref="add" title="Hi, I'm a simple modal">
              <div style={{color:'black'}}>Hello, I am not implented yet !.</div>
          </SkyLight>
        </div>
      );
  }
}
