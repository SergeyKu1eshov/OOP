// BEGIN
const magic = (...args) => {
    const sum = args.reduce((acc, num) => acc + num, 0);
    const innerFn = (...innerArgs) => magic(sum, ...innerArgs);
    innerFn.valueOf = () => sum;
    return innerFn;
  };
  
  export default magic;
// END
