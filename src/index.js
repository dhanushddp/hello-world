import LoginPage from "./components/LoginPage.vue";
import PersonalInfo from './components/PersonalInfo.vue';
import ProductDescription from '../src/components/ProductDescription.vue'
import VueRouter from 'vue-router'



let routes = [{
    path: '/home',
    name: "PersonalInfo",
    component: PersonalInfo ,
    // beforeEnter() {
    //   // console.log(to)
    // alert('not authorised')
    // // else
    //  return true
    // }
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
  router.beforeEach((to, from,next)=> {
    if(to.name== 'PersonalInfo' && from.name != 'LoginPage') {
       alert('You are not authorised')
        return false
    }
   next()
  })
 

  router.beforeEach((to, from,next)=> {
    if(to.name== 'ProductDescription' && from.name != 'PersonalInfo') {
       alert('You are not authorised')
        return false
    }
   next()
  })

  // router.beforeEach((to, from,next)=> {
  //   if(to.name== 'PersonalInfo' && from.name != 'LoginPage') {
  //      alert('You are not authorised')
  //       return false
  //   }
  //  next()
  // })


  // router.beforeResolve((to, from,next)=> {
  //   console.log(to)
  //   console.log(from)
  //   console.log('before resolved')
  //   next()
  // })
export default router

