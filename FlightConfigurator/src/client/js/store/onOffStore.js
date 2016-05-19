import Store from './store'


const store = Store();
let onOffObject = {BusinessSeat:"Off",PremiumSeat:"Off",Seat:"Off",cafe:"Off",Toilets:"Off",separator:"Off",Lighting:"Off"};

store.getStore$().subscribe((newonOffObject) => {
  onOffObject = newonOffObject
})

export default {
  getStore$() {
    return store.getStore$();
  },
  setOnOffObject(onOffObject) {
    store.updateStore(onOffObject);
  },
  reset(){
    store.updateStore({BusinessSeat:"Off",PremiumSeat:"Off",Seat:"Off",cafe:"Off",Toilets:"Off",separator:"Off",Lighting:"Off"});
  },
  get(){
    return onOffObject;
  }
}
