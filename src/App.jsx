import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [stringValue, setStringValue] = useState("");
  const [finalValue, setFinalValue] = useState("");
  const [sum, setSum] = useState(0);
  const add = () => {
    if(stringValue != '') {
      const numbers = stringValue.split(',').map((num) => Number(num));
      console.log("Sum ------>>>>> ", sum);
      const s = numbers.reduce((acc, curr, i, arr) => {
        return acc + curr;
      }, 0)
      setSum(s);
    }
  }
  const clear = () => {
    setSum(0);
    setStringValue('');
  }
  function handleChange(e) {
    setStringValue(e.target.value);
  }

  return (
    <>
      <div>
        <a href="https://github.com/rastogi1999/String-Calculator-TDD-Kata" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>String Calculator React</h1>
      <div className="card">
        <input placeholder='Enter the string value' className='input' value={stringValue} onChange={handleChange} />
        <br />
        <button onClick={() => add()} className='submitButton'>
          Submit
        </button>
        <button onClick={() => clear()}>
          Clear
        </button>
      </div>
      <p>
        {sum}
      </p>
    </>
  )
}

export default App
