// BEGIN
const make = (numer = 0, denom = 1) => ({
    setNumer(value) {
      numer = value;
    },
    setDenom(value) {
      denom = value;
    },
    getNumer() {
      return numer;
    },
    getDenom() {
      return denom;
    },
    toString() {
      return `${numer}/${denom}`;
    },
    add(other) {
      const newNumer = numer * other.getDenom() + other.getNumer() * denom;
      const newDenom = denom * other.getDenom();
      return make(newNumer, newDenom);
    },
  });
  
  export default make;
// END