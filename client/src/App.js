import React, { useEffect, useState } from 'react'
import NumberPad from './components/NumberPad'
import Header from './components/Header'
import History from './components/History'
import './app.css'
import { Grid, Typography } from '@material-ui/core';
import axios from 'axios'

function App() {

  const [input, setInput] = useState('')
  const [runningTotal, setRunningTotal] = useState(0)
  const [operator, setOperator] = useState('')
  const [history, setHistory] = useState([])
  const [list, setList] = useState([])
  const [equation, setEquation] = useState([])

  useEffect(() => {
    let api = []
    axios.get('/api/history')
      .then(res => {
        for (let i = 0; i < res.data.length; i++) {
          api.push(res.data[i].equation)
        }
      })
      .then(res => {
        setList([...api])
      })

  }, [list])

  const handleButtonClick = (e) => {
    e.preventDefault()
    let val = e.currentTarget.value

    if (val === 'C') {
      clear()
    } else if (val >= 0 && val <= 9) {
      setInput(input + val)
      setEquation(equation + val)
    } else if (val === '+') {
      result('+')
    } else if (val === '-') {
      result('-')
    } else if (val === '*') {
      result('*')
    } else if (val === '/') {
      result('/')
    } else if (val === '=') {
      evaluate(operator)
    }
  }

  const clear = () => {
    setInput('')
    setRunningTotal(0)
    setOperator('')
    setEquation([])
  }

  const result = (operatorSymbol) => {
    if (operator === '') {
      setRunningTotal(parseFloat(input))
    } else if (operator === '+') {
      setRunningTotal(runningTotal + parseFloat(input))
    } else if (operator === '-') {
      setRunningTotal(runningTotal - parseFloat(input))
    } else if (operator === '*') {
      setRunningTotal(runningTotal * parseFloat(input))
    } else if (operator === '/') {
      setRunningTotal(runningTotal / parseFloat(input))
    }

    setInput('')
    setOperator(operatorSymbol)
    setEquation(equation + ' ' + operatorSymbol + ' ');
  }

  const evaluate = (operator) => {
    clear()
    setEquation('')

    switch (operator) {
      case '':
        setHistory([...history, (`${equation} = ${runningTotal + parseFloat(input)}`)])
        axios.post('/api/history',
          {
            equation: `${equation} = ${runningTotal + parseFloat(input)}`
          })
          .then(res => console.log(res))
          .catch(err => console.log(err))
        break;
      case '+':
        setHistory([...history, (`${equation} = ${runningTotal + parseFloat(input)}`)])
        axios.post('/api/history',
          {
            equation: `${equation} = ${runningTotal + parseFloat(input)}`
          })
          .then(res => console.log(res))
          .catch(err => console.log(err))
        break;
      case '-':
        setHistory([...history, (`${equation} = ${runningTotal - parseFloat(input)}`)])
        axios.post('/api/history',
          {
            equation: `${equation} = ${runningTotal - parseFloat(input)}`
          })
          .then(res => console.log(res))
          .catch(err => console.log(err))
        break;
      case '*':
        setHistory([...history, (`${equation} = ${runningTotal * parseFloat(input)}`)])
        axios.post('/api/history',
          {
            equation: `${equation} = ${runningTotal * parseFloat(input)}`
          })
          .then(res => console.log(res))
          .catch(err => console.log(err))
        break;
      case '/':
        setHistory([...history, (`${equation} = ${runningTotal / parseFloat(input)}`)])
        axios.post('/api/history',
          {
            equation: `${equation} = ${runningTotal / parseFloat(input)}`
          })
          .then(res => console.log(res))
          .catch(err => console.log(err))
        break;
      default:
        break;
    }
  }

  return (
    <React.Fragment>
      <Header
        title='Calculator'
      />
      <Grid
        container
        alignContent='center'
        justify='center'
      >
        <Grid item>
          <NumberPad
            input={input}
            equation={equation}
            onClick={handleButtonClick}
          />
        </Grid>

        <Grid item>
          <Typography variant='h2'>
            History
          </Typography>
          <History list={list} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default App;
