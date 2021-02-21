import React, { useState } from 'react'
import NumberPad from './components/NumberPad'
import Header from './components/Header'
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
            setHistory([...history, (`${input} + ${firstNumber} = ${firstNumber + parseFloat(input)}`)])
            setInput('')
            setFirstNumber('')
            setOperator('')
            break;
          case '-':
            setInput(firstNumber - parseFloat(input))
            break;
          case '*':
            setInput(firstNumber * parseFloat(input))
            break;
          case '/':
            setInput(firstNumber / parseFloat(input))
            break;
          default:
            break;
        }
        break;
      default:
        break;
    }


  }
  console.log('------------------------------')
  console.log('input: ', input)
  console.log('first number: ', firstNumber)
  console.log('operator:', operator)
  console.log('history: ', history)

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
