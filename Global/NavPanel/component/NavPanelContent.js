import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'
import FlatButton from 'material-ui/FlatButton'
import { Link } from 'react-router'
import theme from '../../../theme'
import { getStyles } from '../style/style.js'

export default class NavPanelContent extends Component {
  static propTypes = {
    styles: PropTypes.object,
    label: PropTypes.string,
    activeId: PropTypes.string,
    id: PropTypes.string,
    childContent: PropTypes.array,
    route: PropTypes.string
  }
  static defaultProps = {
    primaryHeader: 'LOGIN',
    childContent: []
  }

  render () {
    const styles = getStyles(this.props, theme)
    const style = {}
    return (<div>
      <Paper style={style} zDepth={2} >
        <FlatButton label={this.props.label}
          containerElement={<Link to={this.props.route} style={styles.link} activeStyle={styles.activeLink} />} />
        {(this.props.activeId === this.props.id) && this.props.childContent.length && <div>
            {this.props.childContent.map(child => {
              <FlatButton label={child.label}
                containerElement={<Link to={child.route} style={styles.link} activeStyle={styles.activeLink} />} />
            })}
          </div>}
      </Paper>
    </div>)
  }
}
