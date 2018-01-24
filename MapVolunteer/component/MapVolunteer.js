import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'

import { connect } from 'react-redux'
import { browserHistory } from 'react-router'


import {
  fetchVolunteersActions,
  FETCHED_IN_STATUS,
  VOLUNTEERS_LOADED_STATUS,
  ADDED_VOLUNTEERS_LOADED_STATUS,
  VOLUNTEERS_ADDED_STATUS
} from '../store/mapvolunteer'
import {
  authActions,
  LOGGED_IN_STATUS
} from '../../Auth/store/auth'


  /*
  * @Function Mapping component state to props.
  * @param {Object} state
  * @returns {Object} containing props
  */
const mapStateToProps = (state, ownProps) => ({
  auth: state.authentication,
  volunteers: state.volunteers
})

class MapVolunteer extends Component {
  state = {
    selectedVolunteers: []
  };

  isSelected = (index) => {
    console.log('select',index)
    return this.state.selectedVolunteers.indexOf(index) !== -1;
  }

  handleRowSelection = (selectedRows) => {
    const ids = Object.keys(this.props.volunteers.list)
    const selectedIds = selectedRows!=='all'? ((selectedRows !=='none')?selectedRows.map((row)=>ids[row]):[]) : ids
    console.log('rowselect',selectedIds)
    this.setState({
      selectedVolunteers: selectedIds,
    })
  }
  /**
    * React lifecycle method
  */
  shouldComponentUpdate (nextProps) {
     if(!nextProps.auth.loggedIn){
      browserHistory.replace('/')

       return false
      }
      return true
  }

  /**
    * React lifecycle method
  */
  componentWillMount () {
    console.log('props',this.props)
     if (this.props.auth.loggedIn) {
      this.props.fetchvolunteers(this.props.auth.user_id,this.props.params.communityId)
    }
  }

   componentWillUpdate (nextProps) {
    if (nextProps.volunteers.status === VOLUNTEERS_LOADED_STATUS) {
      this.props.fetchAddedVolunteers(this.props.params.communityId)
    }
    if (nextProps.volunteers.status === VOLUNTEERS_ADDED_STATUS) {
      this.props.fetchvolunteers(this.props.auth.user_id,this.props.params.communityId)
    }
   }

   _add = () => {
     const user_id = this.state.selectedVolunteers
     const community_id = this.props.params.communityId
     this.props.addVolunteers({community_id,user_id})
   }


  render() {
    this.props.volunteers.list ?  console.log('this.props.volunteers.payload.result',this.props.volunteers.list) : console.log('Data not fetched')
    return (
      <Paper  style={{margin: '5%',position: 'relative'}} zDepth={3} rounded={false}>
      {this.props.volunteers.list &&
        <Table multiSelectable onRowSelection={this.handleRowSelection}>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Id</TableHeaderColumn>
            <TableHeaderColumn>Name</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            Object.keys(this.props.volunteers.list).map((volunteer,index) => {
              return (
                <TableRow key={index} selected={this.props.volunteers.list[volunteer].addedToCommunity}>
                  <TableRowColumn>{this.props.volunteers.list[volunteer].id}</TableRowColumn>
                  <TableRowColumn>{this.props.volunteers.list[volunteer].name}</TableRowColumn>
                </TableRow>
              )
            })
          }
        </TableBody>
        </Table>
      }
      <RaisedButton label='Add' disabled={!Boolean(this.state.selectedVolunteers.length)} onClick={this._add}/>
      </Paper>
    )
  }
}

export default connect(mapStateToProps, {
  ...fetchVolunteersActions, ...authActions })(MapVolunteer)
