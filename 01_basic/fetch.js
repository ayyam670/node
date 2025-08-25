// fetch(fetch(fetch()))
// fetch
// fetch

// async function() { await 호출.}

async function getPost()
{
  let response = await fetch("http://localhost:3000/posts");
  let data = await response.json();
  console.log(data);
  data.forEach(async (post) =>
  {
    let response = await fetch("http://localhost:3000/comments");
    let data = await response.json();
    console.log('post번호' + post.id + '에 대한 comments list');
    data.forEach(comment =>
    {
      if(comment.postId == post.id)
      {
        console.log('    내용:' + comment.body);
      }
    })
  });
}
getPost(); // 함수호출
// fetch("http://localhost:3000/posts")
//   .then((response) => response.json())
//   .then((data) =>
//   {
//     console.log(data);
//     data.forEach(post =>
//     {
//       // post에 대한 comments 조회
//       fetch("http://localhost:3000/comments")
//         .then((response) => response.json())
//         .then((data) => 
//           {
//           console.log('post번호' + post.id + '에 대한 comments list');
//           data.forEach(comment =>
//             {
//               if(comment.postId == post.id)
//               {
//                 console.log('    내용: ' + comment.body);
//               }
//             });
//           })
//         .catch(console.log);
//         // end comments fetch
//     });
//   })
//   .catch(console.log);

// {
//   method: "post",
//   body: JSON.stringify({id : "2", body: "second comments for postId: 2", postId: 2} ),
//   headers: {"Content-Type": "application/json;charset=utf-8"},
// }
// {
//   method: "put",
//   body: JSON.stringify({id : "2", title: "server update3333", author: "user01"}),
//   headers: {"Content-Type": "application/json;charset=utf-8"},
// }
// {
//   method: "delete"
// }