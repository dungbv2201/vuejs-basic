import Vue from 'vue'
import VueRouter from "vue-router";
import Demo from "../components/Demo";
import LayoutComponent from "../view/layout/LayoutComponent";
import UserList from "../view/users/UserList";
import UserDetail from "../view/users/UserDetail";

Vue.use(VueRouter)

const routes =[
  {
    path:'/users',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: UserList,
        name: 'users'
      },
      {
        path: 'detail/:id/:name',
        component: UserDetail,
        name: 'userDetail'
      }
    ]
  },
  {
    path: '*',
    redirect: {name: 'userDetail'}
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router