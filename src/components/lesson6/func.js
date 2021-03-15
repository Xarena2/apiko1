import React, { useRef, useState } from "react";

let accessedProperties = [];
const derivationGraph = {};
const store = observable({
  count: 0,
  increment() {
    return (this.count += 1);
  }
});

function observable(targetObject) {
  const observableObject = {};

  const id = Math.random();

  function getId(k) {
    return `Observable(${id}.${k})`;
  }

  const keys = Object.keys(targetObject);
  keys.forEach((key) => {
    const id = getId(key);

    observableObject[key] = targetObject[key];

    if (targetObject[key] !== "function") {
      Object.defineProperty(observableObject, key, {
        get() {
          accessedProperties.push(id);
          return targetObject[key];
        },

        set(val) {
          targetObject[key] = val;

          if (derivationGraph[id]) {
            derivationGraph[id].forEach((fn) => {
              fn();
            });
          }
        }
      });
    }
  });

  return observableObject;
}

function createReaction(whatShouldWeRunOnChange) {
  return {
    track(functionWhereWeUseObservables) {
      accessedProperties = [];
      functionWhereWeUseObservables();

      console.log(derivationGraph);
      console.log(accessedProperties[0]);

      accessedProperties.forEach((id) => {
        derivationGraph[id] = derivationGraph[id] || [];

        if (derivationGraph[id].indexOf(whatShouldWeRunOnChange) < 0) {
          derivationGraph[id].push(whatShouldWeRunOnChange);
        }
      });
    }
  };
}

function autorun(cb) {
  const reaction = createReaction(cb);

  reaction.track(cb);
}

autorun(() => {
  console.log(store.count);
});

function useForceUpdate() {
  const [, set] = useState(0);

  return () => set((val) => val + 1);
}

function observer(baseComponent) {
  const wrapper = () => {
    const forceUpdate = useForceUpdate();
    const reaction = useRef(null);

    if (!reaction.current) {
      reaction.current = createReaction(forceUpdate);
    }

    let result;

    reaction.current.track(() => {
      result = baseComponent();
    });
    return result;
  };

  return wrapper;
}
store.count = 6;
store.count = 7;
store.count = 8;
function App() {
  return (
    <div>
      <h1>this is sample realization mobX</h1>
      <h1>Counter {store.count}</h1>
      <button onClick={() => store.increment()}>INCREMENT</button>
    </div>
  );
}
const test = observer(App);

export default test;
