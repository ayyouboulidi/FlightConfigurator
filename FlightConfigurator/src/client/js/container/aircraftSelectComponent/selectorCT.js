import React from 'react'
import CompanyStore from '../../store/selectedCompany'
import { Link } from 'react-router'


export default class Selector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCompany: 'EK',
      selectedAircraft: 'A320',
      gotoPage:"/SelectorConf",
    }
  }

  componentWillMount() {
    this.state.subscription = CompanyStore.getStore$().subscribe((value) => {
      this.state.selectedAircraft = value[0]
      this.state.selectedCompany = value[1]
      this.setState(this.state)
    });
  }

  componentWillUnmount() {
    this.state.subscription.dispose();
  }

  setAircraft(event){
    let selectedImageAircraft = event.target.src.split("/")
    selectedImageAircraft = selectedImageAircraft[selectedImageAircraft.length-1].split(".")
    selectedImageAircraft = selectedImageAircraft[0]
    this.state.selectedAircraft = selectedImageAircraft
    CompanyStore.setCompanyAircraftConfig([selectedImageAircraft,this.state.selectedCompany])
    this.setState(this.state)
  }
  setCompany(event){
    let selectedImageCompany = event.target.src.split("/")
    selectedImageCompany = selectedImageCompany[selectedImageCompany.length-1].split(".")
    selectedImageCompany  = selectedImageCompany[0]
    this.state.selectedCompany = selectedImageCompany
    CompanyStore.setCompanyAircraftConfig([this.state.selectedAircraft ,selectedImageCompany])
    this.setState(this.state)
  }

  go(){
    if(this.state.selectedCompany === 'EK' && this.state.selectedAircraft === 'A320'){
      this.setState({gotoPage:"/WelcomeConfig"})
    }else{
      alert("Only A320 and Emirates are available now")
    }
  }

  addPrevClass (e) {
    let target = e.target;

      if(target.getAttribute('src')) { // check if it is img
        let li = target//.parentNode.parentNode;
        let prevLi = li.previousElementSibling;
        if(prevLi) {
          prevLi.className = 'prev';
        }

        target.addEventListener('mouseout', function() {
            if(prevLi) prevLi.removeAttribute('class');
        }, false);
    }
  }


  render() {

    return (
      <div className="aircraftselector">
          <div>
            <img src="img/EK.png" onClick={this.setCompany.bind(this)} className={this.state.selectedCompany == "EK" ? "companyImagesSelected" : "companyImages hover01" }/>
            <img src="img/iberia.png" onClick={this.setCompany.bind(this)} className={this.state.selectedCompany == "iberia" ? "companyImagesSelected" : "companyImages hover01" }/>
            <img src="img/Air_Asia.png" onClick={this.setCompany.bind(this)} className={this.state.selectedCompany == "Air_Asia" ? "companyImagesSelected" : "companyImages hover01" }/>
            <img src="img/aigle_azur.png" onClick={this.setCompany.bind(this)} className={this.state.selectedCompany == "aigle_azur" ? "companyImagesSelected" : "companyImages hover01" }/>
            <img src="img/Air_France.png" onClick={this.setCompany.bind(this)} className={this.state.selectedCompany == "Air_France" ? "companyImagesSelected" : "companyImages hover01" }/>
            <img src="img/turkish_arilines.png" onClick={this.setCompany.bind(this)} className={this.state.selectedCompany == "turkish_arilines" ? "companyImagesSelected" : "companyImages hover01" }/>
            <img src="img/aeroflot.PNG" onClick={this.setCompany.bind(this)} className={this.state.selectedCompany == "aeroflot" ? "companyImagesSelected" : "companyImages hover01" }/>
            <img src="img/air_china.PNG" onClick={this.setCompany.bind(this)} className={this.state.selectedCompany == "air_china" ? "companyImagesSelected" : "companyImages hover01" }/>
          </div>
        <hr style={{margin:'10px',borderTop:'1px solid white'}}></hr>
        <div style={{margin:'auto'}}>
          <div className="aircraft320330">
            <img src="img/A320.png" onClick={this.setAircraft.bind(this)} className={this.state.selectedAircraft == "A320" ? "aircraftImagesSelected hover08" : "aircraftImages hover08" }/>
            <img src="img/A330.png" onClick={this.setAircraft.bind(this)} className={this.state.selectedAircraft == "A330" ? "aircraftImagesSelected hover08" : "aircraftImages hover08" }/>
          </div>
            {/*<img src="img/A340.png" onClick={this.setAircraft.bind(this)} className={this.state.selectedAircraft == "A340" ? "aircraftImagesSelected" : "aircraftImages" }/>*/}
          <div className="aircraft350380">
            <img src="img/A350.png" onClick={this.setAircraft.bind(this)} className={this.state.selectedAircraft == "A350" ? "aircraftImagesSelected hover08" : "aircraftImages hover08" }/>
            <img src="img/A380.png" onClick={this.setAircraft.bind(this)} className={this.state.selectedAircraft == "A380" ? "aircraftImagesSelected hover08" : "aircraftImages hover08" }/>
          </div>
        </div>
        <Link to={this.state.gotoPage} className="btn btn-primary ValidateButton ValidateButton__marginAll" onMouseOver={this.go.bind(this)}>Start Configuration</Link>
      </div>
    )
  }
}
