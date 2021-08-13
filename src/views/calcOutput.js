import React from 'react';
import { Typography, Grid, TextField} from '@material-ui/core';

 const CalcOutput = (props) => {
    return (
        <>
            <Grid column direction="column" justify="flex-start" alignItems="flex-start">
                <Grid item>
                    <Typography variant="h6">
                        Your estimated taxable income is:
                    </Typography>
                </Grid>
                <Grid item>
                    <TextField>
                    </TextField>
                </Grid>
                <Grid item>
                    <Typography variant="h6">
                        Breakdown:
                    </Typography>
                </Grid>
                <>

                </>
            </Grid>
        </>
    )
}

export default CalcOutput