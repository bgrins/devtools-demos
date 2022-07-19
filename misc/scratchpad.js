let sym = Symbol;
let spec = sym.species;

class A extends Array {
  static get [spec]() {
    return Array;
  }
}

let typeA = A.from([1, 2, 3]);

let typeAArray = A.from([1, 2, 3]) // return type: A
  .map((x) => x + 1); // return type: Array
console.log(typeA instanceof A, typeA, typeAArray instanceof A, typeAArray);

class B extends Array {
  static get [Symbol.species]() {
    return Array;
  }
}

let typeB = B.from([1, 2, 3]);

let typeBArray = B.from([1, 2, 3]) // return type: A
  .map((x) => x + 1); // return type: Array
console.log(typeB instanceof B, typeB, typeBArray instanceof B, typeBArray);

class C extends Array {}

let typeC = C.from([1, 2, 3]);

let typeCArray = C.from([1, 2, 3]) // return type: C
  .map((x) => x + 1); // return type: C
console.log(typeC instanceof C, typeC, typeCArray instanceof C, typeCArray);


// MemberExpression[object.name="symbol"][property.name="species"]