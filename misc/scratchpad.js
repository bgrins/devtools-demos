let sym = Symbol;
let spec = sym.species;

class A extends Array {
  static [spec] = Array;
}

let typeA = A.from([1, 2, 3]);

let typeAArray = A.from([1, 2, 3]) // return type: A
  .map((x) => x + 1); // return type: Array
console.log(typeA, typeAArray);

class B extends Array {
  static [Symbol.species] = Array;
}

let typeB = A.from([1, 2, 3]);

let typeBArray = A.from([1, 2, 3]) // return type: A
  .map((x) => x + 1); // return type: Array
console.log(typeB, typeBArray);
