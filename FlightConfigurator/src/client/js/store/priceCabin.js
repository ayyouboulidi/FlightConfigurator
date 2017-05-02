import Store from './store'


const store = Store();
let price = 29000+153900+70000;

store.getStore$().subscribe((newPrice) => {
  price = newPrice
})

export default {
  getStore$() {
    return store.getStore$();
  },
  setPriceCabin(cabinPrice) {
    store.updateStore(cabinPrice);
  },
  reset(){
    store.updateStore(29000+153900+70000);
  },
  get(){
    return price;
  }
}
