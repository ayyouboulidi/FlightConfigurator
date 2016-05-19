import React from 'react'
import { Link } from 'react-router';
import generalConfStore from '../../store/generalConfStore'
import lastConfigStore from '../../store/lastConfigStore'
//import Input from '../../ui/elements/input'
/********To reset the last Stores of my last config**********/
import cafe from '../../store/cafeStore'
import ife from '../../store/ifeStore'
import lighting from '../../store/lightingStore'
import onOff from '../../store/onOffStore'
import priceCab from '../../store/priceCabin'
import PriceGlob from '../../store/priceGlobal'
import seats from '../../store/seatsStore'
import systems from '../../store/systemFlyingToolsStore'
import separator from '../../store/separatorStore'

export default class NewConfig extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      level:'Standard'
    }
  }

  LevelCusto(value){
    console.log(value)
    this.setState({level:value})
  }

  create(){
    let nameConf = $('#confignameinput').val()
    let level = this.state.level
    generalConfStore.setNameStore({nameConf:nameConf,custo:level})
    lastConfigStore.reset()
    cafe.reset();
    ife.reset();
    lighting.reset();
    onOff.reset();
    priceCab.reset();
    PriceGlob.reset();
    seats.reset();
    systems.reset();
    separator.reset();
  }

  render() {
    return (
      <div className="newConfigPanel">
        <div style={{float:'left',width:'15%',margin:'6px',display:'inline-block'}}>
          <img src="img/createNew.png"/>
        </div>
        <div className="rightNewConfig">
          <div style={{height:'50px'}}>
            <span style={{float:'left',width:'40%'}}>Configuration name : </span> <input id="confignameinput" className="NameConfig" type="text"/>
          </div>
          <div style={{height:'150px'}}>
            <div>Level of customization : </div>
            <div style={{textAlign:'center'}}>
                {this.state.level === "Standard" ?
                  <img src="img/standardSelected.png" style={{cursor:'pointer',margin:'1%'}}/>
                  : <img src="img/standard.png" onClick={()=>this.LevelCusto("Standard")} style={{cursor:'pointer',margin:'1%'}}/>
                }
                {this.state.level === "Confort" ?
                  <img src="img/confortSelected.png" style={{cursor:'pointer',margin:'1%'}}/>
                  : <img src="img/confort.png" onClick={()=>this.LevelCusto("Confort")} style={{cursor:'pointer',margin:'1%'}}/>
                }
                {this.state.level === "Effeciency" ?
                  <img src="img/efficiencySelected.png" style={{cursor:'pointer',margin:'1%'}}/>
                  : <img src="img/efficiency.png" onClick={()=>this.LevelCusto("Effeciency")} style={{cursor:'pointer',margin:'1%'}}/>
                }
            </div>
          </div>
          <div style={{marginTop:'10%'}}><Link to="/cabin" className="btn btn-default ValidateButton" onClick={this.create.bind(this)}>CREATE</Link></div>
        </div>
      </div>
    )
  }
}
