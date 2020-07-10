import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography, Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 1200,
        margin: '0 auto',
        marginTop: 50,
        marginBottom: 50,
        textAlign: 'left',
    },
    paper: {
        padding: theme.spacing(3),
        marginLeft: 15
    },
    infected: {
        borderBottom: '7px solid blue'
    },
    recovered: {
        borderBottom: '7px solid green'
    },
    deaths: {
        borderBottom: '7px solid red'
    }
}));

function Cards() {
    const classes = useStyles();

    const [globalData, setGlobalData] = useState({});

    const url = "https://api.thevirustracker.com/free-api?global=stats";

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(url);
                const data = await response.json();
                delete data.results[0].source;
                setGlobalData(data.results[0]);
                console.log(data.results[0]);

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
                    <Paper className={`${classes.paper} ${classes.infected}`} elevation={5}>
                        <Typography variant="h5" gutterBottom>Infected</Typography>
                        <Divider />
                        <br />
                        <Typography color="textSecondary">Total Cases: {globalData.total_cases}</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper className={`${classes.paper} ${classes.recovered}`} elevation={5}>
                        <Typography variant="h5" gutterBottom>Recovered</Typography>
                        <Divider />
                        <br />
                        <Typography color="textSecondary">Total Recovered: {globalData.total_recovered}</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper className={`${classes.paper} ${classes.deaths}`} elevation={5}>
                        <Typography variant="h5" gutterBottom>Deaths</Typography>
                        <Divider />
                        <br />
                        <Typography color="textSecondary">Total Deaths: {globalData.total_deaths}</Typography>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default Cards;