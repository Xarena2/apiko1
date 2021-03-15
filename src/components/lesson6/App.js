import { observable, action, computed, autorun, makeObservable } from "mobx";
import React from "react";
import { observer } from "mobx-react";

class Counter {
  count = 0;

  constructor(value) {
    makeObservable(this, {
      count: observable,
      increment: action.bound,
      countToPow: computed,
      countToTriple: computed
    });
  }

  increment() {
    this.count += 1;
  }
  get countToPow() {
    return this.count * this.count;
  }
  get countToTriple() {
    return this.count * this.count * this.count;
  }
}

const store = new Counter();

autorun(() => {
  console.log(store.count);
});

autorun(() => {
  console.log(store.countToPow);
});

autorun(() => {
  console.log(store.countToTriple);
});

class Observable {
  constructor(value) {
    this._value = value;

    this._currentvalues = [];
    this._listeners = [];
  }
  subscribe(cb) {
    // this._currentvalues.push(this._value);
    this._listeners.push(() => cb(this._value));
  }
  next(val) {
    this._value = val;
    this._currentvalues.push(this._value);
    this._listeners.forEach((cb) => {
      cb();
    });
  }
}

const customObservable = new Observable(1);

customObservable.subscribe((currentValue) => {
  console.log(currentValue);
});

customObservable.subscribe((currentValue) => {
  console.log("second " + currentValue);
});
customObservable.next(2);
customObservable.next(3);

function test() {
  console.log(customObservable);
  return (
    <div>
      <h1>this is sample realization mobX</h1>
      <h1>Counter {store.count}</h1>
      <h1>Counter {store.countToPow}</h1>
      <h1>Counter {store.countToTriple}</h1>
      <button onClick={() => store.increment()}>INCREMENT</button>
    </div>
  );
}

const ObserverApp = observer(test);

export default ObserverApp;
