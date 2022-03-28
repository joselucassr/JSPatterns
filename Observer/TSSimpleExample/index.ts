interface ISubject {
  subscribe(observer: Observer): void;
  unsubscribe(observer: Observer): void;
  notify(): void;
}

interface IObserver {
  update(): void;
}

class Subject implements ISubject {
  private observers: Observer[] = [];

  subscribe(observer: Observer): void {
    if (this.observers.includes(observer)) {
      return console.error('Este observer já está conectado.');
    }

    this.observers.push(observer);
    console.log('Observador adicionado.');
  }

  unsubscribe(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);

    if (observerIndex === -1) {
      return console.log('Este observer não está conectado.');
    }

    this.observers.splice(observerIndex, 1);
    console.log('Observador removido.');
  }

  notify(): void {
    this.observers.forEach((observer) => observer.update());
  }
}

class Observer implements IObserver {
  private id: number;

  constructor(_id: number) {
    this.id = _id;
  }

  update(): void {
    console.log(`Atualizando observer de id: #${this.id}`);
  }
}

const firstObserver = new Observer(1);
const secondObserver = new Observer(2);

const tsSubject = new Subject();

tsSubject.subscribe(firstObserver);
tsSubject.notify();

console.log('-------------');

tsSubject.subscribe(secondObserver);
tsSubject.notify();

console.log('-------------');

tsSubject.unsubscribe(secondObserver);
tsSubject.notify();
