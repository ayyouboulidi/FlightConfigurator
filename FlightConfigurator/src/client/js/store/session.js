import Store from './store'


const store = Store();

let session = "ct";

store.getStore$().subscribe((newSession) => {
  session = newSession
})


export default {
  getStore$() {
    return store.getStore$();
  },
  setSession(session) {
    store.updateStore(session);
  },
  get() {
    return session
  }
}
