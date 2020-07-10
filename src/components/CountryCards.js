import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography, Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 1300,
        margin: '0 auto',
        marginTop: 50,
        marginBottom: 50
    },
    paper: {
        padding: theme.spacing(3),
        textAlign: 'center',
        marginLeft: 15
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
                delete data.countryitems[0][177];
                setGlobalData(Object.values(data.countryitems[0]));
                console.log(Object.values(data.countryitems[0]));


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
                            <Paper className={classes.paper} elevation={5}>
                                <img src={`https://www.countryflags.io/${globalData[val].code}/shiny/64.png`} alt="Flag" />
                                <Typography variant="h5" gutterBottom>{globalData[val].title}</Typography>
                                <Divider variant="middle" />
                                <br />
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