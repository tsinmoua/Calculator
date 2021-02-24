import React, { useState } from 'react'
import NumberPad from './components/NumberPad'
import Header from './components/Header'
import History from './components/History'
import './app.css'
import { Grid, Typography } from '@material-ui/core';

function App() {

  const [input, setInput] = useState('')
  const [firstNumber, setFirstNumber] = useState(0)
  const [operator, setOperator] = useState('')
  const [history, setHistory] = useState([])
  const [equation, setEquation] = useState([])


  const handleButtonClick = (e) => {
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
    setFirstNumber(0)
    setOperator('')
    setEquation([])
  }

  const result = (operatorSymbol) => {
    if (operator === '') {
      setFirstNumber(parseFloat(input))
    } else if (operator === '+') {
      setFirstNumber(firstNumber + parseFloat(input))
    } else if (operator === '-') {
      setFirstNumber(firstNumber - parseFloat(input))
    } else if (operator === '*') {
      setFirstNumber(firstNumber * parseFloat(input))
    } else if (operator === '/') {
      setFirstNumber(firstNumber / parseFloat(input))
    }

    setInput('')
    setOperator(operatorSymbol)
    setEquation(equation + operatorSymbol);
  }

  const evaluate = (operator) => {
    clear()
    setEquation('')
    switch (operator) {
      case '':
        setHistory([...history, (`${equation} = ${firstNumber + parseFloat(input)}`)])
        break;
      case '+':
        setHistory([...history, (`${equation} = ${firstNumber + parseFloat(input)}`)])
        break;
      case '-':
        setHistory([...history, (`${equation} = ${firstNumber - parseFloat(input)}`)])
        break;
      case '*':
        setHistory([...history, (`${equation} = ${firstNumber * parseFloat(input)}`)])
        break;
      case '/':
        setHistory([...history, (`${equation} = ${firstNumber / parseFloat(input)}`)])
        break;
      default:
        break;
    }
  }

  let list = []
  for (let i = 0; i < 10; i++) {
    if (list.length === 0) {
      list.push(history[i])
    } else {
      list.splice(0, 0, history[i])
    }
  }

  console.log('------------------------------')
  console.log('first number: ', firstNumber)
  console.log('operator:', operator)
  console.log('input: ', input)
  console.log('history: ', history)
  console.log('equation: ', equation)
  console.log('list: ', list)

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
