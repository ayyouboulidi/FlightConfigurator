import Store from './store'


const store = Store();
let cafe = {GalleyG4a:false,lavatoryCafe:true,galleyG4:true,galleyG5:false,Spaceflex:false};

store.getStore$().subscribe((newcafe) => {
  cafe = newcafe
})
export default {
  getStore$() {
    return store.getStore$();
  },
  setCafe(cafe) {
    store.updateStore(cafe);
  },
  reset(){
    store.updateStore({GalleyG4a:false,lavatoryCafe:true,galleyG4:true,galleyG5:false,Spaceflex:false});
  },
  get(){
    return cafe
  }
}
