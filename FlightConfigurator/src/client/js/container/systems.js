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

/*  switchFace(){
    this.setState({isFlipped:!this.state.isFlipped})
  }*/

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
  /*  if(this.state.session === "airlines"){
      this.getLastOwnConfig(function success(data){
        systemStore.setSystem(
          {
            runway:data.lastConfig.conf[0].system.flyingTools.runway != undefined ? true : false,
            onboard:data.lastConfig.conf[0].system.flyingTools.onboard != undefined ? true : false,
            navigation:data.lastConfig.conf[0].system.flyingTools.navigation != undefined ? true : false,
            headUp:data.lastConfig.conf[0].system.flyingTools.headUp != undefined ? true : false,
            atsaw:data.lastConfig.conf[0].system.flyingTools.atsaw != undefined ? true : false,
            dualAdf:data.lastConfig.conf[0].system.flyingTools.dualAdf != undefined ? true : false,
            gls:data.lastConfig.conf[0].system.flyingTools.gls != undefined ? true : false,
            fls:data.lastConfig.conf[0].system.flyingTools.fls != undefined ? true : false})
          }
        )
    }*/
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
              <Market/>
              {/*<Market src="img/OANS.jpg" name="onboard" title="Onboard Airport Navigation System " price="488000"/>
              <Market src="img/RNP.jpg" name="navigation" title="Required Navigation Performance" price="100000"/>
              <Market src="img/Dual Huds.jpg" name="headUp" title="Dual Head-Up Display" price="55400"/>*/}
              <Table/>
              {/*<span onClick={() => this.refs.add.show()}><img src="img/plus.png" style={{cursor:'not-allowed'}}/>add new item</span>*/}
              <span ><img src="img/plus.png" style={{cursor:'not-allowed'}}/>add new item</span>
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
