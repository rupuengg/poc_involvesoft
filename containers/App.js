import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import InvolvesoftTheme from '../theme.js'
import Header from '../Global/Header/component/Header.js'
import NavPanelContainer from '../Global/NavPanel/container/NavPanelContainer'
// import Login from '../Auth/component/Login.js'

const muiTheme = getMuiTheme(InvolvesoftTheme)

export default class App extends Component {
  static propTypes = {
    routes: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
  }

  static defaultProps = {
    store: {}
  }
  render () {
    const { routes, store } = this.props
    return (
      <Provider store={store}>
        <MuiThemeProvider muiTheme={muiTheme}>
          <div>
            <Header title='Involvesoft' />
            <NavPanelContainer />
            <Router history={browserHistory} children={routes} />
          </div>
        </MuiThemeProvider>
      </Provider>)
  }
}
