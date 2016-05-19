import { Subject } from 'rx'

export default function Store() {
  let store$ = new Subject();

  return {
    getStore$() {
      return store$;
    },
    updateStore(nextStore) {
      store$.onNext(nextStore);
    }
  }
}
