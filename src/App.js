import React from 'react';
import "./App.css";
import { makeStyles } from '@material-ui/core/styles';
import Cards from "./components/Cards";
import CountryCards from "./components/CountryCards";
import { Typography } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  heading: {
    marginTop: theme.spacing(4)
  }
}));



function App() {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h2" className={classes.heading}>Covid-19 Tracker</Typography>
      <Typography variant="body2" color="textSecondary">By Sameen Shakeel</Typography>
      <br />
      <br />
      <Typography variant="h4" gutterBottom>Global Status:</Typography>
      <Cards />
      <Typography variant="h4" gutterBottom>Countries Status:</Typography>
      <CountryCards />
    </div>
  );
}

export default App;
