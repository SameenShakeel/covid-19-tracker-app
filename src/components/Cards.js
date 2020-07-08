import React from "react";
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

function Cards(props) {
    const classes = useStyles();
    console.log(props);

    return (
        <div className={classes.root}>
            <Grid container spacing={3} justify="center">
                <Grid item xs={12} sm={4}>
                    <Paper className={classes.paper} elevation={3}>
                        <Typography variant="h5" gutterBottom>Infected</Typography>
                        <Typography>Real Data</Typography>
                        <Typography color="textSecondary">Real Date</Typography>
                        <Typography variant="body2">Number of active cases of Covid-19</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper className={classes.paper} elevation={3}>
                        <Typography variant="h5" gutterBottom>Recovered</Typography>
                        <Typography>Real Data</Typography>
                        <Typography color="textSecondary">Real Date</Typography>
                        <Typography variant="body2">Number of recoveries from Covid-19</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper className={classes.paper} elevation={3}>
                        <Typography variant="h5" gutterBottom>Deaths</Typography>
                        <Typography>Real Data</Typography>
                        <Typography color="textSecondary">Real Date</Typography>
                        <Typography variant="body2">Number of deaths caused by Covid-19</Typography>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default Cards;