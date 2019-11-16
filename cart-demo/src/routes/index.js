import Vue from 'vue';
import VueRouter from 'vue-router'
import ListProduct from "../view/ListProduct";
import NotFound from "../view/NotFound";
import LayoutComponent from "../components/LayoutComponent";
import ProductDetail from "../view/ProductDetail";
Vue.use(VueRouter);

const routes = [
  {
    path:'/',
    component: LayoutComponent,
    children:[
      {
        path:'',
        component: ListProduct
      },
      {
        path: "/product/:id",
        component: ProductDetail,
        name: 'productDetail'
      }
    ]
  },
  {
    path: '*',
    component: NotFound
  }
];

const router = new VueRouter({
  routes,
  mode:'history'
});

export default router