import React, { useState } from 'react'
import NumberPad from './components/NumberPad'
import Header from './components/Header'
import './app.css'
import { Grid, makeStyles } from '@material-ui/core';

function App() {

  const [input, setInput] = useState([])
  const [firstNumber, setFirstNumber] = useState([])
  const [secondNumber, setSecondNumber] = useState([])

  const useStyles = makeStyles({

  })

  const classes = useStyles();

  const handleButtonClick = (e) => {
    console.log(e.currentTarget.value)
    if (e.currentTarget.value === 'C') {
      setInput([])
    } else if (e.currentTarget.value === '/' || e.currentTarget.value === '*' || e.currentTarget.value === '-' || e.currentTarget.value === '+') {
      setInput([])
    } else {
      setInput([...input, e.currentTarget.value])
    }
  }

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
        <NumberPad
          input={input}
          onClick={handleButtonClick}
        />
      </Grid>
    </React.Fragment>
  );
}

export default App;
