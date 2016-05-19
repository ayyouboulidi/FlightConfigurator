import React from 'react'
import Collapse from 'react-collapse'
import PriceCabinStore from '../../store/priceCabin'
import PriceGlobalStore from '../../store/priceGlobal'
import ComponentStore from '../../store/selectedComponent'
import cafeStore from '../../store/cafeStore'
import OnOffStore from '../../store/onOffStore'
import CustoCafeStore from '../../store/custocafeStore'
import DescriptionCabin from './descriptionCabin'
import {cabinPricing} from '../../pricing/cabinPricing'
import {globalPricing} from '../../pricing/globalPricing'
import {formatter} from '../../pricing/formatter'
export default class CafeOff extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description:8,
      lavatoryPrice:153900,
      galleyG4Price: 70000,
      galleyG5Price: 122500,
      SpaceflexPrice:307800,
      GalleyG4aPrice:70000,
      lavatoryCafe:false,
      galleyG4: false,
      galleyG5: false,
      Spaceflex:false,
      GalleyG4a:false,
      lavatoryCafeCusto:"Standard",
      galleyG4Custo: "Standard",
      galleyG5Custo: "Standard",
      SpaceflexCusto:"Standard",
      GalleyG4aCusto:"Standard",
    }
  }
  componentDidMount(){
    this.setState({
      GalleyG4a:cafeStore.get().GalleyG4a,
      lavatoryCafe:cafeStore.get().lavatoryCafe,
      galleyG4: cafeStore.get().galleyG4,
      galleyG5: cafeStore.get().galleyG5,
      Spaceflex:cafeStore.get().Spaceflex,
      GalleyG4aCusto:CustoCafeStore.get().GalleyG4aCusto,
      lavatoryCafeCusto:CustoCafeStore.get().lavatoryCafeCusto,
      galleyG4Custo: CustoCafeStore.get().galleyG4Custo,
      galleyG5Custo: CustoCafeStore.get().galleyG5Custo,
      SpaceflexCusto:CustoCafeStore.get().SpaceflexCusto,
    })
  }

  validate(){
    ComponentStore.selectAircraftComponent([false,""])

    let GalleyG4a = ($('#GalleyG4a:checked').val() === "yes" ? true : false);
    let lavatoryCafe = ($('#lavatoryCafe:checked').val() === "yes" ? true : false);
    let galleyG4 = ($('#galleyG4:checked').val() === "yes" ? true : false);
    let galleyG5 = ($('#galleyG5:checked').val() === "yes" ? true : false);
    let Spaceflex = ($('#Spaceflex:checked').val() === "yes" ? true : false);

    let UpdateOnOffSeats = OnOffStore.get()
    console.log(UpdateOnOffSeats)
    UpdateOnOffSeats.cafe = "On"
    console.log(UpdateOnOffSeats)
    UpdateOnOffSeats.Toilets = "On"
    console.log(UpdateOnOffSeats)
    OnOffStore.setOnOffObject(UpdateOnOffSeats)

    cafeStore.setCafe({GalleyG4a:GalleyG4a,lavatoryCafe:lavatoryCafe,galleyG4:galleyG4,galleyG5:galleyG5,Spaceflex:Spaceflex})
    CustoCafeStore.setCustoCafe({GalleyG4a:this.state.GalleyG4aCusto,
      lavatoryCafe:this.state.lavatoryCafeCusto,
      galleyG4:this.state.galleyG4Custo,
      galleyG5:this.state.galleyG5Custo,
      Spaceflex:this.state.SpaceflexCusto})
      PriceCabinStore.setPriceCabin(cabinPricing())
      PriceGlobalStore.setPriceGlobal(globalPricing())
    }

    myChangeHandler(event){
      console.log(event.target.value)
      let result = event.target.value
      let lavatoryPrice = this.state.lavatoryPrice
      let galleyG4Price = this.state.galleyG4Price
      let galleyG5Price= this.state.galleyG5Price
      let SpaceflexPrice= this.state.SpaceflexPrice
      let GalleyG4aPrice= this.state.GalleyG4aPrice

      let lavatoryCusto = this.state.lavatoryCusto
      let galleyG4Custo = this.state.galleyG4Custo
      let galleyG5Custo= this.state.galleyG5Custo
      let SpaceflexCusto= this.state.SpaceflexCusto
      let GalleyG4aCusto= this.state.GalleyG4aCusto

      if(result === "Effecient" || result === "Confort" || result === "Standard"){
        lavatoryPrice = (result === "Effecient" ? 1888900 : result === "Confort" ? 163900 : 153900)
        lavatoryCusto = result
      }
      else if(result === "StandardgalleyG4" || result === "EffecientgalleyG4s" || result === "ConfortgalleyG4"){
        galleyG4Price = (result === "EffecientgalleyG4s" ? 114800 : result === "ConfortgalleyG4" ? 85000 : 70000)
        galleyG4Custo = (result === "EffecientgalleyG4s" ? "Efficient" : result === "ConfortgalleyG4" ? "Comfort" : "Standard")
      }
      else if(result === "StandardgalleyG5" || result === "EffecientgalleyG5" || result === "ConfortgalleyG5"){
        galleyG5Price = (result === "EffecientgalleyG5" ? 167300 : result === "ConfortgalleyG5" ? 137500 : 122500)
        galleyG5Custo = (result === "EffecientgalleyG5" ? "Efficient" : result === "ConfortgalleyG5" ? "Comfort" : "Standard")
      }
      else if(result === "StandardSpaceflex" || result === "EffecientSpaceflex" || result === "ConfortSpaceflex"){
        SpaceflexPrice = (result === "EffecientSpaceflex" ? 377800 : result === "ConfortSpaceflex" ? 327800 : 307800)
        SpaceflexCusto = (result === "EffecientSpaceflex" ? "Efficient" : result === "ConfortSpaceflex" ? "Comfort" : "Standard")
      }else{
        GalleyG4aPrice = (result === "EffecientGalleyG4a" ? 114800 : result === "ConfortGalleyG4a" ? 85000 : 70000)
        GalleyG4aCusto = (result === "EffecientGalleyG4a" ? "Efficient" : result === "ConfortGalleyG4a" ? "Comfort" : "Standard")
      }
      this.setState({
        lavatoryPrice:lavatoryPrice,
        galleyG4Price: galleyG4Price,
        galleyG5Price: galleyG5Price,
        SpaceflexPrice: SpaceflexPrice,
        GalleyG4aPrice:GalleyG4aPrice,
        lavatoryCusto:lavatoryCusto,
        galleyG4Custo: galleyG4Custo,
        galleyG5Custo: galleyG5Custo,
        SpaceflexCusto: SpaceflexCusto,
        GalleyG4aCusto:GalleyG4aCusto,
      })
    }

    myChangeCheck(event){
      let myCheckBox = event.target.id;

      if(myCheckBox === "lavatoryCafe" || myCheckBox === "galleyG4" || myCheckBox === "galleyG5" ){
        $("#GalleyG4a").prop("checked", false);
        $("#Spaceflex").prop("checked", false);
      }else if(myCheckBox === "GalleyG4a" || myCheckBox === "Spaceflex"){
        $("#lavatoryCafe").prop("checked", false);
        $("#galleyG4").prop("checked", false);
        $("#galleyG5").prop("checked", false);
      }
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
        <td><input type="checkbox" id="lavatoryCafe" value="yes" defaultChecked={this.state.lavatoryCafe} onClick={this.myChangeCheck.bind(this)}/></td>
        <td className="tdSolidBorderLeft"><label labelFor="lavatoryCafe" onClick={() =>{this.setState({description:8})}} className={this.state.description == 8 ? "selectedElement" : ""}>Lavatory</label></td>
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
        <td><input type="checkbox" id="galleyG4" value="yes" defaultChecked={this.state.galleyG4} onClick={this.myChangeCheck.bind(this)}/></td>
        <td className="tdSolidBorderLeft"><label labelFor="galleyG4" onClick={() =>{this.setState({description:12})}} className={this.state.description == 12 ? "selectedElement" : ""}>galleyG4 4FS</label></td>
        <td className="tdSolidBorder">{formatter(this.state.galleyG4Price)}</td>
        <td>
        <select onChange={this.myChangeHandler.bind(this)}>
        <option value="StandardgalleyG4">Standard</option>
        <option value="EffecientgalleyG4s">Efficient</option>
        <option value="ConfortgalleyG4">Comfort</option>
        </select>
        </td>
        </tr>

        <tr>
        <td><input type="checkbox" id="galleyG5" value="yes" defaultChecked={this.state.galleyG5} onClick={this.myChangeCheck.bind(this)}/></td>
        <td className="tdSolidBorderLeft"><label labelFor="galleyG5" onClick={() =>{this.setState({description:13})}} className={this.state.description == 13 ? "selectedElement" : ""}>galleyG5 7fs</label></td>
        <td className="tdSolidBorder">{formatter(this.state.galleyG5Price)}</td>
        <td><select onChange={this.myChangeHandler.bind(this)}>
        <option value="StandardgalleyG5">Standard</option>
        <option value="EffecientgalleyG5">Efficient</option>
        <option value="ConfortgalleyG5">Comfort</option>
        </select>
        </td>
        </tr>

        <tr>
        <td><input type="checkbox" id="Spaceflex" value="yes" defaultChecked={this.state.Spaceflex} onClick={this.myChangeCheck.bind(this)}/></td>
        <td className="tdSolidBorderLeft"><label labelFor="Spaceflex" onClick={() =>{this.setState({description:14})}} className={this.state.description == 14 ? "selectedElement" : ""}>Spaceflex</label></td>
        <td className="tdSolidBorder">{formatter(this.state.SpaceflexPrice)}</td>
        <td>
        <select onChange={this.myChangeHandler.bind(this)}>
        <option value="StandardSpaceflex">Standard</option>
        <option value="EffecientSpaceflex">Efficient</option>
        <option value="ConfortSpaceflex">Comfort</option>
        </select>
        </td>
        </tr>

        <tr>
        <td><input type="checkbox" id="GalleyG4a" value="yes" defaultChecked={this.state.GalleyG4a} onClick={this.myChangeCheck.bind(this)}/></td>
        <td className="tdSolidBorderLeft"><label labelFor="GalleyG4a" onClick={() =>{this.setState({description:15})}} className={this.state.description == 15 ? "selectedElement" : ""}>GalleyG4a</label></td>
        <td className="tdSolidBorder">{formatter(this.state.GalleyG4aPrice)}</td>
        <td>
        <select onChange={this.myChangeHandler.bind(this)}>
        <option value="StandardGalleyG4a">Standard</option>
        <option value="EffecientGalleyG4a">Efficient</option>
        <option value="ConfortGalleyG4a">Comfort</option>
        </select>
        </td>
        </tr>
        </tbody>
        </table>
        </div>
        <button className="btn btn-primary ValidateButton" style={{position:'absolute',float:'right',right:'23px',marginTop:'230px'}} onClick={this.validate.bind(this)}>VALIDATE</button>
        <DescriptionCabin value={this.state.description}/>
        </Collapse>
      )
    }
  }
