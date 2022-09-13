import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li key="4">
            <a href="/login" className="green-text text-lighten-5">
              <i className="material-icons left">block</i>
              <span className="hide-on-small-only">Einloggen</span>
            </a>
          </li>
        );
      default:
        return [
          <li key="2" style={{ margin: "0 10px" }}>
            <a href="/dashboard" className="green-text text-lighten-5">
              <i className="material-icons left">assessment</i>
              <span className="hide-on-med-and-down">Dashboard</span>
            </a>
          </li>,
          <li key="3" style={{ margin: "0 10px" }}>
            <a href="/kunden" className="green-text text-lighten-5">
              <i className="material-icons left">folder_shared</i>
              <span className="hide-on-med-and-down">Kunden</span>
            </a>
          </li>,
          <li key="4">
            <a href="api/logout" className="green-text text-lighten-5">
              <i className="material-icons left">face</i>
              <span className="hide-on-small-only">Ausloggen</span>
            </a>
          </li>,
        ];
    }
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper green darken-4">
          <Link
            to={this.props.auth ? "/market" : "/"}
            className="left brand-logo green-text text-lighten-5"
          >
            <img
              className="brand-logo"
              style={{ width: "170px", height: "auto", marginLeft: "16px" }}
              src={`${window.location.origin}/images/Logo_orig_transparent.png`}
              alt="X-altd"
            />
          </Link>
          <ul id="nav-mobile" className="right">
            <li key="1" style={{ margin: "0 10px" }}>
              <a href="/market" className="green-text text-lighten-5">
                <i className="material-icons left green-text text-lighten-5">
                  view_module
                </i>
                <span className="hide-on-med-and-down">Marktplatz</span>
              </a>
            </li>
            ,{this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}
function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
