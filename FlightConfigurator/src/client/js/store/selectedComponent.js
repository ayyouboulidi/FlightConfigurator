import Store from './store'


const store = Store();

export default {
  getStore$() {
    return store.getStore$();
  },
  selectAircraftComponent(aircraftComponent) {
    store.updateStore(aircraftComponent);
  },
  updateStore(nextAircraftComponent) {
    store.onNext(nextAircraftComponent);
  }
}
