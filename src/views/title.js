import React from 'react';
import { Box,Typography, Grid } from '@material-ui/core';



const Title = () => {
    return (
        <Box>
            <Grid container direction="column" justifyContent="center" alignItems="center">
                <Grid item key="title">
                    <Typography variant="h4">
                        Tax-o-tron
                    </Typography>
                    <Grid item key="subtitle">
                        The free and simple online tax calculator
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}
export default Title