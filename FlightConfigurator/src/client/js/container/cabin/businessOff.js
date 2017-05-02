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

export default class BusinessOff extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      seats: "164",
      premiumSeats:"0",
      businessSeats:"0",
      description:0,
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
    let valueOnOff = OnOffStore.get();
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
      let numberOfBusinessSeats = parseInt($("#numberBusinessSeats").val());
      let numberOfOverHeadVideo = parseInt($("#OverHeadVideo").val());
      let avod = ($('#avod:checked').val() === "yes" ? true : false);
      let inSeatAudio = ($('#inSeatAudio:checked').val() === "yes" ? true : false);
      let inSeatPower = ($('#inSeatPower:checked').val() === "yes" ? true : false);
      let ClassDivider = ($('#ClassDivider:checked').val() === "yes" ? true : false);

      this.state.businessSeats = numberOfBusinessSeats
      this.state.OverHeadVideo = numberOfOverHeadVideo
      this.setState(this.state)
      IfeStore.setIfe({avodEco:this.state.avodEco,
        inSeatAudioEco:this.state.inSeatAudioEco,
        OverHeadVideoEco:this.state.OverHeadVideoEco,
        inSeatPowerEco:this.state.inSeatPowerEco,
        ClassDivider:ClassDivider,
        avod:avod,
        inSeatAudio:inSeatAudio,
        OverHeadVideo:numberOfOverHeadVideo,
        inSeatPower:inSeatPower})
        SeatsStore.setSeats([numberOfBusinessSeats,this.state.premiumSeats,this.state.seats])

        let UpdateOnOffSeats = OnOffStore.get()
        UpdateOnOffSeats.BusinessSeat = "On"
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
                    <td style={{textAlign:'center'}}><input type="text" id="numberBusinessSeats" onClick={() =>{this.setState({description:0})}}  className="input" defaultValue={this.state.businessSeats}/></td>
                    <td className="tdSolidBorderLeft">
                      <span  style={{marginLeft:"39px"}} onClick={() =>{this.setState({description:0})}} className={this.state.description == 0 ? "selectedElement" : ""}>Business seats </span></td>
                    <td >{formatter(7900)}&emsp; Per unit</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td style={{textAlign:'center'}}><input type="text" onClick={() =>{this.setState({description:3})}} className="input" id="OverHeadVideo" defaultValue={this.state.OverHeadVideo}/></td>
                    <td className="tdSolidBorderLeft">
                      <img src="img/src/overheadblanc.png" style={{marginRight:"13px"}}/>
                      <span onClick={() =>{this.setState({description:3})}} className={this.state.description == 3 ? "selectedElement" : ""}>Overhead video </span> </td>
                    <td >{formatter(9000)}&emsp; Per unit</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td style={{textAlign:'center'}}><input type="checkbox" onClick={() =>{this.setState({description:1})}} id="avod" value="yes" defaultChecked={this.state.avod}/></td>
                    <td className="tdSolidBorderLeft">
                      <img src="img/src/avodblanc.png" style={{marginRight:"13px"}}/>
                      <label labelFor="avod" onClick={() =>{this.setState({description:1})}}  className={this.state.description == 1 ? "selectedElement" : ""}>AVOD</label></td>
                    <td >{formatter(1200)}&emsp; Per unit</td>
                  </tr>
                  <tr>
                    <td style={{textAlign:'center'}}><input type="checkbox" onClick={() =>{this.setState({description:2})}} id="inSeatAudio" value="yes" defaultChecked={this.state.inSeatAudio}/></td>
                    <td className="tdSolidBorderLeft">
                      <img src="img/src/inseataudioblanc.png" style={{marginRight:"13px"}}/>
                      <label labelFor="inSeatAudio" onClick={() =>{this.setState({description:2})}} className={this.state.description == 2 ? "selectedElement" : ""}>In-Seat Audio</label></td>
                    <td >{formatter(440)}&emsp; Per unit</td>
                  </tr>
                  <tr>
                    <td style={{textAlign:'center'}}><input type="checkbox" onClick={() =>{this.setState({description:4})}} id="inSeatPower" value="yes" defaultChecked={this.state.inSeatPower}/></td>
                    <td className="tdSolidBorderLeft">
                      <img src="img/src/inseatpowerblanc.png" style={{marginRight:"13px"}}/>
                      <label labelFor="inSeatPower" onClick={() =>{this.setState({description:4})}} className={this.state.description == 4 ? "selectedElement" : ""}>In-Seat Power</label></td>
                    <td >{formatter(360)}&emsp; Per unit</td>
                  </tr>
                  <tr>
                    <td style={{textAlign:'center'}}><input type="checkbox" onClick={() =>{this.setState({description:22})}} id="ClassDivider" value="yes" defaultChecked={this.state.ClassDivider}/></td>
                    <td className="tdSolidBorderLeft">
                      <label labelFor="ClassDivider" style={{marginLeft:"39px"}} onClick={() =>{this.setState({description:22})}} className={this.state.description == 22 ? "selectedElement" : ""}>Class Divider</label></td>
                    <td ><span style={{marginRight:'72px'}}>{formatter(29000)}</span></td>
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
