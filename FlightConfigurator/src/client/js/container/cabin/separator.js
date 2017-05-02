import React from 'react'
import Collapse from 'react-collapse'
import PriceCabinStore from '../../store/priceCabin'
import PriceGlobalStore from '../../store/priceGlobal'
import ComponentStore from '../../store/selectedComponent'
import SeparatorStore from '../../store/separatorStore'
import OnOffStore from '../../store/onOffStore'
import CustoStore from '../../store/custoStore'
import DescriptionCabin from './descriptionCabin'
import {cabinPricing} from '../../pricing/cabinPricing'
import {globalPricing} from '../../pricing/globalPricing'
import {formatter} from '../../pricing/formatter'

export default class Separator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description:7,
      windScreen:true,
      lavatoryPrice:153900,
      galleyG3DryHsPrice: 97400,
      galleyG3DryFsPrice: 123650,
      galleyG3WetFsPrice:123650,
      lavatory:false,
      galleyG3DryHs: false,
      galleyG3DryFs: false,
      galleyG3WetFs:false,
      lavatoryCusto:"Standard",
      galleyG3DryHsCusto: "Standard",
      galleyG3DryFsCusto: "Standard",
      galleyG3WetFsCusto:"Standard",
      check:"windScreen",
    }
  }
  componentDidMount(){
    this.setState({
      windScreen:SeparatorStore.get().windScreen,
      lavatory:SeparatorStore.get().lavatory,
      galleyG3DryHs: SeparatorStore.get().galleyG3DryHs,
      galleyG3DryFs: SeparatorStore.get().galleyG3DryFs,
      galleyG3WetFs:SeparatorStore.get().galleyG3WetFs,
      lavatoryCusto:CustoStore.get().lavatoryCusto,
      galleyG3DryHsCusto: CustoStore.get().galleyG3DryHsCusto,
      galleyG3DryFsCusto: CustoStore.get().galleyG3DryFsCusto,
      galleyG3WetFsCusto:CustoStore.get().galleyG3WetFsCusto,
  })
  }

  validate(){
    ComponentStore.selectAircraftComponent([false,""])

    let windScreen = ($('#windScreen:checked').val() === "yes" ? true : false);
    let lavatory = ($('#lavatory:checked').val() === "yes" ? true : false);
    let galleyG3DryHs = ($('#galleyG3DryHs:checked').val() === "yes" ? true : false);
    let galleyG3DryFs = ($('#galleyG3DryFs:checked').val() === "yes" ? true : false);
    let galleyG3WetFs = ($('#galleyG3WetFs:checked').val() === "yes" ? true : false);
    let UpdateOnOffSeats = OnOffStore.get()

    if(windScreen){
      UpdateOnOffSeats.separator = "On"
    }else if(lavatory){
      UpdateOnOffSeats.separator = "1On"
    }else{
      UpdateOnOffSeats.separator = "3On"
    }

    OnOffStore.setOnOffObject(UpdateOnOffSeats)

    SeparatorStore.setSeparator({windScreen:windScreen,lavatory:lavatory,galleyG3DryHs:galleyG3DryHs,galleyG3DryFs:galleyG3DryFs,galleyG3WetFs:galleyG3WetFs})

    PriceCabinStore.setPriceCabin(cabinPricing())
    PriceGlobalStore.setPriceGlobal(globalPricing())
  }

  myChangeHandler(event){
    let result = event.target.value
    let lavatoryPrice = this.state.lavatoryPrice
    let galleyG3DryHsPrice = this.state.galleyG3DryHsPrice
    let galleyG3DryFsPrice= this.state.galleyG3DryFsPrice
    let galleyG3WetFsPrice= this.state.galleyG3WetFsPrice

    let lavatoryCusto = this.state.lavatoryCusto
    let galleyG3DryHsCusto = this.state.galleyG3DryHsCusto
    let galleyG3DryFsCusto= this.state.galleyG3DryFsCusto
    let galleyG3WetFsCusto= this.state.galleyG3WetFsCusto

    if(result === "Effecient" || result === "Confort" || result === "Standard"){
       lavatoryPrice = (result === "Effecient" ? 163900 : result === "Confort" ? 188890 : 153900)
       lavatoryCusto = (result === "Effecient" ? "Efficient" : result === "Confort" ? "Comfort" : "Standard")
    }
    else if(result === "EffecientgalleyG3DryHs" || result === "ConfortgalleyG3DryHs" || result === "StandardgalleyG3DryHs"){
       galleyG3DryHsPrice = (result === "EffecientgalleyG3DryHs" ? 112400 : result === "ConfortgalleyG3DryHs" ? 142300 : 97400)
       galleyG3DryHsCusto = (result === "EffecientgalleyG3DryHs" ? "Efficient" : result === "ConfortgalleyG3DryHs" ? "Comfort" : "Standard")
    }
    else if(result === "EffecientgalleyG3DryFs" || result === "ConfortgalleyG3DryFs" || result === "StandardgalleyG3DryFs"){
       galleyG3DryFsPrice = (result === "EffecientgalleyG3DryFs" ? 138650 : result === "ConfortgalleyG3DryFs" ? 168500 : 123650)
       galleyG3DryFsCusto = (result === "EffecientgalleyG3DryFs" ? "Efficient" : result === "ConfortgalleyG3DryFs" ? "Comfort" : "Standard")
    }else{
       galleyG3WetFsPrice = (result === "EffecientgalleyG3WetFs" ? 138650 : result === "ConfortgalleyG3WetFs" ? 168500 : 123650)
       galleyG3WetFsCusto = (result === "EffecientgalleyG3WetFs" ? "Efficient" : result === "ConfortgalleyG3WetFs" ? "Comfort" : "Standard")
       galleyG3WetFsCusto === "Standard" ? this.setState({description:11}) : galleyG3WetFsCusto === "Efficient" ? this.setState({description:20}) : this.setState({description:21})
    }
    this.setState({
      lavatoryPrice:lavatoryPrice,
      galleyG3DryHsPrice: galleyG3DryHsPrice,
      galleyG3DryFsPrice: galleyG3DryFsPrice,
      galleyG3WetFsPrice:galleyG3WetFsPrice,
      lavatoryCusto:lavatoryCusto,
      galleyG3DryHsCusto:galleyG3DryHsCusto,
      galleyG3DryFsCusto:galleyG3DryFsCusto,
      galleyG3WetFsCusto:galleyG3WetFsCusto
    })
    CustoStore.setCusto({lavatory:lavatoryCusto,
          galleyG3DryHs:galleyG3DryHsCusto,
          galleyG3DryFs:galleyG3DryFsCusto,
          galleyG3WetFs:galleyG3WetFsCusto})
    console.log(CustoStore.get())
  }
  myChangeCheck(event){
    let myCheckBox = event.target.id;

    myCheckBox != "windScreen" ? $("#windScreen").prop("checked", false) : $("#windScreen").prop("checked", true)
    myCheckBox != "lavatory" ? $("#lavatory").prop("checked", false) : $("#lavatory").prop("checked", true)
    myCheckBox != "galleyG3DryHs" ? $("#galleyG3DryHs").prop("checked", false) : $("#galleyG3DryHs").prop("checked", true)
    myCheckBox != "galleyG3DryFs" ? $("#galleyG3DryFs").prop("checked", false) : $("#galleyG3DryFs").prop("checked", true)
    myCheckBox != "galleyG3WetFs" ? $("#galleyG3WetFs").prop("checked", false) : $("#galleyG3WetFs").prop("checked", true)
    myCheckBox === "windScreen" ? this.state.description = 7
      : (myCheckBox === "lavatory" ? this.state.description = 8
          :(myCheckBox === "galleyG3DryHs" ? this.state.description = 9
              :(myCheckBox === "galleyG3DryFs" ? this.state.description = 10
                  :(myCheckBox === "galleyG3WetFs" ? this.state.description = 11 : null ))))


    this.setState(this.state)
  }
  render() {
    return (
      <Collapse isOpened={true} className="choicesPanel" fixedHeight={330}>
          <div className="backgroundTitle">
          <div className="selectConfStyle"><span>SELECT</span></div>
          </div>
          <div className="leftPanel">
          <table className="configTable">
            <tbody>
              <tr>
                <td><input type="checkbox" id="windScreen" value="yes" defaultChecked={this.state.windScreen} onClick={this.myChangeCheck.bind(this)}/></td>
                <td className="tdSolidBorderLeft"><label  style={{marginLeft:"36px"}} labelFor="windScreen" onClick={() =>{this.setState({description:7})}} className={this.state.description == 7 ? "selectedElement" : ""}>Wind Screen</label></td>
                <td className="tdSolidBorder">{formatter(29000)}</td>
              </tr>
              <tr>
                <td><input type="checkbox" id="lavatory" value="yes" defaultChecked={this.state.lavatory} onClick={this.myChangeCheck.bind(this)}/></td>
                <td className="tdSolidBorderLeft">
                <img src="img/src/toiletsblanc.png" style={{marginRight:"10px"}}/>
                <label labelFor="lavatory" onClick={() =>{this.setState({description:8})}} className={this.state.description == 8 ? "selectedElement" : ""}>Lavatory</label></td>
                <td className="tdSolidBorder">{formatter(this.state.lavatoryPrice)}</td>
                <td>
                  <select onChange={this.myChangeHandler.bind(this)}>
                    <option value="Standard">Standard</option>
                    <option value="Effecient">Efficient</option>
                    <option value="Confort">Comfort</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" id="galleyG3DryHs" value="yes" defaultChecked={this.state.galleyG3DryHs} onClick={this.myChangeCheck.bind(this)}/></td>
                <td className="tdSolidBorderLeft">
                <img src="img/src/galleyblanc.png" style={{marginRight:"10px"}}/>
                <label labelFor="galleyG3DryHs" onClick={() =>{this.setState({description:9})}} className={this.state.description == 9 ? "selectedElement" : ""}>Galley G3 Dry HS</label></td>
                <td className="tdSolidBorder">{formatter(this.state.galleyG3DryHsPrice)}</td>
                <td>
                  <select onChange={this.myChangeHandler.bind(this)}>
                    <option value="StandardgalleyG3DryHs">Standard</option>
                    <option value="EffecientgalleyG3DryHs">Efficient</option>
                    <option value="ConfortgalleyG3DryHs">Comfort</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" id="galleyG3DryFs" value="yes" defaultChecked={this.state.galleyG3DryFs} onClick={this.myChangeCheck.bind(this)}/></td>
                <td  className="tdSolidBorderLeft">
                <img src="img/src/galleyblanc.png" style={{marginRight:"10px"}}/>
                <label labelFor="galleyG3DryFs" onClick={() =>{this.setState({description:10})}} className={this.state.description == 10 ? "selectedElement" : ""}>Galley G3 Dry FS</label></td>
                <td  className="tdSolidBorder">{formatter(this.state.galleyG3DryFsPrice)}</td>
                <td>
                  <select  onChange={this.myChangeHandler.bind(this)}>
                    <option value="StandardgalleyG3DryFs">Standard</option>
                    <option value="EffecientgalleyG3DryFs">Efficient</option>
                    <option value="ConfortgalleyG3DryFs">Comfort</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" id="galleyG3WetFs" value="yes" defaultChecked={this.state.galleyG3WetFs} onClick={this.myChangeCheck.bind(this)}/></td>
                <td className="tdSolidBorderLeft">
                <img src="img/src/galleyblanc.png" style={{marginRight:"10px"}}/>
                <label labelFor="galleyG3WetFs" onClick={() =>{this.setState({description:11})}} className={this.state.description == 11 ||this.state.description == 21 || this.state.description ==20 ? "selectedElement" : ""}>Galley G3 Wet FS</label></td>
                <td className="tdSolidBorder">{formatter(this.state.galleyG3WetFsPrice)}</td>
                <td>
                  <select onChange={this.myChangeHandler.bind(this)}>
                    <option value="StandardgalleyG3WetFs">Standard</option>
                    <option value="EffecientgalleyG3WetFs">Efficient</option>
                    <option value="ConfortgalleyG3WetFs">Comfort</option>
                  </select>
                </td>
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
