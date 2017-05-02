import React from 'react'

import Input from '../../ui/elements/input'
import Menu from '../../ui/elements/Menu'
import ComponentStore from '../../store/selectedComponent'
import OnOffStore from '../../store/onOffStore'
import BusinessOff from './businessOff'
import SeatOff from './seatOff'
import CafeOff from './cafeOff'
import Separator from './separator'
import Lighting from './lighting'


export default class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      component : 'NA',
    }
  }

  componentWillMount() {
    this.state.subscription = ComponentStore.getStore$().subscribe((value) => {
      this.state.component = value[1]
      let UpdateOnOff = OnOffStore.get()
      let objectOnOff = Object.keys(UpdateOnOff).map((k) => UpdateOnOff[k])
      Object.keys(UpdateOnOff).map(function (value,key) {
        console.log(objectOnOff[key],value)
        if(objectOnOff[key] === "Active" ){
          UpdateOnOff[value]="Off"
          OnOffStore.setOnOffObject(UpdateOnOff)
        }else if(objectOnOff[key] === "1OnActive"){
          UpdateOnOff[value]="1On"
          OnOffStore.setOnOffObject(UpdateOnOff)
        }else if(objectOnOff[key] === "2OnActive"){
          UpdateOnOff[value]="2On"
          OnOffStore.setOnOffObject(UpdateOnOff)
        }else if(objectOnOff[key] === "3OnActive"){
          UpdateOnOff[value]="3On"
          OnOffStore.setOnOffObject(UpdateOnOff)
        }else if(objectOnOff[key] === "SFActive"){
          UpdateOnOff[value]="SFOn"
          OnOffStore.setOnOffObject(UpdateOnOff)
        }
      })
      let val = value[1].split(/(?=[A-Z])/)[0];
      val === "Business" ? val = "BusinessSeat"
      : (val ==="Ampoule"? val = "Lighting"
      : (val ==="toilets" ? val="Toilets"
      : (val ==="toiletsX2" ? val ="Toilets"
      :(val ==="Cafe"?val = "cafe"
      :(val==="separator1" ||val==="separator2"||val==="separator3" ? val = "separator" : val)) )))

      UpdateOnOff[val]==="1On" ||UpdateOnOff[val]==="2On" || UpdateOnOff[val]==="3On" ?
      UpdateOnOff[val] = UpdateOnOff[val]+"Active"
      :(val ==="cafe" || val === "Toilets" ?
      (UpdateOnOff[val]==="SFOn" ||UpdateOnOff[val]==="X2On" ?
      UpdateOnOff["cafe"] = UpdateOnOff["Toilets"] = "SFActive"
      : (UpdateOnOff["Toilets"]==="OnG5"? UpdateOnOff["cafe"] = UpdateOnOff["Toilets"] = "G5Active" : UpdateOnOff["cafe"] = UpdateOnOff["Toilets"] = "Active"))
      :
      UpdateOnOff[val] = "Active"
    )
    OnOffStore.setOnOffObject(UpdateOnOff)
    this.setState(this.state)
  });
}

componentWillUnmount() {
  this.state.subscription.dispose();
}

render() {
  let value = this.state.component;
  return (
    value == "BusinessOff" || value == "BusinessOn" || value == "BusinessActive" ?
    <BusinessOff/> :
    value == "SeatOff" || value == "SeatOn"|| value == "SeatActive" ?
    <SeatOff/> :
    value == "CafeSFOff" || value == "CafeSFOn"
    || value == "toiletsX2Off" || value == "toiletsX2On" || value == "CafeOff"
    || value == "CafeOn" || value == "toiletsOff" || value == "toiletsOn" || value == "toiletsOnG5"
    || value == "CafeSFActive" || value == "toiletsX2Active" || value == "CafeActive"  || value == "toiletsActive"  ?
    <CafeOff/> :
    value == "separatorOn" ||value == "separator1On"||value == "separator2On"||value == "separator3On" || value == "separatorOff" ||
    value == "separatorActive" ||value == "separator1OnActive"||value == "separator2OnActive"||value == "separator3OnActive"  ?
    <Separator/>:
    value == "AmpouleOff" || value == "AmpouleOn" || value == "AmpouleActive" ?
    <Lighting/>:
    null
  )
}
}
