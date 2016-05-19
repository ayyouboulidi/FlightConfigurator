import React from 'react'
import CompanyStore from '../../store/selectedCompany'
import { Link } from 'react-router'


export default class Selector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedAircraft: 'A320',
      gotoPage:"/SelectorConf",
    }
  }

  setAircraft(event){
    let selectedImageAircraft = event.target.src.split("/")
    selectedImageAircraft = selectedImageAircraft[selectedImageAircraft.length-1].split(".")
    selectedImageAircraft = selectedImageAircraft[0]
    this.state.selectedAircraft = selectedImageAircraft
    this.setState(this.state)
  }

  go(){
    if(this.state.selectedAircraft === 'A320'){
      this.setState({gotoPage:"/WelcomeConfig"})
    }else{
      alert("Only A320 and Emirates are available now")
    }
  }

  render() {
    return (
      <span className="aircraftselector">
      <div style={{marginLeft:'1%',marginRight:'1%'}}>
        <div className="aircraft320330">
          <img src="img/A320.png" onClick={this.setAircraft.bind(this)} className={this.state.selectedAircraft == "A320" ? "aircraftImagesSelected" : "aircraftImages" }/>
          <img src="img/A330.png" onClick={this.setAircraft.bind(this)} className={this.state.selectedAircraft == "A330" ? "aircraftImagesSelected" : "aircraftImages" }/>
        </div>
          {/*<img src="img/A340.png" onClick={this.setAircraft.bind(this)} className={this.state.selectedAircraft == "A340" ? "aircraftImagesSelected" : "aircraftImages" }/>*/}
        <div className="aircraft350380">
          <img src="img/A350.png" onClick={this.setAircraft.bind(this)} className={this.state.selectedAircraft == "A350" ? "aircraftImagesSelected" : "aircraftImages" }/>
          <img src="img/A380.png" onClick={this.setAircraft.bind(this)} className={this.state.selectedAircraft == "A380" ? "aircraftImagesSelected" : "aircraftImages" }/>
        </div>
      </div>
      <Link to={this.state.gotoPage} className="btn btn-primary ValidateButton ValidateButton__marginAll" onMouseOver={this.go.bind(this)}>Start Configuration</Link>
      </span>
    )
  }
}
