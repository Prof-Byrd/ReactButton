import React, {useState} from 'react';
import './App.css'
import Button from './Components/Button';

function App() {
  const [count, setCount] = useState(0);
  const [button_count,setButton]=useState(0);
  const handleIncrement = () =>{
    setCount(count+1);
    buttonClick();
  }

  const handleDecrement = () =>{
    setCount(count-1);
    buttonClick();
  }

  const handelReset = () =>{
    setCount(0);
    buttonClick();
  }

  const buttonClick = () =>{
    setButton(button_count+1);
  }
  return(
    <div classname="App">
      <h1>Counter: {count}</h1>
      <h3>Button Counter: {button_count}</h3>
     
      <Button label="Increment" onClick={handleIncrement}/>
      <Button label="Decrement" onClick={handleDecrement}/>
      <Button label="Reset" onClick={handelReset}/>
    </div>
  )
}

export default App;
