import React, { useState } from 'react'
import NumberPad from './components/NumberPad'
import Header from './components/Header'
import History from './components/History'
import './app.css'
import { Grid } from '@material-ui/core';

function App() {

  const [input, setInput] = useState('')
  const [firstNumber, setFirstNumber] = useState(0)
  const [operator, setOperator] = useState('')
  const [history, setHistory] = useState([])


  const handleButtonClick = (e) => {
    let val = e.currentTarget.value

    switch (val) {
      case 'C':
        setInput('')
        setFirstNumber('')
        setOperator('')
        break;
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        setInput(input + val);
        break;
      case '+':
        setFirstNumber(parseFloat(input))
        setOperator('+')
        setInput('')
        break;
      case '-':
        setFirstNumber(parseFloat(input))
        setOperator('-')
        setInput('')
        break;
      case '*':
        setFirstNumber(parseFloat(input))
        setOperator('*')
        setInput('')
        break;
      case '/':
        setFirstNumber(parseFloat(input))
        setOperator('/')
        setInput('')
        break;
      case '=':
        switch (operator) {
          case '+':
            setHistory([...history, (`${firstNumber} + ${input}= ${firstNumber + parseFloat(input)}`)])
            setInput('')
            setFirstNumber('')
            setOperator('')
            break;
          case '-':
            setHistory([...history, (`${firstNumber} - ${input}= ${firstNumber - parseFloat(input)}`)])
            setInput('')
            setFirstNumber('')
            setOperator('')
            break;
          case '*':
            setHistory([...history, (`${firstNumber} * ${input}= ${firstNumber * parseFloat(input)}`)])
            setInput('')
            setFirstNumber('')
            setOperator('')
            break;
          case '/':
            setHistory([...history, (`${firstNumber} / ${input}= ${firstNumber / parseFloat(input)}`)])
            setInput('')
            setFirstNumber('')
            setOperator('')
            break;
          default:
            break;
        }
        break;
      default:
        break;
    }

  }

  let list = [];
  for (let i = 0; i < 10; i++) {
    list.splice(0, 0, history[i])
  }

  console.log('------------------------------')
  console.log('input: ', input)
  console.log('first number: ', firstNumber)
  console.log('operator:', operator)
  console.log('history: ', history)
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
            onClick={handleButtonClick}
          />
        </Grid>

        <Grid item>
          <History list={list} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default App;
