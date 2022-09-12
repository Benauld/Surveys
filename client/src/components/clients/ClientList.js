import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchClients } from "../../actions";

class ClientList extends Component {
  componentDidMount() {
    this.props.fetchClients();
  }

  renderCardHeader(status) {
    if (status === "Aktiv") {
      return (
        <div className="green darken-4">
          <h5 className="center green-text text-lighten-5">{status}</h5>
        </div>
      );
    }
    return (
      <div className="grey lighten-3">
        <h5 className="center">{status}</h5>
      </div>
    );
  }

  renderClients() {
    return this.props.clients.reverse().map((client) => {
      const image = window.location.origin + "/images/clients/" + client.image;
      return (
        <div key={client.surname}>
          <div className="col s12 m6 l3">
            <div className="card">
              <div>{this.renderCardHeader(client.status)}</div>
              <div className="card-image" style={{ minHeight: "125px" }}>
                <img
                  className="responsive-img"
                  src={image}
                  alt={client.email}
                />
                <span className="card-title">{client.Surname}</span>
              </div>
              <div className="card-content">
                <h5>
                  Nachname: <span>{client.surname}</span>
                </h5>
                <div style={{ borderTop: "2px solid #6B5 " }}></div>
                <h5>Vorname: {client.forname}</h5>
                <div style={{ borderTop: "2px solid #6B5 " }}></div>
                <br></br>
                <Link
                  to={`mailto:${client.email}`}
                  className="ui button primary"
                >
                  {client.email}
                </Link>
                <div className="card-action">
                  <Link to={`/dashboard`} className="ui button primary">
                    Zum Dashboard
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        <div>{this.renderClients()}</div>
        <div clasName="row">
          <div className="fixed-action-btn">
            <h5 className="center green-text text-darken-4">
              Kunde hinzufügen:{" "}
            </h5>
            <Link
              to="/kunden/new"
              className="btn-floating waves-effect waves-light btn-large green darken-4 right"
            >
              <i className="material-icons right">add</i>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps({ clients }) {
  return { clients };
}
export default connect(mapStateToProps, { fetchClients })(ClientList);
