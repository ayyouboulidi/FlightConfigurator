import React from 'react'
import { Link } from 'react-router';

export default class NewsCT extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      dot:1,
      dot1:"dotimg dotimgActive",
      dot2:"dotimg",
    };

  }
  changeComponent(event){
    let id = event.target.id
    if(id == "customer1"){
      this.state.dot=1
      this.state.dot1="dotimg dotimgActive"
      this.state.dot2="dotimg"
      this.setState(this.state)
    }else{
      this.state.dot=2
      this.state.dot1="dotimg"
      this.state.dot2="dotimg dotimgActive"
      this.setState(this.state)
    }
  }
  render() {
    return (
      <div className="customerPanelCT">
        <div style={{float:'left',width:'11%',margin:'6px',display:'inline-block',fontSize:'18px',fontWeight:'700'}}>Customer activities</div>
        <div style={{float:'right',width:'86%',display:'inline-block'}}>
          <div className="newsFeedInlineCT"><img src={"img/customercare"+this.state.dot+".png" } className="NewsImages"/></div>
          {this.state.dot == 1 ? <div className="newsFeedInlineCT textNews">
          <b  style={{fontSize:'20px'}}>Space-flex</b><br></br><br></br>
          5 visits from Airline <br></br><br></br>Added to regional budget on 25/05/2016</div>
          :<div className="newsFeedInlineCT textNews">
          <b  style={{fontSize:'20px'}}>Head-up display</b><br></br><br></br>
          Warning : Airline <br></br><br></br>Deselected HUD on 25/05/2016</div>  }
          <div className="DotSelector">
            <div id="customer1" className={this.state.dot1} onClick={this.changeComponent.bind(this)}>1</div>
            <div id="customer2" className={this.state.dot2} onClick={this.changeComponent.bind(this)}>2</div>
          </div>
        </div>
      </div>
    )
  }
}
