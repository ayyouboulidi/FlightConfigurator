import React from 'react'

//import LeftPanel from './AircraftSelectComponent/leftDescription'
import SelectorCT from './AircraftSelectComponent/selectorCT'

import SelectorAirlines from './AircraftSelectComponent/selectorAirlines'

import SessionStore from '../store/session'

export default class AircraftSelectCT extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      session:'NA'
    }
  }
  componentWillMount(){
    this.state.session = SessionStore.get();
    this.setState(this.state)
  }
  render() {
    return (
      <div>
        <div className="logo"><img src="img/Title.png"/><img src="img/logoAirbusBlanc.png" style={{float:'right'}}/></div>
        {this.state.session === "ct" ? <SelectorCT/> : <SelectorAirlines/>}
        {/*<LeftPanel/>*/}
      </div>
    )
  }
}
