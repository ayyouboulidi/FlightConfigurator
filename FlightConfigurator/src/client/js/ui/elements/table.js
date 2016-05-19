
import React from 'react'
import systemStore from '../../store/systemFlyingToolsStore'
import PriceGlobalStore from '../../store/priceGlobal'
import PriceSystemStore from '../../store/priceSystem'
import {globalPricing} from '../../pricing/globalPricing'
import {systemPricing} from '../../pricing/systemPricing'

export default class Table extends React.Component {
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
      fls:false};

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

      let selectedDrop = event.target.value.split("_")

      object[selectedDrop[1]] = (selectedDrop[0] === "No" ? false : true)
      this.setState(object)
      systemStore.setSystem(object)

    //  PriceCabinStore.setPriceCabin(cabinPricing())
      PriceGlobalStore.setPriceGlobal(globalPricing())
      PriceSystemStore.setPriceSystem(systemPricing())
    }
  render() {
    return (
      <table>
      <tbody>
        <tr style={{fontSize:'18px !important'}}>
          <td style={{background:'#486677'}}>Selection</td>
          <td style={{background:'#486677',width:'200px'}}>Commercial package</td>
          <td style={{background:'#486677'}}>Price</td>
          <td style={{background:'#486677'}}>Description</td>
          <td style={{background:'#486677'}}>Advantage</td>
          <td style={{background:'#486677'}}>Content</td>
        </tr>
        <tr>
          <td>
            <select
            onChange={this.myChangeHandler.bind(this)}
            value={this.state.atsaw?"Yes_atsaw":"No_atsaw"}>
              <option value="No_atsaw">No</option>
              <option value="Yes_atsaw">Yes</option>
            </select>
          </td>
          <td>ATSAW</td>
          <td>76,400</td>
          <td>Activate the Airborne Traffic Situational Awareness function</td>
          <td>Enhances traffic awareness in all flight phases.
              Enhances cooperation with ATC.
              Enables flight level change with the current standard separation, providing fuel saving.
              Enhances information and identification of target aircraft in approach.
              Increases the runway throughput.
          </td>
          <td><img src="img/src/InfosBlanc.png"/></td>
        </tr>
        <tr>
          <td>
          <select
          onChange={this.myChangeHandler.bind(this)}
          value={this.state.dualAdf?"Yes_dualAdf":"No_dualAdf"}>
            <option value={"No_dualAdf"}>No</option>
            <option value={"Yes_dualAdf"}>Yes</option>
          </select>
          </td>
          <td>Dual ADF system</td>
          <td>58,800</td>
          <td>Installation of a dual Automatic Direction Finder (ADF) system</td>
          <td>Secure redundancy</td>
          <td><img src="img/src/InfosBlanc.png"/></td>
        </tr>
        <tr>
          <td>
          <select
          onChange={this.myChangeHandler.bind(this)}
          value={this.state.gls?"Yes_gls":"No_gls"}>
            <option value={"No_gls"}>No</option>
            <option value={"Yes_gls"}>Yes</option>
          </select>
          </td>
          <td>Activation of GLS function</td>
          <td>31,300</td>
          <td>GBAS Landing System (GLS) function to perform precision approaches (CAT1 autoland) using Satellite navigation (GPS) and differential GPS ground station.</td>
          <td>Not limited by multipath issues. Therefore, reduced restricted area compare to ILS is defined during Low Visibility Procedures improving the capacity of the airport. One ground station provides precision approaches on all the runways of the airport.
              Inexpensive ground installation
          </td>
          <td><img src="img/src/InfosBlanc.png"/></td>
        </tr>
        <tr>
          <td>
          <select
          onChange={this.myChangeHandler.bind(this)}
          value={this.state.fls?"Yes_fls":"No_fls"}>
            <option value={"No_fls"}>No</option>
            <option value={"Yes_fls"}>Yes</option>
          </select>
          </td>
          <td>Activation of FLS function</td>
          <td>31,300</td>
          <td>The FMS Landing System (FLS) enables Non Precision Approaches (VOR, VOR/DME, NDB, NDB/DME, GPS, RNAV) to be flown in a similar manner as a Precision Approach (ILS, MLS, GLS) with same type of guidance, display and alert.</td>
          <td>Operational enhancement for non-precision approaches: Approach stability Ground temperature correction Enables to fly LOC / FLS approaches (LOC only…) Operation improvement thanks to ILS look-alike Reduced training duration & costs due to standardization of the procedures
          </td>
          <td><img src="img/src/InfosBlanc.png"/></td>
        </tr>
        </tbody>
      </table>
    )
  }
}
