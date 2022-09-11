import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchClients } from "../../actions";

class ClientPortfolio extends Component {
  componentDidMount() {
    this.props.fetchClients();
  }

  renderCardHeader(status) {
    if (status === "Activ") {
      return (
        <div className="green lighten-5">
          <h5 className="center">{status}</h5>
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
      if (client.forname === "Ben") {
        const image =
          window.location.origin + "/images/clients/" + client.image;

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
                    Familien: <span>{client.surname}</span>
                  </h5>
                  <p>Vorname: {client.forname}</p>
                  <Link
                    to={`mailto:${client.email}`}
                    className="ui button primary"
                  >
                    {client.email}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      }
    });
  }
  renderPortfolio() {
    const investTarget =
      window.location.origin + "/images/clients/investmentarget.jpg";
    return (
      <div>
        <div className="right">
          <div className="image">
            <img
              className="responsive-img"
              src={investTarget}
              alt={"investment target"}
            />
            <div>
              <h5> </h5>
              <h5 className="right">Target Platform Allocated: €150.000,00</h5>
              <br></br>
              <h5 className="right">Current Total Allocated : €120.000,00</h5>
            </div>
          </div>
        </div>
        <table className="responsive-table striped">
          <thead>
            <tr>
              <th>Investment</th>
              <th>Platform</th>
              <th>Purchase Amount</th>
              <th>Units</th>
              <th>Investment Date</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Cadence Growth Capital</td>
              <td>inVenture</td>
              <td>€10.000</td>
              <td></td>
              <td></td>
              <td>Recommended</td>
              <td>
                <button className="waves-effect waves-light btn">
                  Details
                </button>
              </td>
              <td>
                <button className="waves-effect waves-light btn red">
                  Buy
                  <i className="material-icons right">send</i>
                </button>
              </td>
            </tr>
            <tr>
              <td>Planet A</td>
              <td>inVenture</td>
              <td>€10.000</td>
              <td></td>
              <td></td>
              <td>Recommended</td>
              <td>
                <button className="waves-effect waves-light btn">
                  Details
                </button>
              </td>
              <td>
                <button className="waves-effect waves-light btn red">
                  Buy
                  <i className="material-icons right">send</i>
                </button>
              </td>
            </tr>
            <tr>
              <td>Solar Australien</td>
              <td>Econos</td>
              <td>€50.000</td>
              <td>50</td>
              <td>07/28/2021</td>
              <td>Allocated</td>
              <td>
                <button className="waves-effect waves-light btn">
                  Details
                </button>
              </td>
              <td>
                <button className="waves-effect waves-light btn amber">
                  Sell
                  <i className="material-icons right">send</i>
                </button>
              </td>
            </tr>
            <tr>
              <td>Solar England</td>
              <td>Econos</td>
              <td>€20.000</td>
              <td>20</td>
              <td>07/28/2021</td>
              <td>Allocated</td>
              <td>
                <button className="waves-effect waves-light btn">
                  Details
                </button>
              </td>
              <td>
                <button className="waves-effect waves-light btn amber">
                  Sell
                  <i className="material-icons right">send</i>
                </button>
              </td>
            </tr>
            <tr>
              <td>„Never Feel“ – The Currency</td>
              <td>ArtTrade</td>
              <td>€20.000</td>
              <td>80</td>
              <td>06/25/2021</td>
              <td>Allocated</td>
              <td>
                <button className="waves-effect waves-light btn">
                  Details
                </button>
              </td>
              <td>
                <button className="waves-effect waves-light btn amber">
                  Sell
                  <i className="material-icons right">send</i>
                </button>
              </td>
            </tr>
            <tr>
              <td>Grey</td>
              <td>ArtTrade</td>
              <td>€20.000</td>
              <td>80</td>
              <td>06/25/2021</td>
              <td>Allocated</td>
              <td>
                <button className="waves-effect waves-light btn">
                  Details
                </button>
              </td>
              <td>
                <button className="waves-effect waves-light btn amber">
                  Sell
                  <i className="material-icons right">send</i>
                </button>
              </td>
            </tr>
            <tr>
              <td>Untitled 19.VIII.06 (Ralph, Remix)</td>
              <td>ArtTrade</td>
              <td>€10.000</td>
              <td>40</td>
              <td>03/08/2021</td>
              <td>Allocated</td>
              <td>
                <button className="waves-effect waves-light btn">
                  Details
                </button>
              </td>
              <td>
                <button className="waves-effect waves-light btn amber">
                  Sell
                  <i className="material-icons right">send</i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div>{this.renderClients()}</div>
        <div>{this.renderPortfolio()}</div>
      </div>
    );
  }
}
function mapStateToProps({ clients }) {
  return { clients };
}
export default connect(mapStateToProps, { fetchClients })(ClientPortfolio);
