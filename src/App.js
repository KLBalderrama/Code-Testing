import React, {useRef, useState} from "react";
import './styles.css';

export default function App() {
  const [numbers, setNumbers] = useState([]);
  const outputRef = useRef();

  function isInt(value) {
    var x;
    if (isNaN(value)) {
      return false;
    }
    x = parseFloat(value);
    return (x | 0) === x;
  }

  function handleChange(value) {

    if (value.length === 0) {
      outputRef.current.value = "";
      return setNumbers([]);
    }
    
    let str = '';
    let count = 0;

    for (var i = 0; i < value.length; i++) {
      if (value.substring(i,i+1) === ',') {
        count++;
        str = ''; 
      }
      else if (isInt(value.substring(i,i+1))) {
        str += value.substring(i,i+1);
        numbers[count] = parseInt(str) *2; 
      }
  }

    const data = numbers; 
    outputRef.current.value = data;
    return setNumbers(data);
  }

  return (
    <div className = 'mainContainer'>
      <div className = 'containerInput'>
      <span className="header">Input</span>
      <span className="details">Array</span>
        <input 
          name="input"
          type="text"
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
      <div className = 'containerOutput'>
        <span className="header">Output</span>
        <span className="details">Double</span>
        <input
          ref={outputRef}
          name="output"
          type="text"
        />
      </div>
    </div>
  );
}
