// REFLECT SYMBOL PROXY for meta programming.

// There is still a way to create wrapper objects, instances of Symbol: Object,
// called as a function, converts all values to objects, including symbols.

// > const sym = Symbol();
// > typeof sym
// 'symbol'

// > const wrapper = Object(sym);
// > typeof wrapper
// 'object'
// > wrapper instanceof Symbol
// true