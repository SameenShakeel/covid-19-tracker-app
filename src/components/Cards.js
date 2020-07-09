import React, {useEffect, useState} from "react";
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

function Cards() {
    const classes = useStyles();

    const [ globalData, setGlobalData ] = useState({});

    const url = "https://api.thevirustracker.com/free-api?global=stats";
  
    useEffect(() => {
     async function fetchData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        delete data.results[0].source;
        setGlobalData(data.results[0]);
  
      }
      catch (error) {
        console.log("error");
      }
     }
     fetchData();
  
    }, []);

    return (
        <div className={classes.root}>
            <Grid container spacing={3} justify="center">
                <Grid item xs={12} sm={4}>
                    <Paper className={classes.paper} elevation={3}>
                        <Typography variant="h5" gutterBottom>Infected</Typography>
                        <Typography color="textSecondary">Total Cases: {globalData.total_cases}</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper className={classes.paper} elevation={3}>
                        <Typography variant="h5" gutterBottom>Recovered</Typography>
                        <Typography color="textSecondary">Total Recovered: {globalData.total_recovered}</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper className={classes.paper} elevation={3}>
                        <Typography variant="h5" gutterBottom>Deaths</Typography>
                        <Typography color="textSecondary">Total Deaths: {globalData.total_deaths}</Typography>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default Cards;