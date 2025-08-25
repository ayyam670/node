// [].reduce().
let result = [10, 15, 20, 25, 30].reduce((acc, elem) =>
{
  console.log(acc, elem);
  if(elem%2 == 0)
  {
    acc.push(elem);
  }
  return acc;
  //return acc + elem;  // 다음 순번의 acc 값.
}, []); // 0은 초기순번
console.log(result);