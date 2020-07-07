import React from 'react';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';

function CountryCards(){
    return (
        <div>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card}>
                    <CardContent>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    );
}

export default CountryCards;
