// excel.js
const xlsx = require("xlsx");
const sql = require("./sql"); // ./sql/index.js 에서 execute 가져오기 위해서

// DB 조회 후 => 엑셀 파일.
async function db_to_excel()
{
  const workbook = xlsx.utils.book_new();  // workbook 생성함수.
  let resultSet = await sql.execute("select * from customers");
  console.log(resultSet);
  // 배열 -> sheet : json_to_sheet   구조: workbook > sheet > cell
  const firstSheet = xlsx.utils.json_to_sheet(resultSet,
    {
      header: ["id", "name", "email", "phone", "address"],
    });

    xlsx.utils.book_append_sheet(workbook, firstSheet, "Customers");  // 시트 생성.
    xlsx.writeFile(workbook, "./logs/customers.xlsx"); // 엑셀파일 생성.
  // 시트 -> workbook -> customers.xlsx
}
db_to_excel();



console.log("파일 저장 완료");

// 엑셀 조회 후 => DB insert
function excel_to_db()
{
  const workbook = xlsx.readFile("./logs/write2.xlsx");  // excel 위치
  // console.log(workbook.SheetNames[0]);
  const firstSheetName = workbook.SheetNames[0];
  const firstSheet = workbook.Sheets[firstSheetName];

  let jsonSheet = xlsx.utils.sheet_to_json(firstSheet);  // json 모양의 javascript 객체생성
  console.log(jsonSheet);

  jsonSheet.forEach(async(customer) =>
  {
    let result = await sql.execute("insert into customers set ?", customer); // DB에 insert
    console.log(result);
  });
}