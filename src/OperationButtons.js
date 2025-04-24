import React from "react";
import { useState } from "react";
export default function OperationButtons () {
   
    const [userInput,setUserInput] = useState('');



    function handleClickAdd() {
        console.log('Add button clicked');
       
       let numbers = userInput.split('+')
       let numberArray = []

     
       for (let i = 0; i < numbers.length; i++) {
        numberArray.push(parseInt(numbers[i]))
       }
       
        console.log('numbers',numbers);
        console.log('numberArray',numberArray);
        let sum = 0;
        for (let i = 0; i < numberArray.length; i++) {
            sum += numberArray[i];
        }   
        console.log('sum',sum);
        setUserInput(sum);
    }
    function handleClickSubstract() {
        console.log('Substract button clicked');
        console.log(userInput);
        let numbers = userInput.split('-')
        let numberArray = []
        for(let i=0; i<numbers.length; i++){
            numberArray.push(parseInt(numbers[i]))
        }
        let substraction = numberArray[0];
        for(let i=1; i<numberArray.length; i++){
           
            
            substraction -= numberArray[i];
       
          
        }
        setUserInput(substraction);
        console.log('substraction',substraction);   
    }
    function handleClickMultiply() {
        console.log('Multiply button clicked');
        console.log(userInput);
        let numbers = userInput.split('*')
        let numberArray = []
        for(let i=0; i<numbers.length; i++){
            numberArray.push(parseInt(numbers[i]))
        }   
        let multiplication = 1;
        for(let i = 0; i < numberArray.length; i++){
            multiplication *= numberArray[i];
        }
        console.log('Multiplication', multiplication);
        setUserInput(multiplication);
    }
    function handleClickDivide (){
        console.log('Divide button clicked');
        console.log(userInput);  
        let numbers = userInput.split('/')
        let numberArray = []
        
        for(let i=0; i<numbers.length; i++){
            numberArray.push(parseInt(numbers[i]))
        }
        let division = numberArray[0];
        for(let i=1; i<numberArray.length; i++){
            if(numberArray[i] === 0){
                console.log('Cannot divide by zero');
                alert('Cannot divide by zero');
                return;
            }
            division /= numberArray[i];
        }
        console.log('division', division);
        setUserInput(division);
    }

    return (
    <>
 <div>
  <h2>Result</h2>
  {userInput}
  </div>
   <div>
   <input
 
    value={userInput}
    onChange={e => setUserInput(e.target.value)}
    type="string"
   >
   
   </input>
 
   </div>
    <div className="buttons" style ={{display: 'flex', gap: '10px', marginTop: '40px'}}>
        <button onClick = {handleClickAdd}>
          Add (+)
        </button>
        <button onClick = {handleClickSubstract}>
          substract (-)
        </button>
        <button onClick = {handleClickMultiply}>
         Multiply (*)
        </button>
        <button onClick = {handleClickDivide}>
         Divide (/)
        </button>
        <button style = {{backgroundColor: 'orange', color: 'white'}}>
        reset input
        </button>
        <button style ={{backgroundColor: 'orange', color: 'white'}}>
        reset result
        </button>
        </div>
        </>
        )
}