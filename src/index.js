import LoginPage from "./components/LoginPage.vue";
import HomePage from './components/HomePage.vue';
import ProductDescription from '../src/components/ProductDescription.vue'
import VueRouter from 'vue-router'
import CartComponent from "../src/components/CartComponent.vue";



let routes = [{
  path: '/home',
  name: "HomePage",
  component: HomePage,
},
{
  path: '/login',
  name: "LoginPage",
  component: LoginPage
},
{
  path: '/description',
  name: 'ProductDescription',
  component: ProductDescription
},
{
  path: '/',
  name: "LoginPage",
  component: LoginPage
},
{
  path:'/cart',
  name:'cartComponent',
  component:CartComponent

}
]

const router = new VueRouter(
  {
    mode: "history",
    routes
  }
)
// router.beforeEach((to, from, next) => {
//   if (to.name == 'HomePage' && from.name != 'LoginPage') {
//     alert('You are not authorised')
//     return false
//   }
//   next()
// })


// router.beforeEach((to, from, next) => {
//   if (to.name == 'ProductDescription' && from.name != 'HomePage') {
//     alert('You are not authorised')
//     return false
//   }
//   next()
// })


export default router

