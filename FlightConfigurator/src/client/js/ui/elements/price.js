import React from 'react'
import Pricecabin from '../../store/priceCabin'
import SessionStore from '../../store/session'
import {formatter} from '../../pricing/formatter'

export default class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      price : 0,
      session:'NA'
    }
  }

  componentDidMount(){
    this.state.price = Pricecabin.get();
    this.setState(this.state);

    this.listeners = [];
      this.listeners.push(
        Pricecabin.getStore$().subscribe((value) => {
          this.state.price = value
          this.setState(this.state)
        }));

          this.listeners.push(
             SessionStore.getStore$().subscribe((value) => {
              this.state.session = value
              this.setState(this.state)
            }));
      this.setState(this.state);
  }

  componentWillMount() {
      this.state.session = SessionStore.get();
      this.state.price = Pricecabin.get();
      this.setState(this.state)
  }

  componentWillUnmount() {
    this.listeners.forEach(function(listener) {
      if(typeof listener.dispose === "function") {
        listener.dispose();
      }
    })
  }



  render() {
    return (
      <div className="price">
        <div className="priceback">
          <div>Cabin Price</div>
          <div style={{fontSize:'24px !important',fontWeight:'700 !important'}}>{formatter(this.state.price)}</div>
        </div>
      </div>

    )
  }
}
