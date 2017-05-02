
import React from 'react';
import MarketPopup from '../../ui/elements/marketpopup';
import systemStore from '../../store/systemFlyingToolsStore'
import PriceGlobalStore from '../../store/priceGlobal'
import PriceSystemStore from '../../store/priceSystem'
import {globalPricing} from '../../pricing/globalPricing'
import {systemPricing} from '../../pricing/systemPricing'

export default class Market extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      runway:false,
      onboard:false,
      navigation:false,
      headUp:false,
      atsaw:false,
      dualAdf:false,
      gls:false,
      fls:false,
      dotrops:"dotimg dotimgActive",
      dotehadup:"dotimg",
      src :"img/ROPS.jpg",
      name : "runway",
      title : "ROPS mitigates N°1 source of accidents and insurance claims",
      price : "80000",
    };

  }
  componentWillMount(){
    let value = systemStore.get();
    this.setState({
      runway:value.runway,
      onboard:value.onboard,
      navigation:value.navigation,
      headUp:value.headUp,
      atsaw:value.atsaw,
      dualAdf:value.dualAdf,
      gls:value.gls,
      fls:value.fls})
    }
    myChangeHandler(event){
      let object = systemStore.get();
      object[this.state.name] = (event.target.value === "No" ? false : true)
      this.setState(object)
      systemStore.setSystem(object)

    //  PriceCabinStore.setPriceCabin(cabinPricing())
      PriceGlobalStore.setPriceGlobal(globalPricing())
      PriceSystemStore.setPriceSystem(systemPricing())
    }
    changeComponent(event){
      let id = event.target.id
      if(id == "rops"){
        this.state.dotrops="dotimg dotimgActive"
        this.state.dotehadup="dotimg"
        this.state.src = "img/ROPS.jpg"
        this.state.name = "runway"
        this.state.title = "ROPS mitigates N°1 source of accidents and insurance claims"
        this.state.price = "80000"
        this.setState(this.state)
      }else{
        this.state.dotrops="dotimg"
        this.state.dotehadup="dotimg dotimgActive"
        this.state.src = "img/Dual Huds.jpg"
        this.state.name = "headUp"
        this.state.title = "Chinese Authorities (CAAC) issued a mandate making HUD required for Chinese registered airlines"
        this.state.price = "55400"
        this.setState(this.state)
      }
    }
  render() {
    return (
      <div className="imagewrap">
        <img src={this.state.src} className="imagesSystems" />
        <div className="pricecontent">{this.state.price}</div>
        <img src="img/dollars.png" className="priceDollars"/>
        <div className="PanelCustomer">
          <span className="commercialPackageSize">{this.state.title}</span>
          <MarketPopup/>
        </div>
        <div className="DotSelector">
          <div id="rops" className={this.state.dotrops} onClick={this.changeComponent.bind(this)}>1</div>
          <div id="headup" className={this.state.dotehadup} onClick={this.changeComponent.bind(this)}>2</div>
        </div>
        <select className="buttonYes commercialSelect"
          onChange={this.myChangeHandler.bind(this)}
          value={this.state[this.state.name]?"Yes":"No"}>
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
      </div>
    )
  }
}
