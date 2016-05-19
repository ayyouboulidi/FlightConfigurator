import React from 'react'
import Menu from '../ui/elements/menu'
import {Link} from 'react-router'
import {Accordion,Panel} from 'react-bootstrap';
import GlobalPrice from '../ui/elements/globalprice';
import Aircraft from '../ui/elements/cabinAircraft'
import PriceCabinStore from '../store/priceCabin'
import PriceSystemStore from '../store/priceSystem'
import PriceGlobalStore from '../store/priceGlobal'

import SeatsStore from '../store/seatsStore'
import IfeStore from '../store/ifeStore'
import LightingStore from '../store/lightingStore'
import CafeStore from '../store/cafeStore'
import SeparatorStore from '../store/separatorStore'
import generalConfStore from '../store/generalConfStore'
import CustoStore from '../store/custoStore'
import CustoCafeStore from '../store/custocafeStore'
import SystemsStore from '../store/systemFlyingToolsStore'
import {formatter} from '../pricing/formatter'

import Accor from '../ui/elements/accordion'

export default class Summary extends React.Component {



  getLastConfigs(custoGlobal,price,priceGlobal) {

    let ifeObject = IfeStore.get()
    let LightingObject = LightingStore.get()
    let CafeObject = CafeStore.get()
    let SeparatorObject = SeparatorStore.get()
    let SeatsObject = {PremiumSeats:SeatsStore.get()[1],BusinessSeats:SeatsStore.get()[0],Seats:SeatsStore.get()[2]}
    let SystemObject = SystemsStore.get()
    /*let myreturnObject = Object.keys(globalObject).map(function (value,key) {
      return object[key] ? {
        set:true,
        nameComponent:value,
        custo:custoGlobal[value] != undefined ? custoGlobal[value] : 'NA',
        number:typeof object[key] === 'number' ? object[key] : 1,
        price:price[value]
      } : {set:false}
    })*/

   let objectSe = Object.keys(SeatsObject).map((k) => SeatsObject[k])

    let myreturnObjectSeats = Object.keys(SeatsObject).map(function (value,key) {
    /*  const tempObject = {}
      tempObject[value]=objectSe[key] ? {
        nameComponent:value,
        custo:custoGlobal[value] != undefined ? custoGlobal[value] : 'NA',
        number:typeof objectSe[key] === 'number' ? objectSe[key] : 1,
        price:price[value]
      } : null*/
      return objectSe[key] ? {
        nameComponent:value,
        custo:custoGlobal[value] != undefined ? custoGlobal[value] : 'NA',
        number:typeof objectSe[key] === 'number' ? objectSe[key] : 1,
        price:price[value]
      } : null
    })

    let objectL = Object.keys(LightingObject).map((k) => LightingObject[k])

    let myreturnObjectLighting = Object.keys(LightingObject).map(function (value,key) {
      /*const tempObject = {}
      tempObject[value]=objectL[key] ? {
        nameComponent:value,
        custo:custoGlobal[value] != undefined ? custoGlobal[value] : 'NA',
        number:typeof objectL[key] === 'number' ? objectL[key] : 1,
        price:price[value]
      } : null*/
      return objectL[key] ? {
        nameComponent:value,
        custo:custoGlobal[value] != undefined ? custoGlobal[value] : 'NA',
        number:typeof objectL[key] === 'number' ? objectL[key] : 1,
        price:price[value]
      } : null
    })

    let objectC = Object.keys(CafeObject).map((k) => CafeObject[k])

    let myreturnObjectCafe = Object.keys(CafeObject).map(function (value,key) {
    /*  const tempObject = {}
      tempObject[value]=objectC[key] ? {
        nameComponent:value,
        custo:custoGlobal[value] != undefined ? custoGlobal[value] : 'NA',
        number:typeof objectC[key] === 'number' ? objectC[key] : 1,
        price:price[value]
      } : null*/
      return objectC[key] ? {
        nameComponent:value,
        custo:custoGlobal[value] != undefined ? custoGlobal[value] : 'NA',
        number:typeof objectC[key] === 'number' ? objectC[key] : 1,
        price:price[value]
      } : null
    })


    let objectS = Object.keys(SeparatorObject).map((k) => SeparatorObject[k])

    let myreturnObjectSeparator = Object.keys(SeparatorObject).map(function (value,key) {
    /*  const tempObject = {}
      tempObject[value]=objectS[key] ? {
        nameComponent:value,
        custo:custoGlobal[value] != undefined ? custoGlobal[value] : 'NA',
        number:typeof objectS[key] === 'number' ? objectS[key] : 1,
        price:price[value]
      } : null*/
      return objectS[key] ? {
        nameComponent:value,
        custo:custoGlobal[value] != undefined ? custoGlobal[value] : 'NA',
        number:typeof objectS[key] === 'number' ? objectS[key] : 1,
        price:price[value]
      } : null
    })

    let objectI = Object.keys(ifeObject).map((k) => ifeObject[k])

    let myreturnObjectIfe = Object.keys(ifeObject).map(function (value,key) {
    /*  const tempObject = {}
      tempObject[value]=objectI[key] ? {
        nameComponent:value,
        custo:custoGlobal[value] != undefined ? custoGlobal[value] : 'NA',
        number:typeof objectI[key] === 'number' ? objectI[key] : 1,
        price:price[value]
      } : null*/
      return objectI[key] ? {
        nameComponent:value,
        custo:custoGlobal[value] != undefined ? custoGlobal[value] : 'NA',
        number:typeof objectI[key] === 'number' ? objectI[key] : 1,
        price:price[value]
      } : null
    })


    let myreturnObjectFlyingTools = Object.keys(SystemObject).map(function (value,key) {
      return SystemObject[value] ? {
        nameComponent:value,
        custo:'NA',
        number:1,
        price:price[value]
      } : null
    })



  //should be formatted later
    let temp = [];

    for(let i of myreturnObjectLighting)
      i && temp.push(i);

    myreturnObjectLighting = temp;

    let temp1 = [];

    for(let i of myreturnObjectSeparator)
      i && temp1.push(i);

    myreturnObjectSeparator = temp1;

    let temp2 = [];

    for(let i of myreturnObjectSeats)
      i && temp2.push(i);

    myreturnObjectSeats = temp2;

  /*  let temptemp = {}
    for(let i of myreturnObjectSeats){
      let key = i["nameComponent"]
      temptemp[key]=i
      console.log(temptemp)
    }*/

    let temp3 = [];

    for(let i of myreturnObjectCafe)
      i && temp3.push(i);

    myreturnObjectCafe = temp3;

    let temp4 = [];

    for(let i of myreturnObjectIfe)
      i && temp4.push(i);

    myreturnObjectIfe = temp4;

    let temp5 = [];
    for(let i of myreturnObjectFlyingTools)
      i && temp5.push(i);

    myreturnObjectFlyingTools = temp5;


    //end of this shit


    let objSeats = myreturnObjectSeats.reduce(function(o, v, i) {
      let key= v.nameComponent
        o[key] = v;
        return o;
      }, {});

      let objIfe = myreturnObjectIfe.reduce(function(o, v, i) {
        let key= v.nameComponent
          o[key] = v;
          return o;
        }, {});

        let objSeparator = myreturnObjectSeparator.reduce(function(o, v, i) {
          let key= v.nameComponent
            o[key] = v;
            return o;
          }, {});

          let objlighting = myreturnObjectLighting.reduce(function(o, v, i) {
            let key= v.nameComponent
              o[key] = v;
              return o;
            }, {});

            let objCafe = myreturnObjectCafe.reduce(function(o, v, i) {
              let key= v.nameComponent
                o[key] = v;
                return o;
              }, {});

              let objFlying = myreturnObjectFlyingTools.reduce(function(o, v, i) {
                let key= v.nameComponent
                  o[key] = v;
                  return o;
                }, {});

    let today = new Date();
    let dd = today.getDate()
    let mm = today.getMonth()+1; //January is 0!
    let yyyy = today.getFullYear()
    if(dd<10) {
    dd='0'+dd
    }

    if(mm<10) {
        mm='0'+mm
    }
    today = mm+'-'+dd+'-'+yyyy;

    let toSend = {"lastConfig":{"conf":[
      {"name":generalConfStore.get().nameConf,
      "custo":generalConfStore.get().custo,
      "aircraft":"A320",
      "globalPrice":priceGlobal,
      "date":today,
      "components":{
        "seats":objSeats,
        "ife":objIfe,
        "separator":objSeparator,
        "cafe":objCafe,
        "lighting":objlighting
      },
      "system":{
        "flyingTools":objFlying
      }
    }
  ]
}
}


        fetch('/savelastconfig', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(toSend)
        })
        .then(()=>setTimeout(function(){ window.open("http://localhost:4000/pdf") }, 500))
        .catch(err => console.error('/savelastconfig', err.toString()))
}


render() {
  let test = {}
  let test2 = {}
  let globalObject = Object.assign(test,IfeStore.get(), LightingStore.get(), CafeStore.get(),SeparatorStore.get(),{PremiumSeats:SeatsStore.get()[1],BusinessSeats:SeatsStore.get()[0],Seats:SeatsStore.get()[2]});
  let custoGlobal = Object.assign(test2,CustoStore.get(),CustoCafeStore.get())
  let object = Object.keys(globalObject).map((k) => globalObject[k])
  let priceGlobal = PriceGlobalStore.get()
  let priceCabin = PriceCabinStore.get()
  let priceSystem = PriceSystemStore.get()
  let systemObject = SystemsStore.get()
  let price = {
    PremiumSeats:0,
    BusinessSeats:8000,
    Seats:5000,
    GalleyG4a:70000,
    lavatoryCafe:153900,
    galleyG4:70000,
    galleyG5:122500,
    Spaceflex:307800,
    avod:1200,
    inSeatAudio:440,
    OverHeadVideo:9000,
    inSeatPower:360,
    ClassDivider:29000,
    avodEco:1200,
    inSeatAudioEco:440,
    OverHeadVideoEco:9000,
    inSeatPowerEco:360,
    moodlighting:74100,
    floormounted:19300,
    ohscHandrail:88500,
    windScreen:29000,
    lavatory:153900,
    galleyG3DryHs:70000,
    galleyG3DryFs:70000,
    galleyG3WetFs:88500,
    runway:80000,
    onboard:488000,
    navigation:100000,
    headUp:55400,
    atsaw:76400,
    dualAdf:58800,
    gls:31300,
    fls:31300
  }
  return (
    <div>
    <div className="logo"><img src="img/Title.png"/><img src="img/logoAirbusBlanc.png" style={{float:'right'}}/></div>
    <GlobalPrice/>
    <Menu/>
    <Accor eventKey="collapse1" title="Cabin" price={priceCabin}>
            <table>
              <tbody>
                <tr>
                  <td style={{background:'#486677'}}>Package Name</td><td style={{background:'#486677'}}>Customization</td><td style={{background:'#486677'}}>Quantity</td><td style={{background:'#486677'}}>Price</td>
                </tr>
                {
                  Object.keys(globalObject).map(function (value,key) {
                    return object[key] ?
                    <tr key={key}>
                    <td>{value}</td>
                    <td>{ custoGlobal[value] != undefined ? custoGlobal[value] : 'NA'}</td>
                    <td>{ typeof object[key] === 'number' ? object[key] : 1}</td>
                    <td>{formatter(price[value])}</td>
                    </tr> : null
                  })}

                </tbody>
              </table>
    </Accor>
    <Accor eventKey="collapse2" title="System" price={priceSystem}>
          <table>
            <tbody>
              <tr>
                <td style={{background:'#486677'}}>Package Name</td><td style={{background:'#486677'}}>Price</td>
              </tr>
              {
                Object.keys(systemObject).map(function (value,key) {
                  console.log(systemObject)
                  return systemObject[value] ?
                  <tr key={key}>
                  <td>{value}</td>
                  <td>{formatter(price[value])}</td>
                  </tr> : null
                })}

              </tbody>
            </table>
        {/*<Aircraft type="summary"/>*/}
    </Accor>
    <Accor eventKey="collapse3" title="Weight Variant" price="0">
    </Accor>
    <Accor eventKey="collapse4" title="External livery" price="0">
    </Accor>



      <button onClick={this.getLastConfigs.bind(this,custoGlobal,price,priceGlobal)} style={{float:'left !important'}} className="btn btn-primary ValidateButton ValidateButton__margin">
        DOWNLOAD PDF
      </button>

      <button onClick={this.getLastConfigs.bind(this,custoGlobal,price,priceGlobal)} style={{float:'left !important'}} className="btn btn-primary ValidateButton ValidateButton__margin">
        DOWNLOAD EXCEL
      </button>

      <button onClick={this.getLastConfigs.bind(this,custoGlobal,price,priceGlobal)} style={{float:'left !important'}} className="btn btn-primary ValidateButton ValidateButton__margin">
        SCN PDF
      </button>

      <button onClick={this.getLastConfigs.bind(this,custoGlobal,price,priceGlobal)} style={{float:'left !important'}} className="btn btn-primary ValidateButton ValidateButton__margin">
        {/*<a style={{color:'white'}} href="http://localhost:4000/json/data.json" target="_blank">SEND TO MY CT</a>*/}
        SEND TO AIRBUS
      </button>

      <Link className="btn btn-primary ValidateButton ValidateButton__margin" style={{float:'left !important'}} to="/Connect">HOME PAGE</Link>
      </div>
    )
  }
}
