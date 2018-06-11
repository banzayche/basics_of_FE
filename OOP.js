// ### Extend ES6 ###
// extend class using ES6
// class A1 {
//   whoIAm() {
//     console.log('Im A1');
//   }
// }

// ### Extend ES5 ###
// extend class A1 describe two situation #1, #2

function A1() {
  // #1
  // this.whoIAm = function() {
  //   console.log('Im A1');
  // }
}
// #2
// A1.prototype.whoIAm = function() {
//   console.log('Im A1');
// };

function B1() {}

var a = new A1();
a.whoIAm();

var b = new B1(); 
b.whoIAm();