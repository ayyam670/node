fetch("http://192.168.0.83/HelloJSP/replyList.do?bno=145")
  .then((response) => response.json())
  .then((result) =>
    {
      console.log(result);

      result.filter((elem, idx, ary)=>
      {
        if(elem.reply.indexOf('연습') > -1)
        {
          return true;
        }
      })
      .forEach((elem)=>
      {
        console.log('연습이 포함된 reply = ' +elem.replyNo);
      })
    })
  .catch(console.err)