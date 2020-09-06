import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import FormListPage from '../views/formList/FormListPage.vue'
import MarketoSettingPage from '../views/marketoSetting/MarketoSettingPage.vue'
import FormBuilderPage from '../views/formBuilder/FormBuilderPage.vue'

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
  },
  {
    path: '/forms/:formId/builder',
    name: 'form-builder',
    component: FormBuilderPage
  }
]

const routerHistory = createWebHistory()

export const router = createRouter({
  history: routerHistory,
  strict: true,
  linkActiveClass: 'linkSelected',
  routes
})
