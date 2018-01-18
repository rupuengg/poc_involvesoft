import Login from './Auth/component/Login'
import CoreLayout from './Layouts/CoreLayout'
import NavPanelContainer from './Global/NavPanel'

export const createRoutes = (store) => ({
  path: '/',
  component: CoreLayout,
  childRoutes: [{
    path: '/login',
    component: Login
  },
  {
    path: '/navpanel',
    component: NavPanelContainer
  }] })

export default createRoutes
