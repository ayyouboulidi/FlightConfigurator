import Store from './store'


const store = Store();
let lighting = {defaultLight:false,moodlighting:false,floormounted:false,ohscHandrail:false}

store.getStore$().subscribe((newlighting) => {
  lighting = newlighting
})

export default {
  getStore$() {
    return store.getStore$();
  },
  setLighting(lighting) {
    store.updateStore(lighting);
  },
  reset(){
    store.updateStore({defaultLight:false,moodlighting:false,floormounted:false,ohscHandrail:false});
  },
  get(){
    return lighting;
  }
}
