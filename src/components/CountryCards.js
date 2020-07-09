import React, { useEffect, useState } from 'react';
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
        textAlign: 'center'
    }
}));

function CountryCards() {
    const classes = useStyles();

    const [globalData, setGlobalData] = useState({});

    const url = "https://api.thevirustracker.com/free-api?countryTotals=ALL";

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(url);
                const data = await response.json();
                delete data.countryitems[0].stat;
                setGlobalData(Object.values(data.countryitems[0]));


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
                {Object.keys(globalData).map((val, ind) => {
                    return (
                        <Grid item xs={12} sm={4} key={ind}>
                            <Paper className={classes.paper} elevation={3}>
                                <Typography variant="h5" gutterBottom>{globalData[val].title}</Typography>
                                <Typography color="textSecondary">Total Cases: {globalData[val].total_cases}</Typography>
                                <Typography color="textSecondary">Total Recovered: {globalData[val].total_recovered}</Typography>
                                <Typography color="textSecondary">Total Deaths: {globalData[val].total_deaths}</Typography>
                            </Paper>
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    );
}

export default CountryCards;