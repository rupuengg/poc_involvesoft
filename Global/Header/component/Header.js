import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar'
import { styles } from '../style/Header.js'

/**
 * React component that encapsulates the Header tool bar displayed in the template.
 *
 */
export default class Header extends Component {
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
  /**
    * React lifecycle method :
    * Renders this component
    * @returns {ReactElement} - wrapped in div
  */
  render () {
    return (
      <div>
        <Toolbar style={styles.toolbar}>
          <ToolbarGroup style={styles.logoContainer}>
            <span id='il-header-title' style={styles.title}>
              {/** this title will be configurable through props**/}
              {this.props.title}
            </span>
          </ToolbarGroup>
        </Toolbar>
      </div>
    )
  }
}

Header.contextTypes = {
  muiTheme: PropTypes.object.isRequired
}
