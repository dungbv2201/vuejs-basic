import request from "../util/request";

export function getPhotoApi() {
  return request({
    url:'/photos',
    method: 'get'
  })
}