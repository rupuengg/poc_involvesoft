import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Paper from 'material-ui/Paper'
import Header from '../../Global/Header/component/Header.js'

const mapStateToProps = (state) => {
  return {
    navbarExpanded: state.uistate.navbarExpanded,
    navbarShown: state.uistate.navbarShown
  }
}

/**
 * Layout for the system dashboard. Contains Header, Secondary Header, Left navigation and main display area.
 */
class CoreLayout extends Component {

  static propTypes = {
    children: PropTypes.object.isRequired,
    navbarShown: PropTypes.bool.isRequired
  }
  render () {
    const { navbarShown } = this.props
    const classes = []

    if (navbarShown) {
      classes.push('sk-navbar--active')
    }

    return (
      <div id='il-spa' className={classes.join(' ')}>
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
