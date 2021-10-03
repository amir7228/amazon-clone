import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    event.PreventDeafault();
  };
  const register = (event) => {
    event.PreventDeafault();
  };
  return (
    <div className="login">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/120px-Amazon_logo.svg.png"
        alt=""
      />
      <div className="login__text">
        <h2>Sign in</h2>
        <h5>E-mail</h5>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input__email"
          type="text"
        />
        <h5>Password</h5>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input__password"
          type="text"
        />
        <button onClick={login} className="button__signin">
          Sign In
        </button>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          rerum deserunt, quaerat vitae reiciendis minus placeat minima
        </p>
        <button onClick={register} className="button__register">
          Create Your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
