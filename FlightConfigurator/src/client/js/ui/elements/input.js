import React from 'react'

export default class Input extends React.Component {

  render() {
    return (
      <span style={{float:'right',width:'60%'}}>
        <div style={{height:'50px',padding:'10px'}}>Standard ></div>
        <hr></hr>
        <div style={{height:'50px',padding:'10px'}}>Confort ></div>
        <hr></hr>
        <div style={{padding:'10px'}}>Effeciency ></div>
      </span>
    )
  }
}
