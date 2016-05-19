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
    this.setState({ showModal: true });
  }

  render() {
    const w = window.innerWidth-30;
    const h = window.innerHeight-30;

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
        width: 100+'%',
        top: 5 + '%', left: 5 + '%',
        transform: `translate(-${5}%, -${5}%)`,
        border: '1px solid #e5e5e5',
        backgroundColor: '#486677',
        boxShadow: '0 5px 15px rgba(0,0,0,.5)',
        marginTop: 45,
        height: h+'px',
        color:'black'
      };

    return (
      <span className='modal-example'>
      <img src="img/igris.png" className="buttonI" onClick={this.open.bind(this)}/>

      <Modal
      aria-labelledby='modal-label'
      style={modalStyle}
      backdropStyle={backdropStyle}
      show={this.state.showModal}
      onHide={this.close.bind(this)}
      >
      <div style={dialogStyle} >
      <h4 id='modal-label' style={{color:'white',marginLeft:'10px'}}>INFORMATION</h4>
      <img src="img/Close_Icone_Blue.png" onClick={this.close.bind(this)} className="CloseButton"/>
        <div style={{marginTop:'30px',color:'white'}}>
          <div style={{marginTop:'30px',position:'absolute',marginLeft:'2%',marginRight:'2%',background:'#4C8FB4'}}>
            <span  style={{float:'left'}}><img src="img/ROPSdescription.jpg"  style={{width:w/4+"px",height:h/4+'px'}}/></span>
            <span  style={{float:'right',width:'58%',fontSize:'16px',marginTop:'1%'}}>
              This on-board cockpit technology, which Airbus has pioneered over several years and is in service on the A320, increases pilots’ situational awareness during landing, reduces exposure to runway excursion risk, and if necessary, provides active protection.The Airbus-patented ROPS computes minimum realistic in-flight landing and on-ground stopping distances while comparing them to available landing distances in real time. The resulting outcome produces audio callouts and alerts for pilots, making ROPS an awareness tool to assist the crew in the go-around decision making process and also the timely application of retardation/stopping means on touchdown.
            </span>
          </div>
          <div style={{marginTop:'18%',position:'absolute',marginLeft:'2%',marginRight:'2%',background:'#4C8FB4'}}>
            <span  style={{float:'left'}}><img src="img/ROPSAdvantage.jpg"  style={{width:w/4+"px",height:h/4+'px'}}/></span>
            <span  style={{float:'right',width:'58%',fontSize:'16px',marginTop:'2%'}}>
            ROPS is the only system that continuously calculates if the aircraft can safely stop on the remaining runway distance and then can alert the flight crew when there is a risk of runway overrun
            Alerts have been designed to be clear and directive and are associated with an Airbus procedure
            </span>
          </div>
         <div style={{marginTop:'34%',position:'absolute',marginLeft:'2%',marginRight:'2%',background:'#FF910A'}}>
            <span  style={{float:'left'}}><img src="img/TonyTyler.jpg"  style={{width:w/4+"px",height:h/4+'px'}}/></span>
            <span style={{float:'right',width:'10%',fontSize:'16px',marginTop:'3%'}}>Antony Tyler,<br></br>
            Director General of IATA</span>
            <span  style={{float:'right',width:'58%',fontSize:'20px',marginTop:'3%'}}>
            “ROPS is a terrific advance in safety management.
            There is a great deal of interest in making this one of the standard features of the industry.”
            </span>
          </div>
{/*           <div>
            <span  style={{float:'left',width:'40%'}}><img src="img/ROPSAdvantage.jpg"  style={{width:'100%'}}/></span>
            <span  style={{float:'right',width:'50%'}}>
              This on-board cockpit technology, which Airbus has pioneered over several years and is in service on the A320, increases pilots’ situational awareness during landing, reduces exposure to runway excursion risk, and if necessary, provides active protection.The Airbus-patented ROPS computes minimum realistic in-flight landing and on-ground stopping distances while comparing them to available landing distances in real time. The analyses take into account factors such as runway topography, runway condition, aircraft weight and configuration, wind and temperature. The resulting outcome produces audio callouts and alerts for pilots, making ROPS an awareness tool to assist the crew in the go-around decision making process and also the timely application of retardation/stopping means on touchdown.
            </span>
          </div>
          <div>
            <span  style={{float:'left',width:'40%'}}><img src="img/TonyTyler.jpg" style={{width:'100%'}}/></span>
            <span  style={{float:'right',width:'50%'}}>
              “ROPS is a terrific advance in safety management.
              There is a great deal of interest in making this one of the standard features of the industry.”
            </span>
            <span  style={{float:'right',width:'10%'}}>
            Antony Tyler,
            Director General of IATA
            </span>
          </div>*/}
        </div>
      </div>
      </Modal>
      </span>
    )
  }

}
