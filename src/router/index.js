import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import RentContract from '@/components/RentContract'
import BuyContract from '@/components/BuyContract'
import HowWorks from '@/components/HowWorks'
import About from '@/components/About'
import Legal from '@/components/Legal'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/contratoalquiler',
      name: 'RentContract',
      component: RentContract
    },
    {
      path: '/contratocompraventa',
      name: 'BuyContract',
      component: BuyContract
    },
    {
      path: '/comofunciona',
      name: 'HowWorks',
      component: HowWorks
    },
    {
      path: '/sobrenosotros',
      name: 'About',
      component: About
    },
    {
      path: '/crearavisolegal',
      name: 'Legal',
      component: Legal
    }
  ]
})
