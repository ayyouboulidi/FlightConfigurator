
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
      <div style={{margin:'auto',width:'79%',marginTop: '1%',display: 'table'}}>
        <div style={{width:'48%',display: 'table-cell',borderRight: '7px solid #3E4C55',height:'100%',marginLeft:'1%',marginTop:'1%',backgroundColor:"#333333"}}>
          <div style={{background:'#FF910A'}}>
            <input type="checkbox" id="atsaw" style={{margin: '7px 10px 0',bottom: '-3px',marginBottom: '10px',fontWeight: '700',fontSize:'20px'}} value="yes" onClick={this.myChangeHandler.bind(this)} defaultChecked={this.state.atsaw}/>
            <span style={{fontSize:'16px'}}>ATSAW</span>
            <img src="img/src/InfosBlanc.png" style={{float:'right',marginRight:'3px',marginTop:'2px'}}/>
          </div>
          <div style={{backgroundColor:"#333333",margin:'5px'}}>
            <div style={{fontSize:'17px'}}>The <b>Airborne Traffic Situational Awareness</b> function enables flight
            path optimisation resulting in <b>fuel saving</b> and increases the <b>runway throughput.</b></div>
            <br></br>
            <div style={{float: 'right',fontSize:'18px'}}>$76,400</div>
          </div>
        </div>
        <div style={{width:'48%',borderLeft: '7px solid #3E4C55',display: 'table-cell',height:'100%',marginLeft:'1%',marginTop:'1%',backgroundColor:"#333333"}}>
          <div style={{background:'#FF910A'}}>

            <input type="checkbox" id="gls" style={{margin: '7px 10px 0',bottom: '-3px',marginBottom: '10px',fontWeight: '700',fontSize:'20px'}} value="yes" onClick={this.myChangeHandler.bind(this)} defaultChecked={this.state.gls}/>
            <span style={{fontSize:'16px'}}>Activation of GLS function</span>
            <img src="img/src/InfosBlanc.png" style={{float:'right',marginRight:'3px',marginTop:'2px'}}/>
          </div>
          <div style={{backgroundColor:"#333333",margin:'5px'}}>
            <div style={{fontSize:'17px'}}><b>GPS based Landing System</b> function to perform ILS alike precision approaches
            improving the <b>capacity of the airport</b> with <b>inexpensive ground installation.</b></div>
            <br></br>
            <div style={{float: 'right',fontSize:'18px'}}>$31,300</div>
          </div>
        </div>
      </div>
    )
  }
}
