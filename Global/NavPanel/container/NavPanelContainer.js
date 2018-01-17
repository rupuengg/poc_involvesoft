import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'
import MenuItem from 'material-ui/MenuItem'
import NavPanelContent from '../component/NavPanelContent'
import theme from '../../../theme'
import { getStyles } from '../style/style.js'

const PanelContent = [{id:'Volunteer', label:'Volunteer', route:'', childContent:[{ label:'a', route:'' }, { label:'b', route:'' }, { label:'c', route:'' }] },
{id:'Communities', label:'Communities', route:'', childContent:[{ label:'e', route:'' }, { label:'f', route:'' }, { label:'g', route:'' }] }]

export default class NavPanelContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      activeId:'Communities'
    }
  }
  render () {
    const styles = getStyles(this.props, theme)
    return (<Paper style={styles.paperStyle} zDepth={3} rounded={false}>
      {PanelContent.map((content) =>
          <NavPanelContent label={content.label}
            onClick={() => {}}
            activeId={this.state.activeId}
            id={content.id}
            childContent={content.childContent}
            route={content.route} />
      )}
    </Paper>)
  }
  }
