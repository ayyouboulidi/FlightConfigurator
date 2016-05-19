import Store from './store'


const store = Store();
let menu = {
  MenuSummaryBlue:"Blue",
  MenuCabinBlue:"Orange",
  MenuSystemsBlue:"Blue",
}
store.getStore$().subscribe((newmenu) => {
  menu = newmenu
})
export default {
  getStore$() {
    return store.getStore$();
  },
  setMenu(menu) {
    store.updateStore(menu);
  },
  get(){
    return menu
  }
}
