import Store from './store'


const store = Store();
let system = {runway:false,onboard:false,navigation:false,headUp:false,atsaw:false,dualAdf:false,gls:false,fls:false};

store.getStore$().subscribe((newsystem) => {
  system = newsystem
})
export default {
  getStore$() {
    return store.getStore$();
  },
  setSystem(system) {
    store.updateStore(system);
  },
  reset(){
    store.updateStore({runway:false,onboard:false,navigation:false,headUp:false,atsaw:false,dualAdf:false,gls:false,fls:false});
  },
  get(){
    return system
  }
}
