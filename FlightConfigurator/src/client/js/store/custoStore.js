import Store from './store'


const store = Store();
let custo = {lavatory:"Standard",
      galleyG3DryHs:"Standard",
      galleyG3DryFs:"Standard",
      galleyG3WetFs:"Standard"};

store.getStore$().subscribe((newcusto) => {
  custo = newcusto
})
export default {
  getStore$() {
    return store.getStore$();
  },
  setCusto(custo) {
    store.updateStore(custo);
  },
  get(){
    return custo
  }
}
