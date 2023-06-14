// BEGIN
const bind = (obj, fn) => {
  return function() {
    return fn.apply(obj, arguments);
  }
};

export default bind;
// END