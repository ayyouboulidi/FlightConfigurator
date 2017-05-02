import React from 'react'
import { Link } from 'react-router';
import sessionStore from '../../store/session';
import {formatter} from '../../pricing/formatter';
import lastConfigStore from '../../store/lastConfigStore';

export default class LastConfig extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      first:null,
      session:'ct'
    }
  }
  componentWillMount(){
    this.setState({session:sessionStore.get()})
  }
  componentDidMount(){
     this.getLastConfigs();
     this.getLastOwnConfig();
     this.setState({session:sessionStore.get()})
  }

  getLastConfigs() {
    fetch('/json/lastConfig.json')
    .then(response => response.json())
    .then(data => this.setState({ data: data }))
    .catch(err => console.error('/json/lastConfig.json', err.toString()))
  }

  getLastOwnConfig() {
    fetch('/json/data.json')
    .then(response => response.json())
    .then(first => this.setState({ first: first }))
    .catch(err => console.error('/json/data.json', err.toString()))
  }

  setConfFunction(){
    lastConfigStore.setConf(true)
  }

  render() {
    let session = true
    let _this = this
    return (
      this.state.data == null || this.state.first == null ? <div>...Loading</div> :
      <div className="lastConfigPanel">
      <span style={{float:'left',width:'25%',fontSize:'20px'}}>Shopping cart configuration</span>
      <span style={{float:'right',width:'68%'}}>
        <div style={{marginBottom:'15px',fontSize:'18px'}}>Latest configurations</div>
        <hr></hr>
        <div style={{margin:'15px'}}>{this.state.first.lastConfig.conf[0].aircraft}  {this.state.first.lastConfig.conf[0].name} {this.state.first.lastConfig.conf[0].date}
        {session ?
          <Link to="/Cabin" onClick={this.setConfFunction.bind(this)}> <img src="img/arrowConfig.png" style={{float:'right',cursor:'pointer'}} /> </Link>
          :<img src="img/arrowConfig.png" style={{float:'right',cursor:'pointer'}}/>}
            <br></br>
            <span style={{color:'white',fontSize:'18px'}}>{formatter(this.state.first.lastConfig.conf[0].globalPrice)}</span>
            <hr></hr>
        </div>
        {this.state.data.lastConfig.conf.map(function(val,key){
          return key != 0 ?
                <div style={{margin:'15px'}} key={key}>
                    {val.aircraft}  {val.name}   {val.date}
                    {session ?
                      <Link to="/Cabin" onClick={_this.setConfFunction.bind(_this)}> <img src="img/arrowConfig.png" style={{float:'right',cursor:'pointer'}}/> </Link>
                      :<img src="img/arrowConfig.png" style={{float:'right',cursor:'pointer'}}/>}
                    <br></br>
                    <span style={{color:'white',fontSize:'18px'}}>{formatter(val.globalPrice)}</span>
                    <hr></hr>
                </div> : null
        })}
      </span>
    </div>
    )
  }
}
