//import {myFunc, sum} from "./helloworld.js";  //export 했던 함수 불러와서 사용가능

// import 와 같은 기능
const {myFunc, sum} = require("./helloworld.js");

myFunc();
let n1 = 11;
let n2 = 13;
console.log(`두 수 ${n1}, ${n2}의 합은 ${sum(n1, n2)}`);