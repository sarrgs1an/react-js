/*
import "./App.css";
import {useState} from 'react';
import MyForm from './Component/MyForm';


function App(){
  const [firstname, setFirstname ] = useState('');
  const [lastname, setLastname] = useState('');
  const[email, setEmail] = useState('');

  const validateEmail = (event) => {
    setEmail(event.target.value)
      if(event.target.value.indexOf('@') !== -1){
        console.log('okey') 
      }else{
        console.log('PLS TRY AGAIN')
      }
    
  }

  
    return (

      <>
      <div>

        <MyForm/>
        </div>
        </>
);
}

export default App;

*/
/*
import { useEffect, useState } from "react";
import MyButton from './Component/MyButton';

function App(){
  const[count, setCount] = useState(0);
  const[count1, setCount1] = useState(0);


  const changeCount = () => {
    setCount(count + 1)
  }


  const changeCount1 = () => {
    setCount(count1 + 1)
  }


return (
<div>
 <p>{count}</p>
    {count < 10 && <MyButton title={'+'} handleClick={changeCount} count={count}/>}
  </div>
  
  

);

}

export default App;

*/

import { useEffect, useState } from "react";
import LoginForm from './Component/LoginForm';
import MyComponent from './Component/LoginForm'
import '.App/css';



function  App(){
  const[formValues, setFormValues] = useState({email: '', pssword: '', remember: false})
  const [isLogedin, setLogedin] = useState(false)
}
 const onChnage = (event)=>{
  if(event.target.name === 'remember'){
    setFormValues({...formValues, [event.target.name]: event.target.checked})
  }else{
    setFormValues({...formValues, [event.target.name]: event.target.value})
  }
 }

const handleLogin = (event) => {
  event.preventDefault();
  if(formValues.remember){
    localStorage.setItem('userData', JSON.stringify(formValues))
  }else{
    sessionStorage.setItem('userData', JSON.stringify(formValues))
  }
  setisLogedin(true);
}


return (
  <div>
      {isLogedin?
        <div>
          <p>Test</p>
   <button onClick={logout}>Logout</button>
      </div>
        :<LoginForm
          onChange={onChange}
          handleLogin={handleLogin}

/>
}
</div>
);
}


export default App;
