import React, { Component } from 'react';

import { Box, Grid, Typography } from '@material-ui/core';

class CalcUneditable extends Component {
    render() { 
        return ( 
            <Box>
                <Grid container direction="column" justifyContent="center" alignItems="center">
                    <Typography variant="h4">
                        Your Tax results
                    </Typography>
                </Grid>
            </Box>
         );
    }
}
 
export default CalcUneditable;