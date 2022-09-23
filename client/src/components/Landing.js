import React from "react";

const Landing = () => {
  return (
    <div>
      <div className="section teal darken-4">
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
            <div className="col s12 m6 l4">
              <div className="card" style={{ minHeight: "200px" }}>
                <div className="section"></div>
                <div className="card-title center" style={{ color: "#b48c5c" }}>
                  <i className="large material-icons">visibility</i>
                </div>
                <div className="card-title center">
                  <h5>Produktzugang</h5>
                </div>
                <div
                  className="card-content center"
                  style={{ height: "150px" }}
                >
                  Investieren Sie ab € 250 mit Ihren Kunden unmittelbar in
                  Privatmärkte
                </div>
              </div>
            </div>
            <div className="col s12 m6 l4">
              <div className="card" style={{ minHeight: "200px" }}>
                <div className="section"></div>
                <div className="card-title center" style={{ color: "#b48c5c" }}>
                  <i className="large material-icons">vpn_key</i>
                </div>
                <div className="card-title center">
                  <h5>Compliance </h5>
                </div>
                <div
                  className="card-content center"
                  style={{ height: "150px" }}
                >
                  Profitieren Sie von einem digitalen, MidFID konformen
                  Zeichungsprozess
                </div>
              </div>
            </div>
            <div className="col s12 m6 l4">
              <div className="card" style={{ minHeight: "200px" }}>
                <div className="section"></div>
                <div className="card-title center" style={{ color: "#b48c5c" }}>
                  <i className="large material-icons">flash_on</i>
                </div>
                <div className="card-title center">
                  <h5>Beratungseffizienz</h5>
                </div>
                <div
                  className="card-content center"
                  style={{ height: "150px" }}
                >
                  Beraten Sie individuell durch unsere Produktvorauswahl
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section teal darken-4">
        <div
          className="row container"
          style={{ minHeight: "400px", width: "100%" }}
        >
          <div className="valign-wrapper">
            <div className="green-text text-lighten-5">
              <h2 className="center-align">Über Uns</h2>
              <h5 className="center-align" style={{ textAlign: "justify" }}>
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
      <div className="section">
        <div className="row">
          <div>
            <h4 className="center-align" style={{ paddingBottom: "70px" }}>
              Unsere exklusiven Kooperationspartner
            </h4>
            <div className="row">
              <ul
                className="tabs tabs-fixed-width"
                style={{ paddingBottom: "100px" }}
              >
                <li className="tab" style={{ minWidth: "200px" }}>
                  <a
                    href="https://www.artbnk.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <img
                      className="responsive-img"
                      style={{ height: "100%" }}
                      src={`${window.location.origin}/images/products/Artbnk.png`}
                      alt="X-altd"
                    />
                  </a>
                </li>
                <li className="tab" style={{ minWidth: "200px" }}>
                  <a
                    href="https://www.ev-smartmoney.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <img
                      className="responsive-img"
                      style={{ height: "100%" }}
                      src={`${window.location.origin}/images/products/E&VSmartMoney.png`}
                      alt="X-altd"
                    />
                  </a>
                </li>
                <li className="tab" style={{ minWidth: "200px" }}>
                  <a
                    href="https://www.econos.green/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <img
                      className="responsive-img"
                      style={{ height: "120%" }}
                      src={`${window.location.origin}/images/products/econos.jpg`}
                      alt="X-altd"
                    />
                  </a>
                </li>
                <li className="tab" style={{ minWidth: "200px" }}>
                  <a
                    href="https://www.inventure.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <img
                      className="responsive-img"
                      style={{ height: "100%" }}
                      src={`${window.location.origin}/images/products/inVenture.png`}
                      alt="X-altd"
                    />
                  </a>
                </li>
                <li className="tab" style={{ minWidth: "200px" }}>
                  <a
                    href="https://www.arttrade.io/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <img
                      className="responsive-img"
                      style={{ height: "120%" }}
                      src={`${window.location.origin}/images/products/Arttrade.jpg`}
                      alt="X-altd"
                    />
                  </a>
                </li>
                <li className="tab" style={{ minWidth: "200px" }}>
                  <a
                    href="https://www.coinpanion.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <img
                      className="responsive-img"
                      style={{ height: "100%" }}
                      src={`${window.location.origin}/images/products/Coinpanion.png`}
                      alt="X-altd"
                    />
                  </a>
                </li>
                <li className="tab" style={{ minWidth: "200px" }}>
                  <a
                    href="https://www.dealcircle.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <img
                      className="responsive-img"
                      style={{ height: "100%" }}
                      src={`${window.location.origin}/images/products/Dealcircle.png`}
                      alt="X-altd"
                    />
                  </a>
                </li>
                <li className="tab" style={{ minWidth: "200px" }}>
                  <a
                    href="https://tokenstreet.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <img
                      className="responsive-img"
                      style={{ height: "100%" }}
                      src={`${window.location.origin}/images/products/Tokenstreet.jpeg`}
                      alt="X-altd"
                    />
                  </a>
                </li>
                <li className="tab" style={{ minWidth: "200px" }}>
                  <a
                    href="https://nftrust.io/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <img
                      className="responsive-img"
                      style={{ height: "100%" }}
                      src={`${window.location.origin}/images/products/nftrust.jpeg`}
                      alt="X-altd"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
