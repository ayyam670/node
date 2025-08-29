// app.js
const express = require("express");
const parser = require("body-parser");
const sql = require("./sql");
const prodSql = require("./sql/sql"); // {productList:{query:``}, productList2:{query:``}, productDetail:{query:``}} query 구문을 가져오려고 하는것
const cors = require("cors");
//console.log(prodSql["productDetail"].query);

const app = express();
app.use(parser.urlencoded()); // x-www-form-urlencoded
app.use(parser.json());
app.use(cors());

app.get("/", (req, resp) => {
  resp.send("/실행");
});

// 상품쿼리.
app.post("/api/:alias", async (req, resp) => {
  // api?alias=~~~~~~~~~
  //console.log(prodSql[req.params.alias].query);
  let search = prodSql[req.params.alias].query; // alias:productDetail
  let param = req.body.param; // [{product_id:9, type:1, path:test.jpg}]        param:[2] ? 가 하나라서 param 하나만 있으면됨
  try {
    let result = await sql.execute(search, param);
    //console.log(result);
    resp.json(result); // 웹페이지에 출력
  } catch (err) {
    console.log(err);
    resp.json({ retCode: "Error" });
  }
});

// 고객목록.
app.get("/customers", async (req, resp) => {
  try {
    let customerList = await sql.execute("select * from customers");
    console.log(customerList);
    resp.json(customerList); // 웹페이지에 출력
  } catch (err) {
    console.log(err);
    resp.json({ retCode: "Error" });
  }
});

// 등록
app.post("/customer", async (req, resp) => {
  console.log(req.body.param);
  try {
    let result = await sql.execute("insert into customers set ?", [
      req.body.param,
    ]);
    console.log(result);
    resp.json(result); // 웹페이지에 출력
  } catch (err) {
    console.log(err);
    resp.json({ retCode: "Error" });
  }
});

// http://localhost:8080/boardList.do?page=3
// http://localhost:3000/customer/:id
app.delete("/customer/:id", async (req, resp) => {
  console.log(req.params.id);
  try {
    let remove = await sql.execute("delete from customers where id=?", [
      req.params.id,
    ]);
    console.log(remove);
    resp.json(remove); // 웹페이지에 출력
  } catch (err) {
    console.log(err);
    resp.json({ retCode: "Error" });
  }
  resp.send("OK");
});

app.put("/customer/:id", async (req, resp) => {
  console.log(req.params.id);
  try {
    let modify = await sql.execute("update customers set ? where id=?", [
      req.body.param,
      req.params.id,
    ]);
    console.log(modify);
    resp.json(modify); // 웹페이지에 출력
  } catch (err) {
    console.log(err);
    resp.json({ retCode: "Error" });
  }
  resp.send("OK");
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
