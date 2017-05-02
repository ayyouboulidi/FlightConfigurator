import React from 'react'

import Menu from '../ui/elements/menu'
import Price from '../ui/elements/price'
import Globalprice from '../ui/elements/globalprice'
import Aircraft from '../ui/elements/cabinAircraft'


export default class Cabin extends React.Component {

  render() {
    return (
      <div>
        <div className="logo"><img src="img/Title.png"/><img src="img/logoAirbusBlanc.png" style={{float:'right'}}/></div>
        <Globalprice/>
        <Price/>
        <Menu/>
        <Aircraft type="cabin"/>
      </div>
    )
  }
}
