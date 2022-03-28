const SubjectFactory = () => {
  let observers = [];

  const subscribe = (fn) => {
    observers.push(fn);
  };

  const unsubscribe = (fn) => {
    observers = observers.filter((item) => item !== fn);
  };

  const run = (msg) => {
    observers.forEach((o) => o(msg));
  };

  return {
    subscribe,
    unsubscribe,
    run,
  };
};

let subject = SubjectFactory();

const hello = (msg) => {
  console.log('Hey ' + msg);
};

subject.subscribe(hello);
subject.run('#1');

subject.unsubscribe(hello);
subject.run('#2');

subject.subscribe(hello);
subject.run('#3');
