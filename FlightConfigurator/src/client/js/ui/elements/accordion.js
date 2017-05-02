import React from 'react'
import {formatter} from '../../pricing/formatter'

export default class Accor extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="panel-group">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h4 className="panel-title">
              <a data-toggle="collapse" href={"#"+this.props.eventKey}>{this.props.title}</a>
              <div style={{float:"right",color:'#476776',marginTop: '-9px',padding:'9px',backgroundColor:'#CAD3DC',paddingLeft:'100px',width:'140px'}}> <b style={{float:'right'}}>{formatter(this.props.price)}</b></div>
              <span style={{float:'right',marginRight: '5px'}}>Sub total</span>
            </h4>
          </div>
          <div id={this.props.eventKey} className="panel-collapse collapse">
            <div className="panel-body">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
