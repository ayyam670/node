const express = require("express");

const app = express();  // express 인스턴스 생성

// url - 실행함수. => 라우팅.
app.get("/", (req, resp) =>
{
  resp.send("/ 경로 호출됨.");
});

app.get("/start", (req, resp)=>
{
  resp.send("/start 경로 호출됨.");
});

// 서버스타트
app.listen(3000, () =>
{
  console.log("http://localhost:3000 서버실행.");
});

