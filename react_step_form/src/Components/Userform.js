import React, { Component } from 'react';
import Formuserdetails from './Formuserdetails';
import Formpersonaldetails from './Formpersonaldetails';
import Conform from './Conform';
import Success from './Success';
export class Userform extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        Email: '',
        occupation: '',
        city: '',
        bio: ''
    }
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });

    }
    render() {
        const { step } = this.state;
        const { firstName, lastName, Email, occupation, city, bio } = this.state;
        const values = { firstName, lastName, Email, occupation, city, bio }
        switch (step) {
            case 1:
                return (
                    <Formuserdetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return (
                    <Formpersonaldetails
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />)
            case 3:
                return (
                    <Conform
                       nextStep={this.nextStep}
                       prevStep={this.prevStep}
                       values={values}
                    />
                )
            case 4:
                return <Success/>;

        }
    }
}

export default Userform
