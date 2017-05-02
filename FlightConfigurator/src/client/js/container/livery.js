import React from 'react'
import Menu from '../ui/elements/menu'



export default class Livery extends React.Component {

  render() {
    return (
      <div>
        <div className="logo"><img src="img/Title.png"/><img src="img/logoAirbusBlanc.png" style={{float:'right'}}/></div>
        <Menu/>
      </div>
    )
  }
}
