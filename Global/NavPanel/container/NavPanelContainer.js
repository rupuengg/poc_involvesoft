import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NavPanelContent from '../component/NavPanelContent'
import NavTabs from '../component/NavTabs'
import theme from '../../../theme'
import { getStyles } from '../style/style.js'

const PanelContent = [{ label:'Volunteer', route:'', childContent:[{ label:'a', route:'' }, { label:'b', route:'' }, { label:'c', route:'' }] },
{ label:'Communities', route:'', childContent:[{ label:'All Communities', route:'/navpanel' }, { label:'My Communities', route:'' }, { label:'Create a Community', route:'' }] }]

export default class NavPanelContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      activeId:1
    }
    this.cellSelection = this.cellSelection.bind(this)
  }
  cellSelection (index) {
    this.setState({ activeId:index })
  }
  render () {
    const styles = getStyles(this.props, theme)
    return (<div>
      <div style={styles.navPanelStyle}>
        {PanelContent.map((content, contentIndex) =>
          <NavPanelContent label={content.label}
            onClick={this.cellSelection}
            activeId={this.state.activeId}
            id={contentIndex}
            key={content.label + contentIndex}
            childContent={content.childContent}
            route={content.route} />
        )}
      </div>
      <NavTabs activeContent={PanelContent[this.state.activeId]} />
    </div>)
  }
  }
