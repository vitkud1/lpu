import Vue from 'vue'
import VueRouter from 'vue-router'
import Org_lpu from '../views/Org_lpu.vue'
import Admin from '../views/Admin.vue'
import Analit_ras from '../views/Analit_ras.vue'
import Osn_lpu from '../views/Osn_lpu.vue'
import Spr_med_ob from '../views/Spr_med_ob.vue'
import Spr_proizv_ren_ob from '../views/Spr_proizv_ren_ob.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Org_lpu',
    component: Org_lpu
  },
  {
    path: '/spr_med_ob',
    name: 'Spr_med_ob',
    component: Spr_med_ob
  },
  {
    path: '/spr_proizv_ren_ob',
    name: 'Spr_proizv_ren_ob',
    component: Spr_proizv_ren_ob
  },
  {
    path: '/osn_lpu',
    name: 'Osn_lpu',
    component: Osn_lpu
  },
  {
    path: '/analit_ras',
    name: 'Analit_ras',
    component: Analit_ras
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
]

const router = new VueRouter({
  routes
})

export default router
