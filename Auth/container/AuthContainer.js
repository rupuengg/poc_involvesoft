import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Login from '../component/Login.js'
import {
  authActions,
  LOGGED_IN_STATUS,
  LOGGED_OUT_STATUS
} from '../../store/auth'

/*
* @Function Mapping component state to props.
* @param {Object} state
* @returns {Object} containing props
*/
const mapStateToProps = (state, ownProps) => ({
  auth: state.authentication
})

export class AuthContainer extends Component {
  render () {
    return (<Login onLogin={this.props.login} />)
  }
}

export default connect(mapStateToProps, {
  ...authActions })(AuthContainer)
