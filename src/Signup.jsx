import React, { useState } from "react";
import axios from 'axios'
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInput=(event)=>{
    event.preventDefault()
    axios.post('http://localhost:3001/signup',{name, email, password})
    .then(result=>console.log(result))
    .catch(err=>console.log(err))
  }
  // function Data() {
  //   console.log(name, email, password);
  // }
  return (
    <div className="Registration">
      <h1>Registration</h1>
      <form onSubmit={handleInput}>
      <input
        className="inputbox"
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        className="inputbox"
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        className="inputbox"
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button className="signbtn" type="submit" >
        Sign Up
      </button>
      </form>
    </div>
  );
};

export default Signup;
