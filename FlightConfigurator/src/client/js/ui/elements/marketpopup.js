import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default class Guide extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      showModal: false
    }
  }

  close(){
    this.setState({ showModal: false });
  }

  open(){
    if(this.props.popup==="true"){
      this.setState({ showModal: true });
    }
  }

  render() {
    let w = window.innerWidth;
    let h = window.innerHeight-30;
    console.log(w)
    const modalStyle = {
      position: 'absolute',
      zIndex: 1040,
      top: 0, bottom: 0, left: 0, right: 0,
    };

    const backdropStyle = {
      zIndex: 'auto',
      backgroundColor: '#000',
      opacity: 0.5,
      position: 'absolute',
      zIndex: 1040,
      top: 2, bottom: 0, left: 0, right: 0
    };

  const  dialogStyle  =  {
        position: 'absolute',
        width: 900+'px',
        top: 5 + '%', left: (w-900)/2 + 'px',
        transform: `translate(-${5}%, -${5}%)`,
        border: '1px solid #e5e5e5',
        backgroundColor: '#333333',
        boxShadow: '0 5px 15px rgba(0,0,0,.5)',
        marginTop: 45,
        height: '674px',
        color:'black'
      };

    return (
      <span className='modal-example'>
      <img src="img/src/InfosBlanc.png" className="buttonI" onClick={this.open.bind(this)}/>
      <Modal
      aria-labelledby='modal-label'
      style={modalStyle}
      backdropStyle={backdropStyle}
      show={this.state.showModal}
      onHide={this.close.bind(this)}
      >
      <div style={dialogStyle} >
      <h4 id='modal-label' style={{color:'white',marginTop:'0px',marginBottom:'0px'}}><img src="img/Close_Icone_Blue.png" onClick={this.close.bind(this)} className="CloseButton"/></h4>
      <img src="img/rops.png"/>
      </div>
      </Modal>
      </span>
    )
  }

}
