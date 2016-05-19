import React from 'react'
import { Link } from 'react-router';

export default class NewsCT extends React.Component {

  render() {
    return (
      <div className="customerPanelCT">
        <div style={{float:'left',width:'10%',margin:'6px',display:'inline-block'}}>Customer Care</div>
        <div style={{float:'right',width:'88%',display:'inline-block'}}>
          <div className="newsFeedInlineCT"><img src="img/src/imageExemple.png" className="NewsImages"/></div>
          <div className="newsFeedInlineCT">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</div>
          <div></div>
          <div className="newsFeedInlineCT"><img src="img/src/imageExemple.png" className="NewsImages"/></div>
          <div className="newsFeedInlineCT">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</div>
          <div></div>
          {/*<Link to="/CustomerCare" className="btn btn-danger ValidateButton">Go to customer Care</Link>*/}
        </div>
      </div>
    )
  }
}
