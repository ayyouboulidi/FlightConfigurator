import Store from './store'


const store = Store();
let globalprice = 164*5000+29000+153900;

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
    store.updateStore(164*5000+29000+153900);
  },
  get(){
    return globalprice;
  }
}
