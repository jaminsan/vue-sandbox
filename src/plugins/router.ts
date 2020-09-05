import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import FormListPage from '../views/formList/FormListPage.vue'
import MarketoSettingPage from '../views/marketoSetting/MarketoSettingPage.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/forms',
    name: 'form-list',
    component: FormListPage
  },
  {
    path: '/marketo-setting',
    name: 'marketo-setting',
    component: MarketoSettingPage
  }
]

const routerHistory = createWebHistory()

export const router = createRouter({
  history: routerHistory,
  strict: true,
  linkActiveClass: 'linkSelected',
  routes
})
