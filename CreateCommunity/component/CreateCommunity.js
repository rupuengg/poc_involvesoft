import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'
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
    primaryHeader: 'Create Community'

  }
  /**
    * creates a instance of Login.
    * @param {object} props
  */
  constructor (props, context) {
    super(props, context)

    this.state = {
      name: '',
      community: ''
    }
  }
  /**
    *On click of Enter key
  */
  _handleEnterKey = (e) => {
    if (e.key === 'Enter' && this._checkSignInEnabled()) {
      this._create()
    }
  }
  /**
    *Checking SignIn enabled
  */
  _checkSignInEnabled () {
    const { name } = this.state
    // const { auth } = this.props
    return name.length // && auth.status !== LOGGING_IN_STATUS
  }

  /**
    *Setting Username value
  */
  _setName = (e) => {
    this.setState({
      name: e.target.value.trim()
    })
  }

  /**
    *Authenticating user through API
  */
  _create = () => {
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
    const { name, community } = this.state
    const containerStyle = {
      ...styles.container,
      ...this.props.styles
    }
    return (
      <div>
        <Paper style={styles.paperStyle} zDepth={3} rounded={false}>
          <div style={containerStyle}>
            <div style={styles.accountCreateTopWrapper} onKeyPress={this._handleEnterKey}>
              <div style={styles.header}>
                <h2 style={styles.headerHeadline}>{primaryHeader}</h2>
              </div>
              <TextField
                style={styles.textField}
                floatingLabelText='Name'
                value={name}
                onChange={this._setName}
              />
              <br /><br />
              <h4 style={{ align:'left' }}>{'This community is'}</h4>
              <RadioButtonGroup ref='community' name='community'
                defaultSelected='Public' onChange={this._onChange} iconStyle={{ fill:'white' }}>
                <RadioButton
                  name='choice_1'
                  value='Public'
                  label='Public - Everyone is included and view this community'
                  style={styles.radioButton}
                    />
                <RadioButton
                  name='choice_2'
                  value='Private'
                  label='Private - Only you and those included in this community can view this community'
                  style={styles.radioButton}
                   />
              </RadioButtonGroup>
              <br />< br /><br />
              <RaisedButton backgroundColor={styles.raisedButton.backgroundColor}
                label='Create'
                disabled={!this._checkSignInEnabled()}
                onClick={this._create}
                disabledBackgroundColor={styles.raisedButton.disabledBackgroundColor}
              />
            </div>
          </div>
        </Paper>
      </div>)
  }
}
export default CreateCommunity
