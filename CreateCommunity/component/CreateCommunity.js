import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import theme from '../../theme'
import { getStyles } from '../style/style.js'

// import { getAuthenticationURL } from '../../utils/httpRequest'
  /**
    * Login Component
    *
  */
class CreateCommunity extends Component {
  /**
    *Validation for props (Static propTypes)
    * @static
    * @type {object} validators
      {
        PropTypes styles object,
        PropTypes primaryHeader string,
      }
  */
  static propTypes = {
    styles: PropTypes.object,
    primaryHeader: PropTypes.string
  }

  /**
    * default prop values.
  */
  static defaultProps = {
    primaryHeader: 'LOGIN'

  }
  /**
    * creates a instance of Login.
    * @param {object} props
  */
  constructor (props, context) {
    super(props, context)

    this.state = {
      userId: '',
      password: ''
    }
  }
  /**
    *On click of Enter key
  */
  _handleEnterKey = (e) => {
    if (e.key === 'Enter' && this._checkSignInEnabled()) {
      this._login()
    }
  }
  /**
    *Checking SignIn enabled
  */
  _checkSignInEnabled () {
    const { userId, password } = this.state
    // const { auth } = this.props
    return userId.length && password.length// && auth.status !== LOGGING_IN_STATUS
  }

  /**
    *Setting Username value
  */
  _setUsername = (e) => {
    this.setState({
      userId: e.target.value.trim()
    })
  }

  /**
    *Setting Password value
  */
  _setPassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }
  /**
    *Authenticating user through API
  */
  _login = () => {
    const { userId, password } = this.state
    console.log(userId, password)
    // this.props.login(userId.toLowerCase(), password, getAuthenticationURL())
  }
  /**
    * React lifecycle method :
    * Renders this component
    * @returns {ReactElement} - wrapped in div
  */
  render () {
    const styles = getStyles(this.props, theme)
    const { primaryHeader } = this.props
    const { userId, password } = this.state
    const containerStyle = {
      ...styles.container,
      ...this.props.styles
    }
    return (
      <div>
        <Paper style={styles.paperStyle} zDepth={3} rounded={false}>
          <div style={containerStyle}>
            <div style={styles.loginTopWrapper} onKeyPress={this._handleEnterKey}>
              <div style={styles.header}>
                <h2 style={styles.headerHeadline}>{primaryHeader}</h2>
              </div>
              <TextField
                style={styles.textField}
                floatingLabelText='Username'
                value={userId}
                onChange={this._setUsername}
              />
              <br /><br />
              <TextField
                style={styles.textField}
                floatingLabelText='Password'
                value={password}
                onChange={this._setPassword}
                type='password'
              />
              <br />< br /><br />
              <RaisedButton backgroundColor={styles.raisedButton.backgroundColor}
                label='Log In'
                disabled={!this._checkSignInEnabled()}
                onClick={this._login}
                disabledBackgroundColor={styles.raisedButton.disabledBackgroundColor}
              />
            </div>
          </div>
        </Paper>
      </div>)
  }
}
export default CreateCommunity
