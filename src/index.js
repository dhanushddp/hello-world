import LoginPage from "./components/LoginPage.vue";
import PersonalInfo from './components/PersonalInfo.vue';
import ProductDescription from '../src/components/ProductDescription.vue'
import VueRouter from 'vue-router'



let routes = [{
    path: '/home',
    name: "PersonalInfo",
    component: PersonalInfo 
  },
  {
    path: '/login',
    name: "LoginPage",
    component: LoginPage
  },
  {
     path:'/description',
     name:'ProductDescription',
     component:ProductDescription
  },
  {
    path: '/',
    name: "LoginPage",
    component: LoginPage
  },
]
  const router = new VueRouter(
    {
      mode: "history",
      routes
    }
  )
export default router

