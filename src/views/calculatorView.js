import React, { Component }from 'react';
import { Typography } from '@material-ui/core';
import Form from './calulatorForm';


class CalcInput extends Component {

    render() { 
        return ( 
            <>
            <Typography variant="h4">
                Calculate Your Tax
            </Typography>
            <Form
                country={this.props.country}
                year={this.props.year}
                taxableIncome={this.props.taxableIncome}
                handleSubmit={this.props.handleSubmit}
            >
            </Form>
            </>

         );
    }
}
 
export default CalcInput;