// timer.js
setTimeout(()=>
{
  console.log("1초 후에 실행됩니다.");
}, 1000);

const interval = setInterval(()=>          // 반복 작업에 활용
{
  console.log("매 1초 후에 실행됩니다.");
}, 1000);

setTimeout(()=>
{
  clearInterval(interval);
}, 5000);

setImmediate(()=>
{
  console.log('코드가 실행된 후 실행')  // 이벤트루프 stack에 작업을 완료.
                                      //  queue에 있는 작업을 실행하기 전 실행
});

let sum = 0;
for(let i=0; i < 99999; i++)
{
  sum += i;
}
console.log("sum=>" + sum);