import React, { useState } from "react";
import axios from "axios";

const Auth = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const formSubmit = async event => {
    event.preventDefault();
    const requestBody = {
      query: `
                mutation{createUser(userInput: {email: "useremail", password: "111111"}){
                    email
                    password
                }}
            `
    };

    axios
      .post("http://localhost:8080/graphql", { ...requestBody })
      .then(resp => {
        console.log(resp);
      })
      .catch(e => {
        console.log(e);
      });
  };


  const inputChange = event => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  return (
    <div>
      <p>this is the auth page</p>
      <form onSubmit={formSubmit}>
        <input placeholder="email input" name="email" onChange={inputChange} />
        <input
          placeholder="password input"
          name="password"
          onChange={inputChange}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Auth;
