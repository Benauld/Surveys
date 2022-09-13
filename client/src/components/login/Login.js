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
        <div className="section center">
          <img
            className="responsive-img center"
            style={{ width: "250px" }}
            src={`${window.location.origin}/images/Original_long.png`}
            alt="X-altd"
          />
        </div>

        <div style={{ textAlign: "center", flex: "1 0 auto" }}>
          <h5 className="indigo-text">Einloggen</h5>
          <div className="section"></div>
          <div className="container">
            <div
              className="z-depth-1 grey lighten-4 row"
              style={{
                display: "inline-block",
                padding: "60px 80px 20px 80px",
                border: "1px solid #EEE",
              }}
            >
              <form className="col s12">
                <div className="row">
                  <div className="col s12"></div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input id="email" type="email" className="validate" />
                    <label htmlFor="email">Email</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input id="password" type="password" className="validate" />
                    <label htmlFor="passwort">Passwort</label>
                  </div>
                </div>
                <div className="row">
                  <label style={{ float: "right" }}>
                    <a className="pink-text" href="#!">
                      <b>Passwort vergessen?</b>
                    </a>
                  </label>
                </div>
                <div className="row">
                  <button
                    className="waves-effect waves-light btn green darken-4"
                    style={{ width: "196px" }}
                  >
                    Login
                  </button>
                </div>
              </form>
              <div className="row">
                <a href="/auth/google">
                  <button style={{ border: "none" }}>
                    <img
                      className="responsive-img center"
                      style={{ width: "200px" }}
                      src={`${window.location.origin}/btn_google.png`}
                      alt="Google login"
                    />
                  </button>
                </a>
              </div>
            </div>
            <div className="row">
              <a href="#!">Account registrieren</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
