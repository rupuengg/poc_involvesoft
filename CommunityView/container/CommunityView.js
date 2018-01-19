import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import NavTabs from '../../Global/NavTabs'
import { PanelContent} from '../store/navPanelStore'

const mapStateToProps = (state, ownProps) => ({
  nav: state.navigate
})

class CommunityView extends Component {

	static propTypes = {
    children: PropTypes.object
    }

	render () {

    return (
      <div >
        <div style={styles.navTabsHeaderStyle}>
        <h2>{this.props.activeContent.label}</h2>
        </div>
        <NavTabs activeContent={PanelContent[this.props.nav.activeId]} />
        {this.props.children}
      </div>
    )
  }
}

export default connect(mapStateToProps, {})(CommunityView)
