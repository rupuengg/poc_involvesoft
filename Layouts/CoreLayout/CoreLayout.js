import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import Paper from 'material-ui/Paper'
import Header from '../../Global/Header/component/Header.js'
import Login from '../../Auth/component/Login.js'

const mapStateToProps = (state) => {
  return {
    navbarExpanded: state.uistate.navbarExpanded,
    navbarShown: state.uistate.navbarShown,
    auth: state.authentication
  }
}

/**
 * Layout for the system dashboard. Contains Header and main display area.
 */
class CoreLayout extends Component {

  /**
    * React lifecycle method
  */
  
  static propTypes = {
    children: PropTypes.object,
    navbarShown: PropTypes.bool.isRequired
  }
  render () {
    const { navbarShown } = this.props
    console.log(this.props.auth.loggedIn,'this.props.auth.loggedIn')
    return (
      <div id='il-spa' >
        <Paper zDepth={2}>
          <Header title='Involvesoft' />
        </Paper>
          {this.props.children}       
      </div>
    )
  }

}

export default connect(
  mapStateToProps, {}
)(CoreLayout)
