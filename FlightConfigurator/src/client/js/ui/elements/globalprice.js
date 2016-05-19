import React from 'react'
import PriceGlobal from '../../store/priceGlobal'
import SessionStore from '../../store/session'
import {formatter} from '../../pricing/formatter'

export default class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      globalprice : 0,
      session:'NA'
    }
  }

  componentDidMount(){
    this.state.globalprice = PriceGlobal.get();
    this.setState(this.state);

    this.listeners = [];
      this.listeners.push(
        PriceGlobal.getStore$().subscribe((value) => {
          this.state.globalprice = value
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
      this.state.globalprice = PriceGlobal.get();
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
      <div className="globalprice">
        <div className="globalpriceback">
          <div>Global Price</div>
          <div style={{fontSize:'24px !important',fontWeight:'700 !important'}}>{formatter(this.state.globalprice)}</div>
          <div style={{fontSize:'12px !important'}}>USD $ DC 01/2016</div>
        </div>
      </div>

    )
  }
}
