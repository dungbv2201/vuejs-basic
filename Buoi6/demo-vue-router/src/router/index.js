import Vue from 'vue'
import VueRouter from "vue-router";
import Home from "../view/Home";
import About from "../view/About";
import NotFound from "../view/NotFound";
import Demo from "../view/Demo";
import LayoutComponent from "../components/LayoutComponent";
import Login from "../view/Login";
Vue.use(VueRouter)

const routes =[
  {
    path: '/home',
    component: LayoutComponent,
    children:[
      {
        path:'',
        component: Home
      }
    ]
  },
  {
    path: '/about',
    component: LayoutComponent,
    children:[
      {
        path:'',
        component: About
      }
    ]
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '*',
    component: NotFound
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router