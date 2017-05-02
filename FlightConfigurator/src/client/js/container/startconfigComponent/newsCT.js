import React from 'react'

export default class NewsAirlines extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      button1:false,
      button2:true,
      button3:false,
      button4:false,
      button5:false
    }
  }


componentDidMount(){
    let _this = this
    this.timer = setInterval(function(){
        if (_this.state.button1){
          _this.setState({button1:false,button2:true})
        }
        else if (_this.state.button2){
          _this.setState({button2:false,button3:true})
        }
        else if (_this.state.button3){
          _this.setState({button3:false,button4:true})
        }
        else if (_this.state.button4){
          _this.setState({button4:false,button5:true})
        }
        else if (_this.state.button5){
          _this.setState({button5:false,button1:true})
        }
    }, 5000);
}

componentWillUnmount(){

     // This method is called immediately before the component is removed
     // from the page and destroyed. We can clear the interval here:

     clearInterval(this.timer);
 }

 changeHandler(event){
   if (event.target.id ==="button-1" ){
     this.setState({button1:true,button2:false,button3:false,button4:false,button5:false})
   }
   else if (event.target.id ==="button-2"){
     this.setState({button1:false,button2:true,button3:false,button4:false,button5:false})
   }
   else if (event.target.id ==="button-3"){
     this.setState({button1:false,button2:false,button3:true,button4:false,button5:false})
   }
   else if (event.target.id ==="button-4"){
     this.setState({button1:false,button2:false,button3:false,button4:true,button5:false})
   }
   else if (event.target.id ==="button-6"){
     this.setState({button1:false,button2:false,button3:false,button4:false,button5:true})
   }
 }

    render() {
      return (
        <div className="newsPanelCTAirlines">
        <div id="slider">
          <input type="radio" id="button-1" name="controls" checked={this.state.button1} onChange={this.changeHandler.bind(this)}/>
          <input type="radio" id="button-2" name="controls" checked={this.state.button2} onChange={this.changeHandler.bind(this)}/>
          <input type="radio" id="button-3" name="controls" checked={this.state.button3} onChange={this.changeHandler.bind(this)}/>
          <input type="radio" id="button-4" name="controls" checked={this.state.button4} onChange={this.changeHandler.bind(this)}/>
          <input type="radio" id="button-6" name="controls" checked={this.state.button5} onChange={this.changeHandler.bind(this)}/>
          <label htmlFor="button-1" className="arrows" id="arrow-1"><img src="img/right_arrow.png"/></label>
          <label htmlFor="button-2" className="arrows" id="arrow-2"><img src="img/right_arrow.png"/></label>
          <label htmlFor="button-3" className="arrows" id="arrow-3"><img src="img/right_arrow.png"/></label>
          <label htmlFor="button-4" className="arrows" id="arrow-4"><img src="img/right_arrow.png"/></label>
          <label htmlFor="button-6" className="arrows" id="arrow-6"><img src="img/right_arrow.png"/></label>
          <div id="slides">
            <div className='tk-museo-sans'>
              <span id="image-1">
                <span className="info">
                  <strong>Head-up Display</strong>
                  <em>(Customer Activities)</em>
                </span>
                <span className="description">
                  <b>Warning</b>: Airline Deselected HUD <br></br> on 25/05/2016
                </span>
              </span>
              <span id="image-2">
                <span className="info">
                  <strong>Exclusive look</strong>
                  <em>(News)</em>
                </span>
                <span className="description">
                  A330neo cabin borrowing best from A350
                </span>
              </span>
              <span id="image-3">
                <span className="info">
                  <strong>Pivoting bins</strong>
                  <em>(News)</em>
                </span>
                <span className="description">
                  10% more volume vs. current fixed bins<br></br> Up to 60% more bags<br></br> Now delivered
                </span>
              </span>
              <span id="image-4">
                <span className="info">
                  <strong>Space-flex</strong>
                  <em>(Customer activities)</em>
                </span>
                <span className="description">
                  5 visits from Airline <br></br> Added to regional budget<br></br> on 25/05/2016
                </span>
              </span>
              <span id="image-6">
                <span className="info">
                  <strong>New Airspace</strong>
                  <em>(News)</em>
                </span>
                <span className="description">
                  New Airspace Cabin By Airbus Offers Clean Lines And Larger Cabins
                </span>
              </span>
            </div>
          </div>
        </div>
        </div>
      )
    }
  }
