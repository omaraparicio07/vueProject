import Vue from 'vue'
import Router from 'vue-router'
import Home  from "../views/Home"
import ERSchemaEditor from '../views/ERSchemaEditor'
import RelationalSchema from '../views/RelationalSchema'
import NoRelationalSchema from '../views/NoRelationalSchema'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'Home',
      component:Home
    },
    {
      path: '/ERSchemaEditor',
      name: 'ERSchemaEditor',
      component: ERSchemaEditor
    },
    {
      path:'/RelationalSchema',
      name:'RelationalSchema',
      component:RelationalSchema
    },
    {
      path: '/NoRelationalSchema',
      name: 'NoRelationalSchema',
      component: NoRelationalSchema
    }
  ],
  mode: 'history'
})
