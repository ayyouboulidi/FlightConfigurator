import React from 'react'
import Collapse from 'react-collapse'
import PriceCabinStore from '../../store/priceCabin'
import PriceGlobalStore from '../../store/priceGlobal'
import ComponentStore from '../../store/selectedComponent'
import LightingStore from '../../store/lightingStore'
import OnOffStore from '../../store/onOffStore'
import DescriptionCabin from './descriptionCabin'
import {cabinPricing} from '../../pricing/cabinPricing'
import {globalPricing} from '../../pricing/globalPricing'
import {formatter} from '../../pricing/formatter'

export default class Lighting extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description:16,
      moodlightingPrice: 74100,
      floormountedPrice: 19300,
      ohscHandrailPrice:88500,
      moodlighting: false,
      floormounted: false,
      ohscHandrail:false,
      defaultLight:false,
    }
  }
  componentDidMount(){
    this.setState({
      defaultLight:LightingStore.get().defaultLight,
      moodlighting:LightingStore.get().moodlighting,
      floormounted:LightingStore.get().floormounted,
      ohscHandrail:LightingStore.get().ohscHandrail,
    })
  }

  validate(){
    ComponentStore.selectAircraftComponent([false,""])

    let moodlighting = ($('#moodlighting:checked').val() === "yes" ? true : false);
    let floormounted = ($('#floormounted:checked').val() === "yes" ? true : false);
    let ohscHandrail = ($('#ohscHandrail:checked').val() === "yes" ? true : false);
    let defaultLight = ($('#defaultLight:checked').val() === "yes" ? true : false);
    if(moodlighting || floormounted || ohscHandrail || defaultLight){
      let UpdateOnOffSeats = OnOffStore.get()
      UpdateOnOffSeats.Lighting = "On"
      OnOffStore.setOnOffObject(UpdateOnOffSeats)

      LightingStore.setLighting({defaultLight:defaultLight,moodlighting:moodlighting,floormounted:floormounted,ohscHandrail:ohscHandrail})

      PriceCabinStore.setPriceCabin(cabinPricing())
      PriceGlobalStore.setPriceGlobal(globalPricing())
    }
  }
  render() {
    return (
      <Collapse isOpened={true} className="choicesPanel" fixedHeight={330}>
      <div className="backgroundTitle">
      <div className="selectConfStyle"><span>SELECT</span></div>
      </div>
      <div className="leftPanel">
      <table className="configTable" style={{width:'340px'}}>
      <tbody>
      <tr>
      <td><input type="checkbox" id="defaultLight" value="yes" defaultChecked={this.state.defaultLight}/></td>
      <td className="tdSolidBorderLeft"><label labelFor="defaultLight"  style={{marginLeft:"36px"}}>Default</label></td>
      <td>{formatter(0)}</td>
      </tr>
      <tr>
      <td><input type="checkbox" id="moodlighting" onClick={() =>{this.setState({description:16})}} value="yes" defaultChecked={this.state.moodlighting}/></td>
      <td className="tdSolidBorderLeft">
      <img src="img/src/moodblanc.png" style={{marginRight:"10px"}}/>
      <label labelFor="moodlighting" onClick={() =>{this.setState({description:16})}} className={this.state.description == 16 ? "selectedElement" : ""}>Mood-Lighting</label>
      </td>
      <td>{formatter(74100)}</td>
      </tr>
      <tr>
      <td><input type="checkbox" id="floormounted" onClick={() =>{this.setState({description:17})}} value="yes" defaultChecked={this.state.floormounted}/></td>
      <td className="tdSolidBorderLeft">
      <img src="img/src/FLOOR-MOUNTEDBLANC.png" style={{marginRight:"10px"}}/>
      <label labelFor="floormounted" onClick={() =>{this.setState({description:17})}} className={this.state.description == 17 ? "selectedElement" : ""}>Floor mounted EEPMS</label>
      </td>
      <td>{formatter(19300)}</td>
      </tr>
      <tr>
      <td><input type="checkbox" id="ohscHandrail" onClick={() =>{this.setState({description:18})}} value="yes" defaultChecked={this.state.ohscHandrail}/></td>
      <td className="tdSolidBorderLeft">
      <img src="img/src/HANDRAIBLANC.png" style={{marginRight:"10px"}}/>
      <label labelFor="ohscHandrail" onClick={() =>{this.setState({description:18})}} className={this.state.description == 18 ? "selectedElement" : ""}>OHSC Handrail</label>
      </td>
      <td>{formatter(88500)}</td>
      </tr>
      </tbody>
      </table>
      </div>
      <button className="btn btn-primary ValidateButton" style={{position:'absolute',float:'right',right:'23px',marginTop:'235px'}} onClick={this.validate.bind(this)}>VALIDATE</button>
      <DescriptionCabin value={this.state.description}/>
      </Collapse>
    )
  }
}
