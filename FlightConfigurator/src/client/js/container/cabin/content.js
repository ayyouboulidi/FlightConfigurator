import React from 'react'

import Input from '../../ui/elements/input'
import Menu from '../../ui/elements/Menu'
import ComponentStore from '../../store/selectedComponent'
import BusinessOff from './businessOff'
import SeatOff from './seatOff'
import CafeOff from './cafeOff'
import Separator from './separator'
import Lighting from './lighting'


export default class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      component : 'NA',
    }
  }

  componentWillMount() {
    this.state.subscription = ComponentStore.getStore$().subscribe((value) => {
      this.state.component = value[1]
      this.setState(this.state)
    });
  }

  componentWillUnmount() {
    this.state.subscription.dispose();
  }

  render() {
    let value = this.state.component;
    return (
        value == "BusinessOff" || value == "BusinessOn" ?
        <BusinessOff/> :
        value == "SeatOff" || value == "SeatOn" ?
        <SeatOff/> :
        value == "CafeSFOff" || value == "CafeSFOn" || value == "toiletsX2Off" || value == "toiletsX2On" ?
        <CafeOff/> :
        value == "separatorOn" ||value == "separator1On"||value == "separator2On"||value == "separator3On" || value == "separatorOff"  ?
        <Separator/>:
        value == "AmpouleOff" || value == "AmpouleOn" ?
        <Lighting/>:
        null
    )
  }
}
