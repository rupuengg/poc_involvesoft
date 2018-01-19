import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getStyles } from '../style/style.js'
import theme from '../../theme'

import NavTabs from '../../Global/NavTabs'

const mapStateToProps = (state, ownProps) => ({
  nav: state.navigate
})

class CommunityView extends Component {

	static propTypes = {
    children: PropTypes.object
    }

	render () {
  const styles = getStyles(this.props, theme)
    return (
      <div >
        <div style={styles.headerStyle}>
        <h2>{this.props.nav.panelContent[this.props.nav.activeId].label}</h2>
        </div>
        <NavTabs activeContent={this.props.nav.panelContent[this.props.nav.activeId]} />
        {this.props.children}
      </div>
    )
  }
}

export default connect(mapStateToProps, {})(CommunityView)
