import React, { useState, useEffect } from 'react';


function LoginForm({onChange, handleLogin}){
return(
<form>
<input name="email" onInput={onChange}/>
<input name="password" type="password" key="myValue" onInput={onChange}/>
<input name="remember" type="checkbox" key="myValue" onInput={onChange}/>
<button onClick={handleLogin}>Login</button>



</form>


);
}
function MyComponent() {
  const [value, setValue] = useState('');

  useEffect(() => {
    // Get the stored value from localStorage
    const storedValue = localStorage.getItem('myValue');
    if (storedValue) {
      setValue(storedValue);
    }
  }, []);

  const handleChange = (event) => {
    // Update the value state and store it in localStorage
    const newValue = event.target.value;
    setValue(newValue);
    localStorage.setItem('myValue', newValue);
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <p>The stored value is: {value}</p>
    </div>
  );

}


 export default LoginForm;
