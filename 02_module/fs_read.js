// fs_read.js

const fs = require("fs");
// 비동기(non블로킹)동기/(블로킹)
fs.readFile("./stdout.log", "utf8", (err,buf) =>
  // callback 함수
{
  if(err)
  {
    console.error("예외발생");
    return;
  }
  console.log(buf);
});

let errBuf = fs.readFileSync("./stderr.log", "utf8");  //동기처리
console.log(errBuf);

console.log("다른코드");
