import Login from './Auth/component/Login'
import CoreLayout from './Layouts/CoreLayout'
import NavPanelContainer from './Global/NavPanel'
import NavLayout from './Layouts/NavLayout/NavLayout.js'
import CreateCommunity from './CreateCommunity/component/CreateCommunity'
import CommunityView from './CommunityView/container/CommunityView'  

export const createRoutes = (store) => ({
  path: '/',
  component: CoreLayout,
  indexRoute: { component : Login},
  childRoutes: [{
  path: '/logged-in',
  component: NavLayout,
  childRoutes: [{
    path: '/volunteer',
    component: Login
  },
  {
    path: '/communities',
    component: CommunityView, 
    childRoutes: [{
      path: '/all-communities',
      component: Login
    },
    {
      path: '/my-communities',
      component: Login
    },
    {
      path: '/create-a-community',
      component: CreateCommunity
    }
    ]
  }] }]})

export default createRoutes
