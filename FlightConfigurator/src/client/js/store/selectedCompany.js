import Store from './store'


const store = Store();

export default {
  getStore$() {
    return store.getStore$();
  },
  setCompanyAircraftConfig(companyAircraft) {
    store.updateStore(companyAircraft);
  },
  updateStore(nextCompanyAircraft) {
    store.onNext(nextCompanyAircraft);
  }
}
