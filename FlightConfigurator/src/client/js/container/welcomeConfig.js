import React from 'react'

import LastConfig from './startconfigComponent/lastConfig'
import AircraftImage from './startconfigComponent/aircraftImage'
import News from './startconfigComponent/newsAirlines'

import ConfiguratorChoice from './startconfigComponent/configuratorChoice'
import NewsCT from './startconfigComponent/newsCT'
import CustomerCare from './startconfigComponent/customerCare'
import CustomerCareAirlines from './startconfigComponent/customerCareAirlines'

import SessionStore from '../store/session'


export default class StartConfigClient extends React.Component {
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
        {
          this.state.session === "airlines" ?
          <div>
            <AircraftImage/>
            <LastConfig/>
            <News/>
            {/*<CustomerCareAirlines/>*/}
          </div>
        :
          <div>
            <ConfiguratorChoice/>
            <LastConfig/>
            <NewsCT/>
            {/*<CustomerCare/>*/}
          </div>
        }
      </div>
    )
  }
}
