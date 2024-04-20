import { createRouter, createWebHistory } from 'vue-router'

import * as Public from  '@/views/Public'

import * as Admin from  '@/views/Admin'

import NotFoundView from '@/views/Public/NotFoundView.vue'
import LoginViewVue from '@/views/auth/LoginView.vue'
import { authGuard } from '@/_helpers/auth-guard'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'public',
      component: Public.LayoutViewVue,
      children: [{path: '/', name: 'home', component: Public.HomeView },
      { path: '/contact',name: 'contact',component: Public.ContactView },
       {path: '/cocktails',name: 'cocktails',component: Public.CocktailView},
      ]
    },

    {
      path:'/admin',
      name: 'admin',
      component: Admin.AdminLayout,
      children: [
        {path: 'dashboard', name: 'dashboard', component: Admin.DashboardViewVue  },
        {path: 'users/index', name:'uList',  component:Admin.UserIndexViewVue  },
        {path: 'users/add', name:'uAdd', component: Admin.UserAddViewVue  },
        {path: 'users/edit/:id(\\d+)',  name:'uEdit', component: Admin.UserEditViewVue, props: true  },


        {path: 'cocktails/index', name:'cList',  component:Admin.CocktailIndexViewVue  },
        {path: 'cocktails/edit/:id(\\d+)?', name:'cEdit', component: Admin.CocktailEditViewVue, props: true   },


      ]

    },
    {
      path: '/login', name: 'login',component:LoginViewVue,

    },


    {
      path:'/:pathMatch(.*)*',
      component:NotFoundView
    }
    

  ]
})

//Verouillage de la partie admin
router.beforeEach((to, from, next) => {
  // console.log(to.matched[0].name)

  if(to.matched[0].name== 'admin'){
    // console.log('pas de token pas d\'admin')
    authGuard();
  }
next()
 })

export default router
