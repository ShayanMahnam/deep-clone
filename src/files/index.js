/**
 * JS Variables:
 * - string
 * - number
 * - boolean
 * - undefined
 * - null            PRIMITIVES
 * -----------------------------------
 * - object          ...NOT PRIMITIVES
 * - array
 * - function
 */

// BY VALUE - for primitives
// const x = 3;
// const y = 3;
// console.log(`VALUE COMPARISON IS: ${x === y}`);

// BY REFERENCE - for non-primitives
// const addressOfA = { value: 3 };
// const addressOfB = addressOfA;
// console.log(`REFERENCE COMPARISON IS: ${addressOfA === addressOfB}`);

const nestedObject = { nested: "object" };
const input = { nestedObject }; // same as {nestedObject: nestedObject};
const expected = { nestedObject };

console.log(input.nestedObject === expected.nestedObject);
