import React from "react";

const Login = () => {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
        background: "#fff",
      }}
    >
      <div className="container">
        <div style={{ textAlign: "center", flex: "1 0 auto" }}>
          <h5 class="indigo-text">Einloggen</h5>
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
              <button className="waves-effect waves-light btn green">
                Login
              </button>
              <div className="row"></div>
              <a href="/auth/google">
                <button className="waves-effect waves-light btn blue">
                  Login with Google
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

<body>
  <div class="section"></div>
  <main>
    <center>
      <div class="section"></div>

      <h5 class="indigo-text">Please, login into your account</h5>
      <div class="section"></div>

      <div class="container">
        <div
          class="z-depth-1 grey lighten-4 row"
          style="display: inline-block; padding: 32px 48px 0px 48px; border: 1px solid #EEE;"
        >
          <form class="col s12" method="post">
            <div class="row">
              <div class="col s12"></div>
            </div>

            <div class="row">
              <div class="input-field col s12">
                <input class="validate" type="email" name="email" id="email" />
                <label for="email">Enter your email</label>
              </div>
            </div>

            <div class="row">
              <div class="input-field col s12">
                <input
                  class="validate"
                  type="password"
                  name="password"
                  id="password"
                />
                <label for="password">Enter your password</label>
              </div>
              <label style="float: right;">
                <a class="pink-text" href="#!">
                  <b>Forgot Password?</b>
                </a>
              </label>
            </div>

            <br />
            <center>
              <div class="row">
                <button
                  type="submit"
                  name="btn_login"
                  class="col s12 btn btn-large waves-effect indigo"
                >
                  Login
                </button>
              </div>
            </center>
          </form>
        </div>
      </div>
      <a href="#!">Create account</a>
    </center>

    <div class="section"></div>
    <div class="section"></div>
  </main>
  <script
    type="text/javascript"
    src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.1/jquery.min.js"
  ></script>
  <script
    type="text/javascript"
    src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.5/js/materialize.min.js"
  ></script>
  //
</body>;
