import React, {useRef, useState} from "react";
//import {Form, Button} from "react-bootstrap";
import './styles.css';

export default function App() {
  const [numbers, setNumbers] = useState([]);
  const [tempArr, setTempArr] = useState([]);
  const outputRef = useRef();

  /*
  const tempArr = [3, 4, 5, 6, 7];
  //const doubled = tempArr.map((2) => number * 2);
  tempArr[1]+=10;
  console.log('tempArr >>>>>> '+tempArr[1]);
  */

  function isInt(value) {
    var x;
    if (isNaN(value)) {
      return false;
    }
    x = parseFloat(value);
    return (x | 0) === x;
  }

  const s1 = "karl";
  for (var i = 0; i < s1.length; i++) {
    console.log('Test loop >> '+s1.substring(i,i+1));
} 


  function handleChange(value) {
    console.log("LENGTH >>> ", value.length);

    if (value.length === 0) {
      outputRef.current.value = "";
      return setNumbers([]);
    }

    // es6 var let 
    const x = 1;
    x = 2;
    console.log(x);
    let y = 2;
    y = 3;
    console.log(y);
    
    let str = '';
    let count = 0;
    //var res = str.substring(1, 2);
   // console.log('substring>>'+res);
    //console.log('dotlength'+str.length);

    for (var i = 0; i < value.length; i++) {
      if (value.substring(i,i+1).isNaN) {
        console.log(value.substring(i,i+1)+'<< is NAN');
      }
      else if (value.substring(i,i+1) === ',') {
        console.log('COMMA FOUND'+i);
        count++;
        str = ''; 
      }
      else if (isInt(value.substring(i,i+1))) {
        
          str += value.substring(i,i+1);
          tempArr[count] = parseInt(str) *2;
        
        console.log(value.substring(i,i+1)+'<< is INT');
        console.log('this is substring i >> '+ value.substring(i,i+1));
        
        console.log('this is str >>> '+ str);
        //tempArr.push(parseInt(str));
        console.log('TEMP ARR PUSH >>> i-1 >> '+tempArr[0]);
        console.log('TEMP ARR PUSH >>> i   >> '+tempArr[1]);
        console.log('TEMP ARR PUSH >>> i   >> '+tempArr[2]);
        console.log('TEMP ARR PUSH >>> i   >> '+tempArr[3]);
        
      }
      
      console.log('Test loop >> '+value.substring(i,i+1));

     // console.log('test substring >>>   ' + value.substring(value.length-1, value.length));
  }

    const data = tempArr;
    console.log('this is DATA >>>> '+data);
    

    outputRef.current.value = data;
    console.log('this is outputREF >>>> '+outputRef);
   // console.log(data);

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
