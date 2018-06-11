function someFN() {
  var a = b = 3;
}
someFN();
console.log(typeof a !== 'undefined');
console.log(typeof b !== 'undefined');
