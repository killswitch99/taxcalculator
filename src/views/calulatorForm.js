import React, { Component } from 'react';
import { TextField, MenuItem, Button, Grid } from '@material-ui/core'
import { Alert } from '@material-ui/lab'

import countries from '../constants/countries';
import years from '../constants/years';

class Form extends Component {
    constructor(props){
        super(props)

        this.initialState = {
            country: this.props.country,
            year: this.props.year,
            taxableIncome:this.props.taxableIncome
        }
        this.state=this.initialState
    }
 

    handleChange = event => {
        const{name, value} = event.target
        this.setState({[name]:value})
    }

    onFormSubmit= (event) => {
        event.preventDefault()
        this.props.handleSubmit(this.state)
        console.log(event)
    }

    render() { 
        return ( 
            <form noValidate autoComplete="off" onSubmit={this.onFormSubmit}>
                <Grid 
                container direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={2}
                >
                    <Grid item vairant="outlined" severity="info">
                        <Alert>
                            Field marked with a * are mandatory
                        </Alert>
                    </Grid>
                    <Grid item>
                        <TextField
                        required={true}
                        id="select-country"
                        name="country"
                        select label="Country"
                        helperText="Please select your country of residence"
                        variant="outlined"
                        defaultValue="Australia"
                        value={this.state.country}
                        onChange={this.handleChange}
                        >  
                        {countries.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.value}
                            </MenuItem>
                        ))}
                        </TextField>
                    </Grid>
                    <Grid item>
                        <TextField
                        required={true}
                        id="select-year"
                        name="year"
                        select label="Year"
                        helperText="Please select a year"
                        variant="outlined"
                        defaultValue="2021"
                        onChange={this.handleChange}
                        value={this.state.year}
                        >
                            {years.map((option)=>(
                                <MenuItem key={option.value} value={option.value}>
                                {option.value}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item>
                        <TextField
                        required={true}
                        id="tax-income"
                        name="taxableIncome"
                        select-label="Income"
                        helperText="Please enter your taxable income for the tax year "
                        variant="outlined"
                        onChange={this.handleChange}
                        defaultValue="700000"
                        value={this.state.taxableIncome}
                        >
                            {this.state.taxableIncome}
                        </TextField>
                    </Grid>
                    <Grid item>
                        <Button type="submit" variant="contained" color="primary">
                            Calculate
                        </Button>
                    </Grid>
                </Grid>
            </form>
         );
    }
}
 
export default Form;