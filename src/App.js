import React from 'react'
import Buttons from './components/Buttons'
import Header from './components/Header'

import { Grid, makeStyles } from '@material-ui/core';

function App() {

  const useStyles = makeStyles({
    numbers: {
      marginLeft: 'auto'
    }
  })

  const classes = useStyles();

  return (
    <div>
      <Header
        title="Calculator"
      />
      <Grid
        container
        alignContent='center'
        justify='center'
      >
        <Buttons />
        <Buttons />
        <Buttons />
      </Grid>
    </div>
  );
}

export default App;
