import Store from './store'


const store = Store();
let lastConf = false;

store.getStore$().subscribe((newState) => {
  lastConf = newState
})
export default {
  getStore$() {
    return store.getStore$();
  },
  setConf(lastConf) {
    store.updateStore(lastConf);
  },
  reset(){
    store.updateStore(false);
  },
  get(){
    return lastConf
  }
}
