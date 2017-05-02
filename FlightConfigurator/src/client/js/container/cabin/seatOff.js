import React from 'react'
import Collapse from 'react-collapse'
import SeatsStore from '../../store/seatsStore'
import OnOffStore from '../../store/onOffStore'
import DescriptionCabin from './descriptionCabin'
import IfeStore from '../../store/ifeStore'
import PriceCabinStore from '../../store/priceCabin'
import PriceGlobalStore from '../../store/priceGlobal'
import ComponentStore from '../../store/selectedComponent'
import {cabinPricing} from '../../pricing/cabinPricing'
import {globalPricing} from '../../pricing/globalPricing'
import {formatter} from '../../pricing/formatter'

export default class SeatOff extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      seats: "164",
      premiumSeats:"0",
      businessSeats:"0",
      description:19,
      avod:false,
      avodEco:false,
      inSeatAudio:false,
      inSeatAudioEco:false,
      inSeatPower:false,
      inSeatPowerEco:false,
      ClassDivider:false,
      OverHeadVideo:"0",
      OverHeadVideoEco:"0",
    }
  }
  componentDidMount(){
    let value = SeatsStore.get();
    let valueife = IfeStore.get();
    this.setState({
      avod:valueife.avod,
      avodEco:valueife.avodEco,
      inSeatAudio:valueife.inSeatAudio,
      inSeatAudioEco:valueife.inSeatAudioEco,
      inSeatPower:valueife.inSeatPower,
      inSeatPowerEco:valueife.inSeatPowerEco,
      ClassDivider:valueife.ClassDivider,
      OverHeadVideo:valueife.OverHeadVideo,
      OverHeadVideoEco:valueife.OverHeadVideoEco,
      seats:value[2],
      premiumSeats:value[1],
      businessSeats:value[0]})
  }

  validate(){
    ComponentStore.selectAircraftComponent([false,""])
    let numberOfSeats = parseInt($("#numberSeats").val());
    let numberOfOverHeadVideo = parseInt($("#OverHeadVideoEco").val());
    let avod = ($('#avodEco:checked').val() === "yes" ? true : false);
    let inSeatAudio = ($('#inSeatAudioEco:checked').val() === "yes" ? true : false);
    let inSeatPower = ($('#inSeatPowerEco:checked').val() === "yes" ? true : false);
    let priceSeat = ($('input[name=seats]:checked', '#form').val() === "bfe" ? 5000 : 2515 )

    this.state.seats = numberOfSeats
    //this.state.businessSeats = 164 - parseInt(this.state.seats)
    this.state.OverHeadVideoEco = numberOfOverHeadVideo
    this.setState(this.state)
    IfeStore.setIfe({avod:this.state.avod,
      inSeatAudio:this.state.inSeatAudio,
      OverHeadVideo:this.state.OverHeadVideo,
      inSeatPower:this.state.inSeatPower,
      ClassDivider:this.state.ClassDivider,
      avodEco:avod,
      inSeatAudioEco:inSeatAudio,
      OverHeadVideoEco:numberOfOverHeadVideo,
      inSeatPowerEco:inSeatPower})
    SeatsStore.setSeats([this.state.businessSeats,this.state.premiumSeats,numberOfSeats])

    let UpdateOnOffSeats = OnOffStore.get()
    UpdateOnOffSeats.Seat = "On"
    OnOffStore.setOnOffObject(UpdateOnOffSeats)
      PriceCabinStore.setPriceCabin(cabinPricing())
      PriceGlobalStore.setPriceGlobal(globalPricing())
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
                <td style={{textAlign:'center'}}><input className="input" type="text" id="numberSeats" defaultValue={this.state.seats}/></td>
                <td  className="tdSolidBorderLeft">
                  <span style={{marginLeft:"39px"}}>Economic seats</span><br></br>
                  <form  style={{marginLeft:"39px"}} id="form">
                    <input type="radio" name="seats" onClick={() =>{this.setState({description:19})}} value="bfe" defaultChecked={true}/> <span onClick={() =>{this.setState({description:19})}} style={{marginRight:'10px'}} className={this.state.description == 19 ? "selectedElement" : ""}>BFE</span>
                    <input type="radio" onClick={() =>{this.setState({description:6})}}  name="seats" value="sfe"/> <span onClick={() =>{this.setState({description:6})}} className={this.state.description == 6 ? "selectedElement" : ""}>SFE</span>
                  </form>
                </td>
                <td  >{formatter(5100)}&emsp; Per unit</td>
                <td></td>
              </tr>
              <tr>
                <td style={{textAlign:'center'}}><input className="input" onClick={() =>{this.setState({description:3})}} type="text" id="OverHeadVideoEco" defaultValue={this.state.OverHeadVideoEco}/></td>
                <td className="tdSolidBorderLeft">
                  <img src="img/src/overheadblanc.png" style={{marginRight:"13px"}}/>
                  <span onClick={() =>{this.setState({description:3})}} className={this.state.description == 3 ? "selectedElement" : ""}>Overhead video</span> </td>
                <td >{formatter(9000)}&emsp; Per unit</td>
                <td></td>
              </tr>
              <tr>
                <td style={{textAlign:'center'}}><input  onClick={() =>{this.setState({description:1})}} type="checkbox" id="avodEco" value="yes" defaultChecked={this.state.avodEco}/></td>
                <td  className="tdSolidBorderLeft">
                  <img src="img/src/avodblanc.png" style={{marginRight:"13px"}}/>
                  <label labelFor="avod" onClick={() =>{this.setState({description:1})}} className={this.state.description == 1 ? "selectedElement" : ""}>AVOD</label></td>
                <td  >{formatter(1200)}&emsp; Per unit</td>
              </tr>
              <tr>
                <td style={{textAlign:'center'}}><input  onClick={() =>{this.setState({description:2})}} type="checkbox" id="inSeatAudioEco" value="yes" defaultChecked={this.state.inSeatAudioEco}/></td>
                <td className="tdSolidBorderLeft" >
                  <img src="img/src/inseataudioblanc.png" style={{marginRight:"13px"}}/>
                  <label labelFor="inSeatAudioEco" onClick={() =>{this.setState({description:2})}} className={this.state.description == 2 ? "selectedElement" : ""}>In-Seat Audio</label></td>
                <td >{formatter(440)}&emsp; Per unit</td>
              </tr>
              <tr>
                <td  style={{textAlign:'center'}}><input  onClick={() =>{this.setState({description:4})}} type="checkbox" id="inSeatPowerEco" value="yes" defaultChecked={this.state.inSeatPowerEco}/></td>
                <td className="tdSolidBorderLeft">
                  <img src="img/src/inseatpowerblanc.png" style={{marginRight:"13px"}}/>
                  <label labelFor="inSeatPowerEco" onClick={() =>{this.setState({description:4})}} className={this.state.description == 4 ? "selectedElement" : ""}>In-Seat Power</label></td>
                <td >{formatter(360)}&emsp; Per unit</td>
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
