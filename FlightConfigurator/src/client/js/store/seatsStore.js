import Store from './store'


const store = Store();
let seats = [0,0,164];

store.getStore$().subscribe((newSeats) => {
  seats = newSeats
})

export default {
  getStore$() {
    return store.getStore$();
  },
  setSeats(seats) {
    store.updateStore(seats);
  },
  reset(){
    store.updateStore([0,0,164]);
  },
  get(){
    return seats;
  }
}
