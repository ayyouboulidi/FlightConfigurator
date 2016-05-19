import React from 'react'


export default class DescriptionCabin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    }
  }

  componentDidMount(){
    this.getLastConfigs();
  }

  getLastConfigs() {
    fetch('/json/descriptions.json')
    .then(response => response.json())
    .then(data => this.setState({ data: data }))
    .catch(err => console.error('/json/descriptions.json', err.toString()))
  }

  render() {
    return (
      this.state.data == null ? <div>...Loading</div> :
      <div className="rightPanel">
        <div className="leftPanelDesc">
          <img src={this.state.data.description.bfe[parseInt(this.props.value)].img} className="imageConfDesc"/>
        </div>
        <div className="rightPanelDesc">
          <div style={{fontSize:'24px'}}><strong>{this.state.data.description.bfe[parseInt(this.props.value)].title}</strong></div>

          <div style={{fontSize:'15px'}}>{this.state.data.description.bfe[parseInt(this.props.value)].desc}</div>
        </div>
      </div>
    )
  }
}
