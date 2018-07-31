class Observable {
  next(data) {

  }

  subscribe(fn) {
  }
}

const observable = new Observable();
observable.subscribe((data) => {
  console.log(data);
});
observable.next(5);
observable.next(20);
observable.next(44);

// should log one subscriber
// 5  
// 20
// 44

// multiple subscribers support
