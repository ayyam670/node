// sql/index.js
const mysql = require("mysql2");

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

function execute(sql="select * from customers", param=[])
{
  return new Promise((resolve, reject) =>
  {

    pool.getConnection((err, connection) =>
    {
      // getConnection => connection 객체 획득
      if(err)
      {
        //console.log(err);
        return reject(err);
      }
    
      connection.query(sql, param, (queryErr, results) =>
      {
        connection.release(); // connection -> pool 환원.
        if(queryErr)
        {
          //console.log(err);
          //resp.send("쿼리 실행 중 에러");
          return reject(queryErr);
        }
        //console.log(results);
        //resp.send("실행완료.");
        //resp.json(results);
        resolve(results);
      }); // end query().
    }); // end getConnection().
  }); // end Promise();
}// end execute().

module.exports =
{
  execute,
}