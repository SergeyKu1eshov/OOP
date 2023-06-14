// BEGIN
export default function each (collection, fn) {
    collection.map(item => fn.call(item));
} 
// END
