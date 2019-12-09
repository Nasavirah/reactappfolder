import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
//import {List, ListItem} from 'material-ui/List';
//import RaisedButton from 'material-ui/RaisedButton';

export class Success extends Component {
    continue=e=>{
        e.preventDefault();
        this.props.nextStep();
    }
    back=e=>{
        e.preventDefault();
        this.props.prevStep();
    }
  render() {
      //const{values:{firstName,lastName,Email,occupation,city,bio}}=this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
            <AppBar title="Success"/>
            <h1>Thank you for Submission</h1>
            <p>you will get an email with further information</p>
            
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

export default Success;
