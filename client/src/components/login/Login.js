import React from "react";

const Login = () => {
  return (
    <div className="container">
      <div style={{ textAlign: "center" }}>
        <h1>Login</h1>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="email" type="email" className="validate" />
          <label for="email">Email</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="password" type="password" className="validate" />
          <label for="password">Password</label>
        </div>
      </div>
      <div>
        <li>
          <a href="/auth/google">
            <button>Login with Google</button>
          </a>
        </li>
      </div>
    </div>
  );
};

export default Login;
