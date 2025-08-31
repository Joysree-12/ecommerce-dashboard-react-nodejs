import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const Data = () => {
  //   console.warn(email, password);
  // };
  const navigate=useNavigate()

    const handleInput=(event)=>{
      event.preventDefault()
      axios.post('http://localhost:3001/login',{ email, password})
      .then(result=>{
      if(result.data === "Success"){
        navigate('/');
      }
    })
      .catch(err=>console.log(err))
  }
      return (
    <div className="loginpage">
      <h3>Login</h3>
      <form onSubmit={handleInput}>
      <input
        className="login"
        type="text"
        placeholder="Enter Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        className="login"
        type="password"
        value={password}
        placeholder="Enter Password"
        onChange={(event) => setPassword(event.target.value)}
      />
      <button className="loginbtn"  type="submit">
        Login
      </button>
      </form>
    </div>
  );
};

export default Login;
