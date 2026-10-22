import React, {useState} from 'react';
import Titler from './Titler';
import Clicker from './Clicker';
import './App.css';

function App(){
  const [count, setCount] = useState(0);
  const [occupantLimit] = useState(5);

  const zeroChecker = (num) => {
    if(num<0){
      return 0;
    }
    return num;
  }

  const isTooMany = (num) => {
    return num;
  }

  return (
    <div className="App">
      <Titler count={count} limit={occupantLimit}/>
      <Clicker clickAction = {() => setCount(isTooMany(count+1))} clickTitle="Increment Counter" Clicker />
      <Clicker clickAction = {() => setCount(zeroChecker(count-1))} clickTitle="Decrement Counter" Clicker />
    </div>
  )
}
export default App;