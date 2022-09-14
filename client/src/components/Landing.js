import React from "react";

const Landing = () => {
  return (
    <div>
      <div className="section green darken-4">
        <div className="row valign-wrapper">
          <div className="col s12 m6 l6 green-text text-lighten-5">
            <h1 className="center-align">X-altd Assets</h1>
            <h4 className="center-align">
              Exklusive Privatmarktinvestments für Ihre Kunden
            </h4>
          </div>
          <div className="col s12 m6 l6">
            <img
              className="responsive-img right"
              src={`${window.location.origin}/images/screenshot.jpg`}
              alt="X-altd"
            />
          </div>
        </div>
      </div>
      <div>
        <img
          className="responsive-img"
          style={{ width: "100%" }}
          src={`${window.location.origin}/images/triangle.jpg`}
          alt="X-altd"
        />
      </div>
      <div className="section">
        <div className="container">
          <div className="row" style={{ minHeight: "200px" }}>
            <div className="col s6 m4 l4">
              <div className="card" style={{ minHeight: "200px" }}>
                <div className="section"></div>
                <div className="card-title center" style={{ color: "#b48c5c" }}>
                  <i className="large material-icons">visibility</i>
                </div>
                <div className="card-title center">
                  <h4>Produktzugang</h4>
                </div>
                <div className="card-content center">
                  Investieren Sie ab € 250 mit Ihren Kunden unmittelbar in
                  Privatmärkte
                </div>
              </div>
            </div>
            <div className="col s6 m4 l4">
              <div className="card" style={{ minHeight: "200px" }}>
                <div className="section"></div>
                <div className="card-title center" style={{ color: "#b48c5c" }}>
                  <i className="large material-icons">vpn_key</i>
                </div>
                <div className="card-title center">
                  <h4>Compliance </h4>
                </div>
                <div className="card-content center">
                  Profitieren Sie von einem digitalen, MidFID konformen
                  Zeichungsprozess
                </div>
              </div>
            </div>
            <div className="col s6 m4 l4">
              <div className="card" style={{ minHeight: "200px" }}>
                <div className="section"></div>
                <div className="card-title center" style={{ color: "#b48c5c" }}>
                  <i className="large material-icons">flash_on</i>
                </div>
                <div className="card-title center">
                  <h4>Beratungseffizienz</h4>
                </div>
                <div className="card-content center">
                  Beraten Sie individuell durch unsere Produktvorauswahl
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section green darken-4">
        <div
          className="row container"
          style={{ minHeight: "400px", width: "100%" }}
        >
          <div className="valign-wrapper">
            <div className="green-text text-lighten-5">
              <h2 className="center-align">Über Uns</h2>
              <h5 className="center-align">
                X-altd ist der digitale Marktplatz für Investments in
                Privatmärkte für Vermögensverwaltungen und deren Kunden. Neben
                einem digitalen, compliance sicheren Zeichnungsprozess hat sich
                X-altd als unabhängiger Marktplatz das Ziel gesetzt, die
                führenden Produktanbieter im alternativen Investmentbereich
                transparent zugänglich zu machen. X-altd macht hierbei durch die
                enge Zusammenarbeit mit seinen Kooperationspartner das
                Investieren in Privatmärkte bereits ab € 250 zugänglich für
                jeden Vermögensverwaltungskunden.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
