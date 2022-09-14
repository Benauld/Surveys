import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import Header from "./Header";
import Footer from "./Footer";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import Marketplace from "./Marketplace";
import SurveyNew from "./surveys/SurveyNew";
import Product from "./products/ProductDetail";
import Kunden from "./Kunden";
import Login from "./login/Login";
class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/market" component={Marketplace} />
            <Route exact path="/kunden" component={Kunden} />
            <Route exact path="/market/:id" component={Product} />
            <Route path="/surveys/new" component={SurveyNew} />
            <Route path="/login" component={Login} />
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
