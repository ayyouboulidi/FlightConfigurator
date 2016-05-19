import Store from './store'


const store = Store();
let separator = {windScreen:true,lavatory:false,galleyG3DryHs:false,galleyG3DryFs:false,galleyG3WetFs:false}

store.getStore$().subscribe((newseparator) => {
  separator = newseparator
})

export default {
  getStore$() {
    return store.getStore$();
  },
  setSeparator(separator) {
    store.updateStore(separator);
  },
  reset(){
    store.updateStore({windScreen:true,lavatory:false,galleyG3DryHs:false,galleyG3DryFs:false,galleyG3WetFs:false});
  },
  get(){
    return separator;
  }
}
