import request from "../util/request";

export function getPostApi() {
  return request({
    url:'https://peaceful-sands-42159.herokuapp.com/api/products',
    method: 'get'
  })
}

// export function createPost(data) {
//   return request({
//     url:'/posts',
//     method: 'get',
//     data
//   })
// }

export function updatePostApi(id,data) {
  return request({
    url: `/posts/${id}`,
    method: 'put',
    data
  })
}