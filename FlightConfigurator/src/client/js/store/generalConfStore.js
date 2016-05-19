import Store from './store'

const store = Store();
let generalConf = {nameConf:"DefaultName",
      custo:"Standard"};

store.getStore$().subscribe((newgeneralConf) => {
  generalConf = newgeneralConf
})
export default {
  getStore$() {
    return store.getStore$();
  },
  setNameStore(generalConf) {
    store.updateStore(generalConf);
  },
  get(){
    return generalConf
  }
}
