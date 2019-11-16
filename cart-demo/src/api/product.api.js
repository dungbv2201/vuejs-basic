import request from "../utils/request";

const urlProducts = '/products';

export function getProductsApi(page = 1) {
  return request({
    url: urlProducts,
    method: 'get',
    params:{
      page
    }
  })
}

export function showProduct(id) {
  return request({
    url: `${urlProducts}/show/${id}`,
    method: 'get'
  })
}

export function getProductsRelative(params) {
  return request({
    url: `${urlProducts}/relative/${params.categoryId}/${params.id}`,
    method: 'get'
  })
}