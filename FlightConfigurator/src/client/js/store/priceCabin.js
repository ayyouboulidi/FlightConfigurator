import Store from './store'


const store = Store();
let price = 164*5000+29000+153900;

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
    store.updateStore(164*5000+29000+153900);
  },
  get(){
    return price;
  }
}
