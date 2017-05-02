import React from 'react'
import MenuStore from '../../store/menuStore'

export default class Menu extends React.Component {
  constructor(props){
    super(props)
    this.state={
      MenuSummaryBlue:"Blue",
      MenuCabinBlue:"Orange",
      MenuSystemsBlue:"Blue",
    }
  }

  componentWillMount(){
    let url = window.location.href
    console.log(url)
    let value = url.split("/")
    let finalValue = value[4].split("?")
    console.log(finalValue[0])
    this.setState({
      MenuSummaryBlue:finalValue[0] ==="Summary" || finalValue[0] ==="summary" ? "Orange" : "Blue",
      MenuCabinBlue:finalValue[0] ==="Cabin" || finalValue[0] ==="cabin" ? "Orange" : "Blue",
      MenuSystemsBlue:finalValue[0] ==="Systems" || finalValue[0] ==="systems" ? "Orange" : "Blue",
    })
  }

  hoverMe(event){
    let hover = event.target.src.split("/")
    hover = hover[hover.length-1].split(".")
    hover = hover[0]
    if(hover ==="MenuSummaryBlue" || hover ==="MenuSummaryOrange"){
      this.state.MenuSummaryBlue = "Orange"
      this.state.MenuCabinBlue = "Blue"
      this.state.MenuSystemsBlue = "Blue"
      MenuStore.setMenu({ MenuSummaryBlue:"Orange", MenuCabinBlue:"Blue", MenuSystemsBlue:"Blue",})
    }
    else if(hover ==="MenuCabinBlue" || hover ==="MenuCabinOrange"){
      this.state.MenuCabinBlue = "Orange"
      this.state.MenuSummaryBlue = "Blue"
      this.state.MenuSystemsBlue = "Blue"
      MenuStore.setMenu({ MenuSummaryBlue:"Blue", MenuCabinBlue:"Orange", MenuSystemsBlue:"Blue",})
    }
    else if(hover ==="MenuSystemsBlue" || hover ==="MenuSystemsOrange"){
      this.state.MenuSystemsBlue = "Orange"
      this.state.MenuCabinBlue = "Blue"
      this.state.MenuSummaryBlue = "Blue"
      MenuStore.setMenu({ MenuSummaryBlue:"Blue", MenuCabinBlue:"Blue", MenuSystemsBlue:"Orange",})

    }

    this.setState(this.state)
  }

  render() {
    return (
      <ul className="menu">
        <li> <img src="img/MenuWeightVariant.png" style={{cursor:'not-allowed',position:'relative',zIndex:'5'}} /></li>
        <li> <a href="/#/Cabin"><img src={"img/MenuCabin"+this.state.MenuCabinBlue+".png"} onClick={this.hoverMe.bind(this)} style={{marginLeft:'-15px',position:'relative',zIndex:'4'}}/></a></li>
        <li> <a href="/#/Systems"><img src={"img/MenuSystems"+this.state.MenuSystemsBlue+".png"} onClick={this.hoverMe.bind(this)} style={{marginLeft:'-15px',position:'relative',zIndex:'3'}}/></a></li>
        <li><img src="img/MenuExternalLiveryBlue.png" style={{cursor:'not-allowed',marginLeft:'-15px' ,position:'relative',zIndex:'2'}}/></li>
        <li><a href="/#/Summary"><img src={"img/MenuSummary"+this.state.MenuSummaryBlue+".png"} onClick={this.hoverMe.bind(this)} style={{marginLeft:'-15px',position:'relative',zIndex:'1'}}/></a></li>
      </ul>
    )
  }
}
