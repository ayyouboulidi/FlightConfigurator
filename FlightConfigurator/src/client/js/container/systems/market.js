
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
      headUp:false,
      atsaw:false,
      gls:false,
    };

  }
  componentWillMount(){
    let value = systemStore.get();
    this.setState({
      runway:value.runway,
      headUp:value.headUp,
      atsaw:value.atsaw,
      gls:value.gls})
    }
    myChangeHandler(event){
      let object = systemStore.get();

      let selectedDrop = event.target.id
      console.log(selectedDrop)
      let val = ($('#'+selectedDrop+':checked').val() === "yes" ? true : false);

      object[selectedDrop] = val
      this.setState(object)
      systemStore.setSystem(object)

      PriceGlobalStore.setPriceGlobal(globalPricing())
      PriceSystemStore.setPriceSystem(systemPricing())
    }

  render() {
    return (
      <div className="imagewrap">
        <img src={this.props.src} className="imagesSystems" />
        <div className="PanelCustomerHead">
          <span className="commercialPackageSize">
          <input type="checkbox" id={this.props.name} style={{margin: '3px 10px 0 0',bottom: '-1px',marginBottom: '10px',fontWeight: '700',fontSize: '20px'}}
            value="yes" onClick={this.myChangeHandler.bind(this)} defaultChecked={this.state[this.props.name]}/>{this.props.text}</span>
          <MarketPopup popup={this.props.popup}/>
        </div>
        <span  className="buttonYes">
            {this.props.title}
        </span>
        <div className="PanelCustomerfooter">
          <span className="commercialPackageSize">${this.props.price}</span>
        </div>
      </div>
    )
  }
}
