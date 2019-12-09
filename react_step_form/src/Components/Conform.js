import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class Conform extends Component {
    continue=e=>{
        e.preventDefault();
        // console.log("e.target",e.target)
        this.props.nextStep();
    }
    back=e=>{
        e.preventDefault();
        this.props.prevStep();
    }

  

  render() {
      const{values:{firstName,lastName,Email,occupation,city,bio}}=this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
            <AppBar title="Conform User Data"/>
            <List>
                <ListItem
                    primaryText="first Name"
                    secondaryText={firstName}
                    required
                   
                /><br/>
                <ListItem
                    primaryText="last Name"
                    secondaryText={lastName}
                /><br/>
                <ListItem
                    primaryText="email"
                    secondaryText={Email}
                />
                <ListItem
                    primaryText="occupation"
                    secondaryText={occupation}
                /><br/>
                <ListItem
                    primaryText="city"
                    secondaryText={city}
                /><br/>
                <ListItem
                    primaryText="bio"
                    secondaryText={bio}
                /><br/>
            </List>
            <RaisedButton
             label="Conform & Continue"
             primary={true}
             style={styles.button}
             onClick={this.continue}
            />
            <RaisedButton
             label="Back"
             primary={false}
             style={styles.button}
             onClick={this.back}
            />
            
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}
const styles={
    button:{
        margin:15
    }
}
export default Conform;
