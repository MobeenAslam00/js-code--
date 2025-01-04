// we convert variable value to desire type like sometime input that is number taken as string or might be from from. we convert
// BUt conversion may cause some mistakes like NaN returnation if value is 33abc
// convert ho jata but value is NaN

let score="331"
let number= Number(score);
console.log(typeof number)
console.log( number)
let flag=""
let tester= Boolean(flag);
console.log(typeof tester)
console.log(tester)