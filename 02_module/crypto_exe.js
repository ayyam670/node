// ctypto_exe.js
const crypto = require("crypto");
let pass = crypto.createHash("sha512").update("test1234").digest("base64");

console.log("pass = " + pass);

const createSalt = () =>
{
  //let promise = new Promise((resolve, reject)=>
  return new Promise((resolve, reject)=>
  {
    crypto.randomBytes(64, (err, buf) =>
    {
      if(err)
      {
        // 실패.
        reject(err);
      }else
      {
        // 성공.
        resolve(buf.toString("base64"));
      }
    });
  });
  promise.then(result =>
  {
    console.log(result);
  })
  .catch(err => console.error(err));
};
//createSalt(); // 함수호출
// salt 값을 활용해서 평문 -> 암호화문 변경

const createCryptoPassword = async (trPw) =>
  {
  let salt = await createSalt();
  console.log("salt= " + salt);
  salt = "n8Dq869PArvdEWjJIeuWWqT4QrjINOqykRZhp4AwraGoeXgX9r5F4myqXkeNd3QY8lsCx0LjoK8TalROglquqg==";
  let pw = "K74MSLkafRuKZ1Ooucvh2xa4Q3nz+R/hFWIShN96SPHNcem+uQ6mFMe9kkJQqp5EaoZnJeaFpl310TmlzRgNyQ==";
  crypto.pbkdf2(trPw, salt, 100000, 64, "sha512", (err, buf) =>
  {
    if(err)
    {
      console.log("err=>", err);
      return;
    }
    //console.log(buf.toString("base64"));
    let crPw = buf.toString("base64");
    if(pw == crPw)
    {
      console.log("비밀번호 확인이 완료되었습니다.");
    }else
    {
      console.log("비밀번호를 확인해주세요.")
    }

  });
}
createCryptoPassword("test1234");