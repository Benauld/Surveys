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
        <div className="row">
          <button className="waves-effect waves-light btn green">Login</button>
          <div className="row"></div>
          <a href="/auth/google">
            <button className="waves-effect waves-light btn blue">
              Login with Google
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
