import Store from './store'


const store = Store();
let price = 0;

store.getStore$().subscribe((newPrice) => {
  price = newPrice
})

export default {
  getStore$() {
    return store.getStore$();
  },
  setPriceSystem(systemPrice) {
    store.updateStore(systemPrice);
  },
  reset(){
    store.updateStore(0);
  },
  get(){
    return price;
  }
}
