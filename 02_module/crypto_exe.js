// ctypto_exe.js
const crypto = require("crypto");
let pass = crypto.createHash("sha512").update("test1234").digest("base64");

//console.log("pass = " + pass);

//salt 값을 생성하는 함수
//random 값이 만들어짐
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
  // promise.then(result =>
  // {
  //   console.log(result);
  // })
  // .catch(err => console.error(err));
};
//createSalt(); // 함수호출
// salt 값을 활용해서 평문 -> 암호화문 변경

const createCryptoPassword = async (trPw) =>
  {
  let salt = await createSalt();
  console.log("salt= " + salt);
  salt = "CwSKDNLT647/bPjOusuhHAtFx+YHuUGKzcAigFWCDmmhQJtMR2eRYz9cGx9gwfrHuUA+oorlk1ah9HlA31U4cA==";
  pw = "fhImnVkVOVwv7C7ldGedPyBNmgXWeNKHFBAtjUKizzXaLBaFlUBOczFxMayiPBDuefX7xvzRCSUn//pwpEv1Yw==";
  //pdkdf2 에 trPw 자리에 "test1234" 넣고 생성하고 trPw 로 바꿔줘야댐
  crypto.pbkdf2(trPw, salt, 100000, 64, "sha512", (err, buf) =>
  {
    if(err)
    {
      console.log("err=>", err);
    }
    console.log(buf.toString("base64"));
    let crPw = buf.toString("base64");
    if(pw == crPw)
    {
      console.log("비밀번호 확인이 완료되었습니다.");
    }else
    {
      console.log("비밀번호를 확인해주세요.")
    }

  });
};
createCryptoPassword("test1234");