
var data = [];
for (let index = 500; index >= 0; index--) {
  data.push(Math.round(Math.random() * 15))
}
console.log('data - ', data);

var uniq3 = function (array) {
  return array.reduce((res, val) => {
    if (res.indexOf(val) == -1) {
      res.push(val);
    }
    return res;
  }, []);
}
console.time('test3')
uniq3(data);
console.timeEnd('test3')

var uniq4 = function (array) {
  var tmp = [];
  array.forEach((item) => {
    if (!tmp.includes(item)) { tmp.push(item) }
  })
  return tmp
}
console.time('test4')
uniq4(data);
console.timeEnd('test4')

var uniq1 = function (array) {
  return array.reduce((res, val) => {
    if (res.indexOf(val) == -1) {
      res.push(val);
    }
    return res;
  }, []);
}

console.time('test1')
uniq1(data);
console.timeEnd('test1')

var uniq2 = function (array) {
  var result = [];
  var itemsCount = array.length;
  for (let i = 0; i < itemsCount; i++) {
    !~result.indexOf(array[i]) && result.push(array[i]);
  }
  return result;
}
console.time('test2')
uniq2(data);
console.timeEnd('test2')
