import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="page-footer" style={{ backgroundColor: "#CB944D" }}>
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="grey-text text-darken-4">Addresse</h5>
              <div className="grey-text text-darken-4">
                <p>KapNative GmbH</p>
                <p>Brandswiete 4.</p>
                <p>20457 Hamburg</p>
              </div>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="grey-text text-darken-4">Kontakte</h5>
              <div className="grey-text text-darken-4">
                <p>Tel.Nr.: +49 176 32509287</p>
                <p></p>
                <a href="mailto:contact@x-altd.com">
                  <p>E-Mail: contact@KapNative.com</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container grey-text text-darken-4">
            © 2023 by KapNative GmbH
            <a className="grey-text text-darken-4 right" href="#!"></a>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
