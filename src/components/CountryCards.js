import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 1000,
        margin: '0 auto',
        marginTop: 50,
        marginBottom: 50
    },
    paper: {
        padding: theme.spacing(3),
    }
}));


function CountryCards(){
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <Grid container spacing={3} justify="center">
                <Grid item xs={12} sm={4}>
                    <Paper className={classes.paper}elevation={3}>
                        <Typography>Country</Typography>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default CountryCards;
