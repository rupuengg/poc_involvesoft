import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {GridList, GridTile} from 'material-ui/GridList';
import Paper from 'material-ui/Paper'
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import theme from '../../theme'
import { getStyles } from '../style/style.js'
import dummyImage from '../../Images/dummy1.png'
import IconButton from 'material-ui/IconButton'
import RemoveRedEyeIcon from 'material-ui/svg-icons/image/remove-red-eye'

import { browserHistory } from 'react-router'

const imageStyles = {
root: {
display: 'flex',
flexWrap: 'wrap',
justifyContent: 'left',
padding:'1%',
},
gridList: {
display: 'flex',
flexWrap: 'nowrap',
overflowX: 'auto',
},
titleStyle: {
color: 'rgb(0, 188, 212)',
},
}

const tilesData = [
{
img: dummyImage
}

];

export default class MyCommunityDisplay extends Component {

static propTypes = {
	id: PropTypes.number,
	name: PropTypes.string,
	creator: PropTypes.string,
	createdDate: PropTypes.string,
	participants: PropTypes.string,
	visibility: PropTypes.bool,
	opportunities: PropTypes.string,
	data: PropTypes.string
}

static defaultProps = {
createdDate: '',
creator: '',
participants: '',
visibility: false,
name: '',
opportunities: '',
data:''


}
 uploadVolunteer = () =>{
 	browserHistory.replace(`/map-volunteer/${this.props.id}`)
 }

render() {
	const {name, creator, createdDate, participants, visibility, opportunities, data} = this.props
const styles = getStyles(this.props, theme)
const visibilitStatus = visibility == 'pub' ? 'Public' : 'Private'
const flag = visibility == 'pub' ? true : false
return (
<Paper style={{margin: '5%',position: 'relative'}} zDepth={3} rounded={false}>
<div style={imageStyles.root}>
<div style={{ width: '25%'}}>
<GridList style={styles.gridList} cols={0}>
{tilesData.map((tile) => (
<GridTile
key={tile.img}
>
<img src={tile.img} />
</GridTile>

))}

</GridList>
</div>
<div style={{ width: '25%'}}>
<div style={{color: '#4C4C4C'}}><h2><b>{name}</b></h2></div>
<div style={{marginTop: '20px'}}>{'Created On'+ ' ' + createdDate}</div>
<div style={{marginTop: '10px'}}>{'Created By' + ' ' + creator}</div>
<div style={{    position: 'absolute', bottom: '0', marginBottom: '10px'}}>Participants:</div>
</div>
<div style={{ width: '25%'}}>
<div style={{    position: 'absolute', bottom: '0', marginBottom: '10px'}}>Opportunities:</div>
</div>
<div style={{ width: '25%'}}>
<RaisedButton disabled = {flag} onClick ={this.uploadVolunteer} label="Manage" style={{margin: '12px', float:'right'}} />
<div style={{right: '20px',position: 'absolute', bottom: '0', marginBottom: '10px'}}><RemoveRedEyeIcon/>{visibilitStatus}</div>

</div>
</div>
</Paper>
)
}
}
