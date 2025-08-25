//console_class.js

const {Console} = require("console");

const fs = require("fs"); // fs = file system
const {defaultNum} = require("./helloworld.js")

const output = fs.createWriteStream("./stdout.log"); // 파일 쓰기 기능
const errput = fs.createWriteStream("./stderr.log");

const logger = new Console({stdout:output, stderr: errput});  // 내용을 파일에 저장해서 나중에 확인하고 싶으면 stdout, 에러 도 마찬가지
logger.log("디폴트값 : %d", defaultNum);
logger.error("에러가 발생했습니다.");

for(let i=0; i<10; i++)
{
  logger.log(`i의 값은 ${i}`); // 파일에 작성
  console.log(`i의 값은 ${i}`); // 콘솔에 출력
}