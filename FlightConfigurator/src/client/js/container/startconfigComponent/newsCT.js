import React from 'react'

export default class NewsCT extends React.Component {

  render() {
    return (
      <div className="newsPanelCT">
        <div style={{float:'left',width:'10%',margin:'6px',display:'inline-block'}}>News</div>
        <div style={{float:'right',width:'88%',display:'inline-block'}}>
          <div className="newsFeedInlineCT"><img src="img/src/imageExemple.png" className="NewsImages"/></div>
          <div className="newsFeedInlineCT">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</div>
          <div></div>
          <div className="newsFeedInlineCT"><img src="img/src/imageExemple.png" className="NewsImages"/></div>
          <div className="newsFeedInlineCT">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</div>
          <div></div>
        </div>
      </div>
    )
  }
}
