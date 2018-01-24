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

import { getAuthenticationURL } from '../../utils/httpRequest'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'


import {
  fetchVolunteersActions,
  FETCHED_IN_STATUS
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
    selectable: true,
    multiSelectable : false
  };
  
  isSelected = (index) => {
    return this.state.selected.indexOf(index) !== -1;
  };

  handleRowSelection = (selectedRows) => {
    this.setState({
      selected: selectedRows,
    });
  };
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
     if (this.props.auth.loggedIn) {
      this.props.fetchvolunteers(this.props.auth.user_id,getAuthenticationURL())
    }
  }
   componentWillUpdate (nextProps) {
    if (this.props.auth.loggedIn) {
      
    }
   }
   _add = () => {


   }
   onRowSelection = (selectedRows) =>{
    console.log('selectedRows',selectedRows)
   }
   cellClicked = (rowNumber, columnId) => {
    console.log('rowNumber',rowNumber)
    console.log('columnId',columnId)

   }
  render() {
    this.props.volunteers.payload ?  console.log('this.props.volunteers.payload.result',this.props.volunteers.payload.result) : console.log('Data not fetched')
    return (
      <Paper  style={{margin: '5%',position: 'relative'}} zDepth={3} rounded={false}>
      <div>
   {this.props.volunteers.payload && <Table selectable
          multiSelectable onRowSelection={this.onRowSelection} onCellClick={this.cellClicked}>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>ID</TableHeaderColumn>
            <TableHeaderColumn>Name</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            Object.keys(this.props.volunteers.payload.result).map((key) => {
         return (
            <TableRow key={key} value={this.props.volunteers.payload.result[key]}>
            <TableRowColumn>{key}</TableRowColumn>
            <TableRowColumn>{this.props.volunteers.payload.result[key]}</TableRowColumn>
            </TableRow>
          );
      })
          }
        </TableBody>
      </Table>}
      </div>
      <RaisedButton
                label='Add'
                onClick={this._add}
              />
      </Paper>
    );
  }
}

export default connect(mapStateToProps, {
  ...fetchVolunteersActions, ...authActions })(MapVolunteer)


  