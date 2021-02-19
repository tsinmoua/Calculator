import React from 'react'
import Buttons from './components/Buttons'
import Header from './components/Header'
import './app.css'
import { Grid, makeStyles } from '@material-ui/core';

function App() {

  const useStyles = makeStyles({

  })

  const classes = useStyles();

  return (
    <React.Fragment>
      <Header
        title="Calculator"
      />
      <Grid
        container
        alignContent='center'
        justify='center'
      >
        <Buttons />
      </Grid>
    </React.Fragment>
  );
}

export default App;
