// setInterval.js
const readline = require("readline");
const rl = readline.createInterface(
{
    input: process.stdin,
    output: process.stdout,
});

// count: 100 -> 0 1씩 감소.
let count = 100;
const interval = setInterval(()=>
  {
    if(count <= 0)
    {
      console.log(`\n실패`);
      //rl.close();  // stream 은 사용후 close();
      process.exit(); // node 프로세스를 강제로 종료
    }
    count--;
    //console.log(`현재 count: ${count}`);
  },100);
  
  let wordAry = "Lorem ipsum dolor sit."// amet consectetur, adipisicing elit. Recusandae, neque pariatur quasi adipisci illo atque odio officia perspiciatis non, reprehenderit nesciunt laborum quibusdam, deleniti culpa libero! Et, porro. Nihil, sed.'
  .split(' ');

function myFunction()
{
  // 100이 완료되기 전에 배열에 있는 값을 clear 하면 성공.
// 100이 완료된 후 배열에 값이 있으면 실패

// if(count <= 0)
//   {
//     console.log(`\n실패`);
//     rl.close();  // stream 은 사용후 close();
//   }
  
  rl.question("단어를 입력하세요.", (answer)=>
  {
      let search = answer;
      let idx = wordAry.indexOf(search);
      wordAry.splice(idx, 1);  // 값을 안넣어주면 삭제 (idx, 1, 'dddddd') 하면 수정
      
      wordAry.forEach(word =>
      {
          console.log(word);
      });
        myFunction();
        if(wordAry.length == 0)
        {
          console.log(`\n성공!`);
          process.exit();
        }
      });
}
myFunction();

