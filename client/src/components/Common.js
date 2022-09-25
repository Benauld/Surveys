import React, { Component } from "react";
import HttpsRedirect from "react-https-redirect";
import App from "./App";
class Common extends Component {
  render() {
    return (
      <HttpsRedirect>
        <App />
      </HttpsRedirect>
    );
  }
}

export default Common;
