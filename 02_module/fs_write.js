// fs_write.js

const fs = require("fs");
// fs.readFile(비동기) / fs.readFileSync(동기) 활용해서 stdout.log 정보를 읽어들이고...

fs.writeFile("./file_log.txt", "\n안녕하세요3\n", {encoding: "utf8", flag: "a" },
(err) =>
{
  if(err)
  {
    console.errer("예외발생");
    return;
  }
  console.log("파일생성완료!");
});
