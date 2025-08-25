// [].sort()

let fruits = ['apple', 'cherry', 'banana'];

fruits.sort();

fruits.forEach(fruit =>
{
  console.log(fruit);
});

let numbers = [1,10,100,2,6,4,8,54,6,3,7];

numbers.sort(function(a,b)
{
  if(a>b) // b>a 는 내림차순
  {
    return 1;
  }else
  {
    return -1;
  }
});

// return 값	의미
// -1	a가 b보다 앞에 와야 함 (a < b)
// 0	a와 b의 순서를 바꾸지 않음
// 1	a가 b보다 뒤에 와야 함 (a > b)

numbers.forEach(ele=>
{
  console.log(ele);
});

// filter()
//[10, 23, 46, 17, 56].filter(()=>{});  익명함수, 화살표함수
// [10, 23, 46, 17, 56].filter((elem, idx, ary)=>
//   {
//     console.log('elem = ' + elem);
//     if(elem>30)
//     {
//       return true;
//     }
//   })
//   .forEach(elem=>
//     {
//       console.log('elem > 30 = ' + elem);
//     });

[
  {name:"Hong", point:10},
  {name:"Kim", point:23},
  {name:"Park", point:46},
  {name:"Choi", point:17},
  {name:"Hwang", point:56}
]
.filter((elem, idx, ary)=>
  {
    // console.log(elem);
    if(elem.point > 30)
    {
      return true;
    }
  })
  .forEach((elem)=>
    {
      console.log('name = ' + elem.name);
    });