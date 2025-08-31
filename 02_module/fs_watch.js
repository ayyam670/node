// fs_watch.js

const fs = require("fs");
const path = require("path");
let sql = require("./sql.js");

fs.watchFile(__dirname + "/sql.js", () => {
  console.log("재시작 없이 반영");
  delete require.cache[require.resolve("./sql.js")];
  sql = require("./sql.js");
});

// 서버를 재시작 할 필요없이 자동으로 새 내용이 sql 변수에 반영
// fs.watchFile: 파일 변경 감시.
// require.cache 삭제 후 다시 require: 모듈을 새로 불러오기.
// 결과: 서버 재시작 없이도 sql.js 변경 즉시 반영.
