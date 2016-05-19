import Store from './store'


const store = Store();
let ife = {avod:false,inSeatAudio:false,OverHeadVideo:0,inSeatPower:false,ClassDivider:false,avodEco:false,inSeatAudioEco:false,OverHeadVideoEco:0,inSeatPowerEco:false}

store.getStore$().subscribe((newIfe) => {
  ife = newIfe
})

export default {
  getStore$() {
    return store.getStore$();
  },
  setIfe(ife) {
    store.updateStore(ife);
  },
  reset(){
    store.updateStore({avod:false,inSeatAudio:false,OverHeadVideo:0,inSeatPower:false,ClassDivider:false,avodEco:false,inSeatAudioEco:false,OverHeadVideoEco:0,inSeatPowerEco:false});
  },
  get(){
    return ife;
  }
}
