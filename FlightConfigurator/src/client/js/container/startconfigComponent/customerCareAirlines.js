import React from 'react'
import { Link } from 'react-router';

export default class NewsCT extends React.Component {
  render() {
    return (
      <div className="customerPanelCT">
      <div style={{float:'left',width:'10%',margin:'6px',display:'inline-block',fontSize:'18px',fontWeight:'700'}}>News</div>
      <div style={{float:'right',width:'86%',display:'inline-block'}}>
        <div className="newsFeedInlineCT"><img src="img/A320_new_pivoting_overhead_bin.jpg" style={{width:'100%'}} className="NewsImages"/></div>
        <div className="newsFeedInlineCT textNews">
        <b  style={{fontSize:'20px'}}>New pivoting bins</b><br></br><br></br>
        10% more volume vs. current fixed bins <br></br><br></br>Up to 60% more bags <br></br><br></br>Now delivered</div>
        <div></div>
      </div>
      </div>
    )
  }
}
