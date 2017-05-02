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

let objectSe = Object.keys(SeatsObject).map((k) => SeatsObject[k])

let myreturnObjectSeats = Object.keys(SeatsObject).map(function (value,key) {

return objectSe[key] ? {
  nameComponent:value,
  custo:custoGlobal[value] != undefined ? custoGlobal[value] : 'NA',
  number:typeof objectSe[key] === 'number' ? objectSe[key] : 1,
  price:price[value]
} : null
})

let objectL = Object.keys(LightingObject).map((k) => LightingObject[k])

let myreturnObjectLighting = Object.keys(LightingObject).map(function (value,key) {

return objectL[key] ? {
  nameComponent:value,
  custo:custoGlobal[value] != undefined ? custoGlobal[value] : 'NA',
  number:typeof objectL[key] === 'number' ? objectL[key] : 1,
  price:price[value]
} : null
})

let objectC = Object.keys(CafeObject).map((k) => CafeObject[k])

let myreturnObjectCafe = Object.keys(CafeObject).map(function (value,key) {

return objectC[key] ? {
  nameComponent:value,
  custo:custoGlobal[value] != undefined ? custoGlobal[value] : 'NA',
  number:typeof objectC[key] === 'number' ? objectC[key] : 1,
  price:price[value]
} : null
})


let objectS = Object.keys(SeparatorObject).map((k) => SeparatorObject[k])

let myreturnObjectSeparator = Object.keys(SeparatorObject).map(function (value,key) {

return objectS[key] ? {
  nameComponent:value,
  custo:custoGlobal[value] != undefined ? custoGlobal[value] : 'NA',
  number:typeof objectS[key] === 'number' ? objectS[key] : 1,
  price:price[value]
} : null
})

let objectI = Object.keys(ifeObject).map((k) => ifeObject[k])

let myreturnObjectIfe = Object.keys(ifeObject).map(function (value,key) {

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

//deactivate the save module....
/*fetch('/savelastconfig', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(toSend)
})
.then(()=>setTimeout(function(){ window.open("http://localhost:8080/pdf") }, 500))
.catch(err => console.error('/savelastconfig', err.toString()))*/

  window.open("https://serene-mesa-31728.herokuapp.com/pdf")

}


render() {
  let test = {}
  let test1 = {}
  let test3 = {}
  let test2 = {}
  let globalObjectSeating = Object.assign(test,IfeStore.get(),{PremiumSeats:SeatsStore.get()[1],BusinessSeats:SeatsStore.get()[0],Seats:SeatsStore.get()[2]});
  let globalObjectGalley = Object.assign(test1, CafeStore.get(),SeparatorStore.get());
  let globalObjectCabinCrew = Object.assign(test3, LightingStore.get());
  let custoGlobal = Object.assign(test2,CustoStore.get(),CustoCafeStore.get())
  let objectSeating = Object.keys(globalObjectSeating).map((k) => globalObjectSeating[k])
  let objectGalley = Object.keys(globalObjectGalley).map((k) => globalObjectGalley[k])
  let objectCabinCrew = Object.keys(globalObjectCabinCrew).map((k) => globalObjectCabinCrew[k])
  let priceGlobal = PriceGlobalStore.get()
  let priceCabin = PriceCabinStore.get()
  let priceSystem = PriceSystemStore.get()
  let systemObject = SystemsStore.get()
  let i=0,j=0,k=0;
  let price = {
    PremiumSeats:0,
    BusinessSeats:7900,
    Seats:5100,

    GalleyG4aStandard:70000,
    lavatoryCafeStandard:153900,
    galleyG4Standard:70000,
    galleyG5Standard:122500,
    SpaceflexStandard:329000,

    GalleyG4aEfficient:85000,
    lavatoryCafeEfficient:163900,
    galleyG4Efficient:85000,
    galleyG5Efficient:137500,
    SpaceflexEfficient:377800,

    GalleyG4aComfort:114800,
    lavatoryCafeComfort:188900,
    galleyG4Comfort:114800,
    galleyG5Comfort:167300,
    SpaceflexComfort:397800,

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

    lavatoryStandard:153900,
    galleyG3DryHsStandard:97400,
    galleyG3DryFsStandard:123650,
    galleyG3WetFsStandard:123650,

    lavatoryEfficient:163900,
    galleyG3DryHsEfficient:112400,
    galleyG3DryFsEfficient:138650,
    galleyG3WetFsEfficient:138650,

    lavatoryComfort:188890,
    galleyG3DryHsComfort:142300,
    galleyG3DryFsComfort:168500,
    galleyG3WetFsComfort:168500,

    runway:80000,
    onboard:488000,
    navigation:100000,
    headUp:488000,
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
    <td style={{background:'#486677'}}>Category</td><td style={{background:'#486677'}}>Package Name</td><td style={{background:'#486677'}}>Customization</td><td style={{background:'#486677'}}>Quantity</td><td style={{background:'#486677',width:'10%'}}>Price</td>
    </tr>
    {
      Object.keys(globalObjectSeating).map(function (value,key) {
        let val = value
        objectSeating[key]? i++ : i
        val=val.split(/(?=[A-Z])/).join(" ");
        return objectSeating[key] ?
        <tr key={key}>
        <td>{i === 1  ? "Seating":""}</td>
        <td className={val ==="avod" ?"upperCase":(val==="avod Eco"?"":"capitalize")}>{val==="avod Eco"?"AVOD Eco":val}</td>
        <td>{ custoGlobal[value] != undefined ? (custoGlobal[value]==="Effecient"?"Efficient":(custoGlobal[value]==="Confort"?"Comfort":"Standard")) : 'NA'}</td>
        <td>{
          value ==="avod" ||value ==="inSeatAudio" ||value ==="inSeatPower" ? (typeof objectSeating[key] === 'number' ?objectSeating[key]:1 )*globalObjectSeating["BusinessSeats"]
          :value ==="avodEco" ||value ==="inSeatAudioEco" ||value ==="inSeatPowerEco" ? (typeof objectSeating[key] === 'number' ?objectSeating[key]:1 )*globalObjectSeating["Seats"]
          : typeof objectSeating[key] === 'number' ?objectSeating[key]:1}</td>
        <td style={{textAlign:'right'}}>
          {typeof objectSeating[key] === 'number' ?
            (value==="Seats" ?formatter(0) : formatter(objectSeating[key]*price[value]))
            : (value ==="avodEco" ||value ==="inSeatAudioEco" ||value ==="inSeatPowerEco" ? formatter(globalObjectSeating["Seats"]*price[value])
              : (value ==="avod" ||value ==="inSeatAudio" ||value ==="inSeatPower" ? formatter(globalObjectSeating["BusinessSeats"]*price[value]):formatter(price[value])))}</td>
        </tr> : null
      })}

      {
        Object.keys(globalObjectGalley).map(function (value,key) {
          let val = value
          console.log(value,custoGlobal[value])
          console.log(custoGlobal)
          objectGalley[key] ? j++ : j
          val==="lavatoryCafe"? val="Lavatory":val=val.split(/(?=[A-Z])/).join(" ");
          return objectGalley[key] ?
          <tr key={key}>
          <td>{j == 1 ? "Galley/Stowage/Lavatory":""}</td>
          <td className="capitalize">{val}</td>
          <td>{ custoGlobal[value] != undefined ? custoGlobal[value] : 'NA'}</td>
          <td>{ typeof objectGalley[key] === 'number' ? objectGalley[key]: 1}</td>
          <td style={{textAlign:'right'}}>{typeof objectGalley[key] === 'number' ? formatter(objectGalley[key]*price[value]) : (custoGlobal[value] != undefined ? formatter(price[value+custoGlobal[value]]) : formatter(price[value]))}</td>
          </tr> : null
        })}

        {
          Object.keys(globalObjectCabinCrew).map(function (value,key) {
            let val = value
            objectCabinCrew[key] ?k++ : k
            val=val.split(/(?=[A-Z])/).join(" ");
            return objectCabinCrew[key] ?
            <tr key={key}>
            <td>{k == 1  ? "Cabin Crew":""}</td>
            <td>{val==="moodlighting"?"Mood-Lighting":(val==="floormounted"?"Floor Mounted EEPMS":(val==="ohsc Handrail"?"OHSC Handrail":val))}</td>
            <td>{ custoGlobal[value] != undefined ? custoGlobal[value] : 'NA'}</td>
            <td>{ typeof objectCabinCrew[key] === 'number' ? objectCabinCrew[key] : 1}</td>
            <td style={{textAlign:'right'}}>{typeof objectCabinCrew[key] === 'number' ? formatter(objectCabinCrew[key]*price[value]) : formatter(price[value])}</td>
            </tr> : null
          })}

          </tbody>
          </table>
          </Accor>
          <Accor eventKey="collapse2" title="Systems" price={priceSystem}>
          <table>
          <tbody>
          <tr>
          <td style={{background:'#486677'}}>Package Name</td><td style={{background:'#486677',width:'10%'}}>Price</td>
          </tr>
          {
            Object.keys(systemObject).map(function (value,key) {
              return systemObject[value] ?
              <tr key={key}>
              <td className="capitalize">{value==="runway" ? "ROPS":(value === "headUp"?"Dual Head-Up":(value==="atsaw"?"ATSAW":"GLS"))}</td>
              <td style={{textAlign:'right'}}>{formatter(price[value])}</td>
              </tr> : null
            })}

            </tbody>
            </table>
            </Accor>
            <Accor eventKey="collapse3" title="Weight Variant" price="0">
            </Accor>
            <Accor eventKey="collapse4" title="External livery" price="0">
            </Accor>



            <button  style={{float:'left !important',lineHeight: '30px',margin: '1%'}} className="btn btn-primary ValidateButton ValidateButton__margin">
            DOWNLOAD PDF <img src="img/src/DL-PDF.png" style={{float:'right'}}/>
            </button>

            <button style={{float:'left !important',lineHeight: '30px',margin: '1%'}} className="btn btn-primary ValidateButton ValidateButton__margin">
            DOWNLOAD EXCEL<img src="img/src/DL-XLS.png" style={{float:'right'}}/>
            </button>

            <button onClick={this.getLastConfigs.bind(this,custoGlobal,price,priceGlobal)} style={{float:'left !important',lineHeight: '30px',margin: '1%'}} className="btn btn-primary ValidateButton ValidateButton__margin">
            CREATE SCN PDF<img src="img/src/SCAN-PDF.png" style={{float:'right'}}/>
            </button>

            <button  style={{float:'left !important',lineHeight: '30px',margin: '1%'}} className="btn btn-primary ValidateButton ValidateButton__margin">
            {/*<a style={{color:'white'}} href="http://localhost:4000/json/data.json" target="_blank">SEND TO MY CT</a>*/}
            SEND TO AIRBUS<img src="img/src/SEND.png" style={{float:'right'}}/>
            </button>

            <Link className="btn btn-primary ValidateButton ValidateButton__margin" style={{lineHeight: '30px',margin: '1%'}} to="/WelcomeConfig">HOME PAGE<img src="img/src/HOME.png" style={{float:'right'}}/></Link>
            </div>
          )
        }
      }
