import request from "../util/request";

export function getPostApi() {
  return request({
    url:'/posts',
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