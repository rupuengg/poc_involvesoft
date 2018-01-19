import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NavPanelContent from '../component/NavPanelContent'
import NavTabs from '../component/NavTabs'
import theme from '../../../theme'
import { getStyles } from '../style/style.js'
import { changeActiveId, PanelContent} from '../store/navPanelStore'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => ({
  nav: state.navigate
})

class NavPanelContainer extends Component {
  constructor (props) {
    super(props)
    this.cellSelection = this.cellSelection.bind(this)
  }
  cellSelection (index) {
    this.props.changeActiveId(index)
  }
  render () {
    const styles = getStyles(this.props, theme)
    return (<div>
      <div style={styles.navPanelStyle}>
        {PanelContent.map((content, contentIndex) =>
          <NavPanelContent label={content.label}
            onClick={this.cellSelection}
            activeId={this.props.nav.activeId}
            id={contentIndex}
            key={content.label + contentIndex}
            childContent={content.childContent}
            route={content.route} />
        )}
      </div>
      <NavTabs activeContent={PanelContent[this.props.nav.activeId]} />
    </div>)
  }
  }

  export default connect(mapStateToProps, {
  changeActiveId })(NavPanelContainer)

