import React from 'react'

import Menu from './menu'
import Price from './price'
import Globalprice from './globalprice'
import Content from '../../container/cabin/content'
import ComponentStore from '../../store/selectedComponent'
import SessionStore from '../../store/session'
import PriceCabin from '../../store/priceCabin'
import PriceGlobal from '../../store/priceGlobal'
import SeatsStore from '../../store/seatsStore'
import OnOffStore from '../../store/onOffStore'
import IfeStore from '../../store/ifeStore'
import LightingStore from '../../store/lightingStore'
import SeparatorStore from '../../store/separatorStore'
import cafeStore from '../../store/cafeStore'
import {cabinPricing} from '../../pricing/cabinPricing'
import {globalPricing} from '../../pricing/globalPricing'
import lastConfigStore from '../../store/lastConfigStore'


export default class CabinAircraft extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      data:null,
      display: false,
      component : 'NA',
      data:null,
      session:'NA',
      premiumSeats : '0',
      seats: '164',
      businessSeats : '0',
      Business : "Off",
      Premium : "Off",
      Seat : "Off",
      cafe:"Off",
      Toilets:"Off",
      separator:"Off",
      Lighting:"Off",
      avod:false,
      inSeatAudio:false,
      OverHeadVideo:0,
      inSeatPower:false,
      ClassDivider:false,
      avodEco:false,
      inSeatAudioEco:false,
      OverHeadVideoEco:0,
      inSeatPowerEco:false,
      floorMointed:false,
      handrailLightning:false,
      moodLightning:false,
      lastConfig:false,
      lalopa:"lalopa"
    }
  }
  componentWillMount(){
    this.state.session = SessionStore.get();
    let value = SeatsStore.get();
    let valueOnOff = OnOffStore.get();
    this.state.floorMointed = LightingStore.get().floormounted;
    this.state.handrailLightning = LightingStore.get().ohscHandrail;
    this.state.moodLightning = LightingStore.get().moodlighting;
    this.state.avod= IfeStore.get().avod
    this.state.inSeatAudio= IfeStore.get().inSeatAudio
    this.state.OverHeadVideo= IfeStore.get().OverHeadVideo
    this.state.inSeatPower = IfeStore.get().inSeatPower
    this.state.ClassDivider = IfeStore.get().ClassDivider
    this.state.avodEco= IfeStore.get().avodEco
    this.state.inSeatAudioEco= IfeStore.get().inSeatAudioEco
    this.state.OverHeadVideoEco= IfeStore.get().OverHeadVideoEco
    this.state.inSeatPowerEco = IfeStore.get().inSeatPowerEco
    this.state.Seat = valueOnOff.Seat
    this.state.Premium = valueOnOff.PremiumSeat
    this.state.Business = valueOnOff.BusinessSeat
    this.state.cafe= valueOnOff.cafe
    this.state.Toilets= valueOnOff.Toilets
    this.state.separator= valueOnOff.separator
    this.state.Lighting= valueOnOff.Lighting
    this.state.seats = value[2]
    this.state.premiumSeats = value[1]
    this.state.businessSeats = value[0]
    this.state.businessSeats = value[0]
    this.state.lastConfig = lastConfigStore.get()
    this.setState(this.state)
  }

  componentDidMount(){

    this.listeners = [];

    this.listeners.push(
      SessionStore.getStore$().subscribe((value) => {
        this.state.session = value
        this.setState(this.state)
      }));


      this.listeners.push(
        OnOffStore.getStore$().subscribe((value) => {
          this.state.Business = value.BusinessSeat
          this.state.Premium = value.PremiumSeat
          this.state.Seat = value.Seat
          this.state.cafe= value.cafe
          this.state.Toilets= value.Toilets
          this.state.separator= value.separator
          this.state.Lighting= value.Lighting
          this.setState(this.state)
        }));

        this.listeners.push(
          SeatsStore.getStore$().subscribe((value) => {
            this.state.businessSeats = value[0]
            this.state.premiumSeats = value[1]
            this.state.seats = value[2]
            this.setState(this.state)
          }));

          this.listeners.push(
            lastConfigStore.getStore$().subscribe((value) => {
              this.state.lastConfig = value
              this.setState(this.state)
            }));

          this.listeners.push(
            LightingStore.getStore$().subscribe((value) => {
              this.state.moodLightning = value.moodlighting
              this.state.floorMointed = value.floormounted
              this.state.handrailLightning = value.ohscHandrail
              this.setState(this.state)
            }));

            this.listeners.push(
              IfeStore.getStore$().subscribe((value) => {
                this.state.avod= value.avod
                this.state.inSeatAudio= value.inSeatAudio
                this.state.OverHeadVideo= value.OverHeadVideo
                this.state.inSeatPower = value.inSeatPower
                this.state.ClassDivider = value.ClassDivider
                this.state.avodEco= value.avodEco
                this.state.inSeatAudioEco= value.inSeatAudioEco
                this.state.OverHeadVideoEco= value.OverHeadVideoEco
                this.state.inSeatPowerEco = value.inSeatPowerEco
                this.setState(this.state)
              }));

              this.setState(this.state)

              if(this.state.lastConfig){
                this.getLastOwnConfig(function success(data){


                    OnOffStore.setOnOffObject(
                      {
                       BusinessSeat:data.lastConfig.conf[0].components.seats.BusinessSeats!= undefined || data.lastConfig.conf[0].components.ife!= undefined ? "On" : "Off",
                       PremiumSeat:data.lastConfig.conf[0].components.seats.PremiumSeats!= undefined || data.lastConfig.conf[0].components.ife!= undefined  ? "On" : "Off",
                       Seat:data.lastConfig.conf[0].components.seats.Seats!= undefined || data.lastConfig.conf[0].components.ife!= undefined  ? "On" : "Off" ,
                       cafe:data.lastConfig.conf[0].components.cafe != undefined ? "On" : "Off",
                       Toilets:data.lastConfig.conf[0].components.cafe != undefined ? "On" : "Off",
                       separator:data.lastConfig.conf[0].components.separator!= undefined ? "Off" : "Off",
                       Lighting:data.lastConfig.conf[0].components.lighting != undefined ? "On" : "Off"
                     }
                    )


                  SeatsStore.setSeats(
                    [
                      data.lastConfig.conf[0].components.seats.BusinessSeats!= undefined ? data.lastConfig.conf[0].components.seats.BusinessSeats.number : 0,
                      data.lastConfig.conf[0].components.seats.PremiumSeats != undefined ? data.lastConfig.conf[0].components.seats.PremiumSeats.number : 0,
                      data.lastConfig.conf[0].components.seats.Seats!= undefined ? data.lastConfig.conf[0].components.seats.Seats.number : 0
                    ])

                    cafeStore.setCafe(
                      {GalleyG4a:data.lastConfig.conf[0].components.cafe.GalleyG4a != undefined ? true : false,
                        lavatoryCafe:data.lastConfig.conf[0].components.cafe.lavatoryCafe != undefined ? true : false,
                        galleyG4:data.lastConfig.conf[0].components.cafe.galleyG4 != undefined ? true : false,
                        galleyG5:data.lastConfig.conf[0].components.cafe.galleyG5 != undefined ? true : false,
                        Spaceflex:data.lastConfig.conf[0].components.cafe.Spaceflex != undefined ? true : false}
                      )

                      LightingStore.setLighting({moodlighting:data.lastConfig.conf[0].components.lighting.moodlighting != undefined ? true : false,
                        floormounted:data.lastConfig.conf[0].components.lighting.floormounted != undefined ? true : false,
                        ohscHandrail:data.lastConfig.conf[0].components.lighting.ohscHandrail != undefined ? true : false}
                      )


                      SeparatorStore.setSeparator({windScreen:data.lastConfig.conf[0].components.separator.windScreen != undefined ? true : false,
                        lavatory:data.lastConfig.conf[0].components.separator.lavatory != undefined ? true : false,
                        galleyG3DryHs:data.lastConfig.conf[0].components.separator.galleyG3DryHs != undefined ? true : false,
                        galleyG3DryFs:data.lastConfig.conf[0].components.separator.galleyG3DryFs != undefined ? true : false,
                        galleyG3WetFs:data.lastConfig.conf[0].components.separator.galleyG3WetFs != undefined ? true : false})

                        IfeStore.setIfe({avod:data.lastConfig.conf[0].components.ife.avod != undefined ? true : false,
                          inSeatAudio:data.lastConfig.conf[0].components.ife.inSeatAudio != undefined ? true : false,
                          OverHeadVideo:data.lastConfig.conf[0].components.ife.OverHeadVideo != undefined ? data.lastConfig.conf[0].components.ife.OverHeadVideo.number : 0,
                          inSeatPower:data.lastConfig.conf[0].components.ife.inSeatPower != undefined ? true : false,
                          ClassDivider:data.lastConfig.conf[0].components.ife.ClassDivider != undefined ? true : false,
                          avodEco:data.lastConfig.conf[0].components.ife.avodEco != undefined ? true : data.lastConfig.conf[0].components.ife.avod != undefined ? true : false,
                          inSeatAudioEco:data.lastConfig.conf[0].components.ife.inSeatAudioEco != undefined ? true : false,
                          OverHeadVideoEco:data.lastConfig.conf[0].components.ife.OverHeadVideoEco != undefined ? data.lastConfig.conf[0].components.ife.OverHeadVideoEco.number : 0,
                          inSeatPowerEco:data.lastConfig.conf[0].components.ife.inSeatPowerEco != undefined ? true : false}
                        )

                        PriceCabin.setPriceCabin(cabinPricing())
                        PriceGlobal.setPriceGlobal(globalPricing())
                  });
                }
              }


        getLastOwnConfig(success) {
          $.ajax({
            url: '/json/data.json'
          })
          .done(success)
          .fail(function() {
            console.error('/json/data.json', err.toString());
          });
        }



        componentWillUnmount() {
          this.listeners.forEach(function(listener) {
            if(typeof listener.dispose === "function") {
              listener.dispose();
            }
          })
        }

        clickedComponent(event){
          let selectedPart = event.target.src.split("/")
          selectedPart = selectedPart[selectedPart.length-1].split(".")
          selectedPart = selectedPart[0]
          console.log(selectedPart)
          this.state.component = selectedPart
          if(this.props.type === "cabin"){
            this.state.display = true
            this.setState(this.state)
            ComponentStore.selectAircraftComponent([this.state.display,this.state.component])
          }
        }

        changeLopaimg(){

          this.setState({lalopa:"lalopa"})
        }

        changeLopaimgOut(){
          this.setState({lalopa:"lalopa"})
        }

        render() {
          return (
            <div style={{paddingTop:'80px',background:'white',margin:'1%'}}>
            <div className="hover00" style={{position: 'relative', width: '1315px', height: '250px',color:'black',margin:'auto'}} >
            <img  onMouseOver={this.changeLopaimg.bind(this)} onMouseOut={this.changeLopaimgOut.bind(this)} src={"img/"+this.state.lalopa+".png"} style={{position: 'relative', zIndex: '1'}} />
            {/**
              **
              *
               seats
               */}
            <img src={"img/src/Business"+this.state.Business+".png"}
              title="Business Class"
              className="hover01"
              onClick={this.clickedComponent.bind(this)}
              style={{position: 'absolute',left:'361px', top: '106px',zIndex: '10',cursor:'pointer'}} />
            <input type="text" value={this.state.businessSeats} className="seatsInput" style={{left:'330px',top: '113px'}} disabled/>

            <img src={"img/src/PremiumOff.png"}
              title="Premium Class"
              style={{position: 'absolute',left:'563px', top: '106px',zIndex: '10',cursor:'not-allowed'}} />
            <input type="text" value={this.state.premiumSeats} className="seatsInput" style={{left:'532px',top: '113px'}} disabled/>

            <img src={"img/src/Seat"+this.state.Seat+".png"}
              title="Economic Class"
              onClick={this.clickedComponent.bind(this)}
              style={{position: 'absolute',left:'822px', top: '106px',zIndex: '10',cursor:'pointer'}} />
            <input type="text" value={this.state.seats} className="seatsInput" style={{left:'791px',top: '113px'}} disabled/>
            {/**
              **
              *
               IFE Business seats
               */}
            {this.state.avod ?
              <img src={"img/src/AVOD.png"} title="AVOD"  style={{position: 'absolute',left:'375px', top: '150px',zIndex: '10'}} />
              :null}
            {this.state.inSeatAudio ?
              <img src={"img/src/Audio.png"} title="In-seat Audio"  style={{position: 'absolute',left:'412px', top: '150px',zIndex: '10'}} />
              :null}
            {this.state.OverHeadVideo != 0 ?
              <img src={"img/src/IFE.png"} title="Overhead video"  style={{position: 'absolute',left:'452px', top: '150px',zIndex: '10'}} />
              :null}
            {this.state.OverHeadVideo != 0 ?
              <input type="text" value={this.state.OverHeadVideo} className="seatsInput" style={{left:'492px', top: '180px'}} disabled/>
              :null}
            {this.state.inSeatPower ?
              <img src={"img/src/Connect.png"} title="In-seat power" style={{position: 'absolute',left:'322px', top: '150px',zIndex: '10'}} />
              :null}
              {/**
                **
                *
                 IFE Economic seats
                 */}
            {this.state.avodEco ?
              <img src={"img/src/AVOD.png"} title="AVOD"  style={{position: 'absolute',left:'830px', top: '150px',zIndex: '10'}} />
              :null}
            {this.state.inSeatAudioEco ?
              <img src={"img/src/Audio.png"} title="In-seat Audio" style={{position: 'absolute',left:'742px', top: '150px',zIndex: '10'}} />
              :null}
            {this.state.OverHeadVideoEco != 0 ?
              <img src={"img/src/IFE.png"} title="Overhead video" style={{position: 'absolute',left:'872px', top: '150px',zIndex: '10'}} />
              :null}
            {this.state.OverHeadVideoEco != 0 ?
              <input type="text" value={this.state.OverHeadVideoEco} className="seatsInput" style={{left:'912px', top: '180px'}} disabled/>
              :null}
            {this.state.inSeatPowerEco ?
              <img src={"img/src/Connect.png"} title="In-seat power" style={{position: 'absolute',left:'782px', top: '150px',zIndex: '10'}} />
              :null}
              {/**
                **
                *
                 class divider icons
                 */}
            {this.state.businessSeats != 0 && this.state.ClassDivider  ?
              <img src={"img/src/separators.png"} title="Divider" style={{position: 'absolute',left:'520px', top: '47px',zIndex: '10'}} />
              :null}
              {/**
                **
                *
                 Lighting icons
                 */}
            {this.state.moodLightning  ?
              <img src={"img/src/moodLightning.png"} title="Mood lighting" style={{position: 'absolute',left:'535px', top: '-70px',zIndex: '10'}} />
              :null}
            {this.state.floorMointed  ?
              <img src={"img/src/floorMointed.png"} title="Floor mointed" style={{position: 'absolute',left:'570px', top: '-70px',zIndex: '10'}} />
              :null}
            {this.state.handrailLightning  ?
              <img src={"img/src/handrailLightning.png"} title="handrail lighting" style={{position: 'absolute',left:'600px', top: '-70px',zIndex: '10'}} />
              :null}

              {/**
                **
                *
                 back aircraft icons
                 */}

            <img src={"img/src/toiletsX2"+this.state.Toilets+".png"} title="Lavatory" onClick={this.clickedComponent.bind(this)} style={{position: 'absolute',left:'1074px', top: '142px',zIndex: '10',cursor:'pointer'}} />
            <img src={"img/src/CafeSF"+this.state.cafe+".png"} title="Galley" onClick={this.clickedComponent.bind(this)} style={{position: 'absolute',left:'1074px', top: '62px',zIndex: '10',cursor:'pointer'}} />
            <img src={"img/src/separator"+this.state.separator+".png"}  title="wind Screen" onClick={this.clickedComponent.bind(this)} style={{position: 'absolute',left:this.state.separator != "Off" ?'976px':'996px', top:this.state.separator != "Off" ?'50px':'45px',zIndex: '10',cursor:'pointer'}} />
            <img src="img/source/COFFEE.png" title="Galley" style={{position: 'absolute',left:'982px', top: '157px',zIndex: '10',cursor:'not-allowed'}} />
            {/**
              **
              *
               front aircraft icons
               */}
            <img src="img/src/toiletsOff.png"  style={{position: 'absolute',left:'122px', top: '142px',zIndex: '10',cursor:'not-allowed'}} />
            <img src="img/src/CafeOff.png"  style={{position: 'absolute',left:'122px', top: '62px',zIndex: '10',cursor:'not-allowed'}} />
            {/*  <img src="img/src/cintreOff.png"  style={{position: 'absolute',left:'266px', top: '48px',zIndex: '10',cursor:'not-allowed'}} />
            <img src="img/src/cintreOff.png"  style={{position: 'absolute',left:'266px', top: '148px',zIndex: '10',cursor:'not-allowed'}} />*/}
            <img src="img/src/separator.png"  style={{position: 'absolute',left:'242px', top: '149px',zIndex: '10',cursor:'not-allowed'}} />
            <img src="img/src/separator.png"  style={{position: 'absolute',left:'242px', top: '44px',zIndex: '10',cursor:'not-allowed'}} />
            {/**
              **
              *
               Connectivity icon
               */}
            <img src="img/src/Wifi.png" style={{position: 'absolute',left:'150px', top: '-30px',zIndex: '10',cursor:'not-allowed'}}/>
            <div style={{position: 'absolute',left:'190px', top: '-17px',zIndex: '10'}} >Connectivity</div>
            <img src="img/src/barre.png" style={{position: 'absolute',left:'150px', top: '-32px',zIndex: '10'}} />
            {/**
              **
              *
               Bins icons
               */}
            <img src="img/src/MusicOff.png" style={{position: 'absolute',left:'350px', top: '-30px',zIndex: '10',cursor:'not-allowed'}}/>
            <div style={{position: 'absolute',left:'390px', top: '-17px',zIndex: '10'}} >Bins</div>
            <img src="img/src/barre.png" style={{position: 'absolute',left:'350px', top: '-32px',zIndex: '10'}} />
            {/**
              **
              *
               lighting config icons
               */}
            <img src={"img/src/Ampoule"+this.state.Lighting+".png"} title="Lighting" onClick={this.clickedComponent.bind(this)} style={{position: 'absolute',left:'550px', top: '-30px',zIndex: '10',cursor:'pointer'}}/>
            <div style={{position: 'absolute',left:'590px', top: '-17px',zIndex: '10'}} >Lighting</div>
            <img src="img/src/barre.png" style={{position: 'absolute',left:'550px', top: '-32px',zIndex: '10'}} />
            {/**
              **
              *
               cabin crew icons
               */}
            <img src="img/src/AmpouleOff.png" style={{position: 'absolute',left:'750px', top: '-30px',zIndex: '10',cursor:'not-allowed'}}/>
            <div style={{position: 'absolute',left:'790px', top: '-17px',zIndex: '10'}} >Cabin Crew</div>
            <div style={{position: 'absolute',left:'780px', top: '-55px',zIndex: '10'}}>CAS 4</div>
            <img src="img/src/barre.png" style={{position: 'absolute',left:'750px', top: '-32px',zIndex: '10'}} />
            {/**
              **
              *
               Exits icons
               */}
            <img src="img/src/AmpouleOff.png" style={{position: 'absolute',left:'950px', top: '-30px',zIndex: '10',cursor:'not-allowed'}}/>
            <div style={{position: 'absolute',left:'990px', top: '-17px',zIndex: '10'}} >Exits</div>
            <img src="img/src/barre.png" style={{position: 'absolute',left:'950px', top: '-32px',zIndex: '10'}} />
            </div>
            <div style={{background:"#333333",height:"5px"}}></div>
            {this.state.display ? <Content/> :  <Content/> }
            </div>
        )
      }
}
