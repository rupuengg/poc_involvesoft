import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import theme from '../../theme'
import { getStyles } from '../style/style.js'

export default class Login extends Component {
  static propTypes = {
    styles: PropTypes.object,
    primaryHeader: PropTypes.string
  }
  static defaultProps = {
    primaryHeader: 'LOGIN'

  }
  constructor (props, context) {
    super(props, context)
  }
  render () {
    const styles = getStyles(this.props, theme)
    const { primaryHeader } = this.props
    const containerStyle = {
      ...styles.container,
      ...this.props.styles
    }
    return (
      <div style={styles.primaryStyle}>
        <Paper style={styles.paperStyle} zDepth={3} rounded={false}>
          <div style={containerStyle}>
            <div style={styles.loginTopWrapper}>
              <div style={styles.header}>
                <h2 style={styles.headerHeadline}>{primaryHeader}</h2>
              </div>
              <TextField
                style={styles.textField}
                floatingLabelText='Username'
              />
              <br /><br />
              <TextField
                style={styles.textField}
                floatingLabelText='Password'
                type='password'
              />
              <br />< br /><br />
              <RaisedButton backgroundColor={styles.raisedButton.backgroundColor} label='Log In' />
            </div>
          </div>
        </Paper>
      </div>)
  }
}
