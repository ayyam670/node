// app.js
const express = require("express");
const mysql = require("mysql2");
const parser = require("body-parser");


// connect pool 생성.
const pool = mysql.createPool(
{
  host: "127.0.0.1", //= localhost
  port: 3306,
  user: "dev01",
  password: "dev01",
  database: "dev",
  connectionLimit: 10,
});


const app = express();
app.use(parser. urlencoded()); // x-www-form-urlencoded
app.use(parser.json());


app.get("/", (req, resp) =>
{
  resp.send("/실행");
});

// 고객목록.
app.get("/customers", (req, resp) =>
{
  //connection = pool.getConnection((err, connetion) =>
  pool.getConnection((err, connection) =>
  {
    // getConnection => connection 객체 획득
    if(err)
    {
      console.log(err);
      return;
    }
  
    connection.query("select * from customers", (err, results) =>
    {
      if(err)
      {
        console.log(err);
        resp.send("쿼리 실행 중 에러");
        return;
      }
      console.log(results);
      //resp.send("실행완료.");
      resp.json(results);
      connection.release(); // connection -> pool 환원.
    }); // end query().
  }); // end getConnection().
});

// 등록
app.post("/customer", (req, resp) =>
{
  console.log(req.body.param);
    pool.getConnection((err, connection) =>
    {
      if(err)
      {
        console.log(err);
        return;
      }
    
      connection.query(//"insert into customers (name, email, phone) values (?,?,?)", [req.body.name, req.body.email, req.body.phone],
                      "insert into customers set ?", [req.body.param], // [{name: "방재우", email: "bang@email.com", phone: "010-1111-7777"}]
      (err, results) =>
      {
        if(err)
        {
          console.log(err);
          resp.send("쿼리 실행 중 에러");
          return;
        }
        console.log(results);
        //resp.send("실행완료.");
        resp.json(results);
        connection.release(); // connection -> pool 환원.
      }); // end query().
    }); // end getConnetion().
  });

// http://localhost:8080/boardList.do?page=3
// http://localhost:3000/customer/:id
app.delete("/customer/:id", (req,resp) =>
{
  console.log(req.params.id);
  pool.getConnection((err, connection) =>
  {
    // getConnection => connection 객체 획득
    if(err)
    {
      console.log(err);
      return;
    }
  
    connection.query("delete from customers where id = ?", Number(req.params.id) ,
    (err, results) =>
    {
      if(err)
      {
        console.log(err);
        resp.send("쿼리 실행 중 에러");
        return;
      }
      console.log(results);
      //resp.send("실행완료.");
      resp.json(results);
      connection.release(); // connection -> pool 환원.
    }); // end query().
  }); // end getConnection().
  resp.send("OK");
});


app.listen(3000, () =>
{
  console.log("http://localhost:3000");
});