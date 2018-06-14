var input = new Array(1000).fill('a');

// RECURSION
function chunk(arr, step) {
  if (arr.length <= step) {
    return [arr];
  }

  let chunk2 = arr.slice(step);
  let chunk1 = arr.splice(0, arr.indexOf(chunk2[0]));
  return [chunk1, ...chunk(chunk2, step)];
}

console.time('recursion');
chunk(input, 3);
console.timeEnd('recursion');


// WHILE
var chunk2 = function (array, size) {

  var chunks = [];
  var iterations = Math.ceil(array.length / size);

  while (iterations--) {
    chunks.push(array.slice(0, size));
    array = array.splice(size);
  }

  return chunks;
}

console.time('testForEach');
chunk2(input, 3);
console.timeEnd('testForEach');