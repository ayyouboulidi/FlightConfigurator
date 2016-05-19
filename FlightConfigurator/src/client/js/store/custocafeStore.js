import Store from './store'


const store = Store();
let custo = {GalleyG4a:"Standard",
      lavatoryCafe:"Standard",
      galleyG4:"Standard",
      galleyG5:"Standard",
      Spaceflex:"Standard"};

store.getStore$().subscribe((newcusto) => {
  custo = newcusto
})
export default {
  getStore$() {
    return store.getStore$();
  },
  setCustoCafe(custo) {
    store.updateStore(custo);
  },
  get(){
    return custo
  }
}
