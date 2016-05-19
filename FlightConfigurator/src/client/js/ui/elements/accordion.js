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
              <span style={{float:"right"}}>{formatter(this.props.price)}</span>
            </h4>
          </div>
          <div id={this.props.eventKey} className="panel-collapse collapse">
            <div className="panel-body">
              {this.props.children}
            </div>
            {/*<div className="panel-footer">Panel Footer</div>*/}
          </div>
        </div>
      </div>
    )
  }
}
