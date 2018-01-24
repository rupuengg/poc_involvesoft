import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar'
import { styles } from '../style/Header.js'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import Avatar from 'material-ui/Avatar'
import IconButton from 'material-ui/IconButton'
import DefaultUserIcon from 'material-ui/svg-icons/action/account-circle'
import theme from '../../../theme'
import { updateUserSettings } from '../../../userSetting.js'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import {
  authActions,
  LOGGED_IN_STATUS
} from '../../../Auth/store/auth'


  /*
  * @Function Mapping component state to props.
  * @param {Object} state
  * @returns {Object} containing props
  */
const mapStateToProps = (state, ownProps) => ({
  auth: state.authentication
})
/**
 * React component that encapsulates the Header tool bar displayed in the template.
 *
 */
class Header extends Component {
  /**
    *Validation for props (Static propTypes)
    * @static
    * @type {object} validators
      {
        PropTypes children object,
        PropTypes title string,
      }
  */
  static propTypes = {
    children: PropTypes.object,
    title:PropTypes.string
  }
  /**
    * creates a instance of Login.
    * @param {object} props
  */
  constructor (props) {
    super(props)

  }

  _logout = () =>{
    this.props.clear()
    this.props.updateUserSettings({})
   
  }

  shouldComponentUpdate (nextProps) {
    if(!nextProps.auth.loggedIn){
      browserHistory.replace('/')
      
       //return false
      }
      return true
    
  }
   componentDidUpdate (prevProps) {
    if (this.props.auth.status === LOGGED_IN_STATUS && (this.props.auth.status !== prevProps.auth.status)) {
       console.log('loggedin user',this.props.auth.username)
    }
  }
  
  /**
    * React lifecycle method :
    * Renders this component
    * @returns {ReactElement} - wrapped in div
  */
  render () {
  let avatar = <DefaultUserIcon color='white' />
  avatar = <Avatar>{this.props.auth.username ? this.props.auth.username[0].toUpperCase():''}
      </Avatar>
    return (
      <div>
        <Toolbar style={styles.toolbar}>
          <ToolbarGroup style={styles.logoContainer}>
            <span id='il-header-title' style={styles.title}>
              {/** this title will be configurable through props**/}
              {this.props.title}
            </span>
          </ToolbarGroup>
          {this.props.auth.loggedIn && <IconMenu
        iconButtonElement={<IconButton style={{ padding: 0 }}>{avatar}</IconButton>}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        targetOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
        <MenuItem value='Logout' primaryText='Logout' onClick={this._logout}/>
      </IconMenu>}
        </Toolbar>
      </div>
    )
  }
}

Header.contextTypes = {
  muiTheme: PropTypes.object.isRequired
}

export default connect(mapStateToProps, { ...authActions, updateUserSettings })(Header)