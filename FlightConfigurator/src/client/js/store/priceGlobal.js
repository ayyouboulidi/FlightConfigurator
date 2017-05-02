import Store from './store'


const store = Store();
let globalprice = 29000+153900+70000;

store.getStore$().subscribe((newPrice) => {
  globalprice = newPrice
})

export default {
  getStore$() {
    return store.getStore$();
  },
  setPriceGlobal(globalPrice) {
    store.updateStore(globalPrice);
  },
  reset(){
    store.updateStore(29000+153900+70000);
  },
  get(){
    return globalprice;
  }
}
