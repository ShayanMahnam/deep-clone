// Will return a shallow clone of any object or array passed to it, does not clone functions
function shallowClone(arg) {
  if (!arg || typeof arg !== "object") {
    return undefined;
  }

  // here, argument is either an array or an object
  const newArray = [];
  if (Array.isArray(arg)) {
    arg.forEach((value) => newArray.push(value));
    return newArray;
  }

  const newObject = {};
  Object.keys(arg).forEach((key) => {
    newObject[key] = arg[key];
  });

  return newObject;
}

// Will return a deep clone of any array or object passed to it, does not clone functions
function deepClone() {
  return null;
}

module.exports = { shallowClone, deepClone };
