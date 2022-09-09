import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProduct } from "../../actions";

class ProductDetail extends Component {
  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.id);
  }
  renderProducts() {
    if (!this.props.products) {
      this.props.fetchProduct(this.props.match.params.id);
    }
    const product = this.props.products;
    const image = window.location.origin + "/images/products/" + product.image;
    return (
      <div key={product.Name}>
        <div className="col s12 m6 l3">
          <div className="green lighten-4">
            <h1 className="center">{product.Name}</h1>
          </div>
          <div className="row">
            <div className="col s12 m8 l6">
              <h5>Geschäft: {product.Geschäft}</h5>
              <div style={{ borderTop: "2px solid #6B5 " }}></div>
              <h5>Beschreibung: </h5>
              <p>{product.Beschreibung}</p>
              <div style={{ borderTop: "2px solid #6B5 " }}></div>
            </div>
            <div className="image col s12 m8 l6">
              <img className="responsive-img" src={image} alt={product.Name} />
            </div>
          </div>
          <div style={{ borderTop: "3px solid #777 " }}></div>
          <br></br>
          <div className="row">
            <div className="col s12 m10 l7">
              <h4>Investitionsinformationen</h4>
              <div style={{ borderTop: "2px solid #6B5 " }}></div>
              <h5>
                Min. invest:
                <span style={{ float: "right" }}>
                  {product.Mindestinvestitionsvolumen}
                </span>
              </h5>
              <div style={{ borderTop: "2px solid #6B5 " }}></div>
              <h5>
                Emissionsvolumen:
                <span style={{ float: "right" }}>
                  {product.Emissionsvolumen}
                </span>
              </h5>
              <div style={{ borderTop: "2px solid #6B5 " }}></div>
              <h5>
                Zielrendite :
                <span style={{ float: "right" }}>{product.Zielrendite}</span>
              </h5>
              <div style={{ borderTop: "2px solid #6B5 " }}></div>
              <h5>
                Laufzeit :
                <span style={{ float: "right" }}>{product.Laufzeit}</span>
              </h5>
              <div style={{ borderTop: "2px solid #6B5 " }}></div>
            </div>
            <div className="col s0 m1 l1"></div>
            <div className="col s12 m7 l4 z-depth-2">
              <form>
                <h4>Jetzt Investieren</h4>
                <div style={{ borderTop: "2px solid #6B5 " }}></div>
                <br></br>
                <label className="input-field col s8 m8 l10">
                  Summe:
                  <input></input>
                </label>
                <br></br>
                <button
                  type="submit"
                  className="teal btn-flat right white-text"
                >
                  Einreichen
                  <i className="material-icons right">done</i>
                </button>
                <br></br>
              </form>
              <br></br>
            </div>
          </div>
          <br></br>
          <div style={{ borderTop: "3px solid #777 " }}></div>
        </div>
        <div>{this.renderProductDifferences(product)}</div>;
      </div>
    );
  }
  renderProductDifferences(product) {
    if (product.Geschäft === "Arttrade") {
      const image2 =
        window.location.origin + "/images/products/" + product.image2;
      return (
        <div>
          <h4>Arttrade-Informationen</h4>
          <div className="row">
            <div className="col s12 m8 l6">
              <div className="image col s12 m8 l6">
                <br></br>
                <img
                  className="responsive-img"
                  src={image2}
                  alt={product.Name}
                />
              </div>
            </div>
            <div className="image col s12 m8 l6">
              <h5>Portrait</h5>
              <p>{product.Beschreibung}</p>
            </div>
            <div style={{ borderTop: "2px solid #6B5 " }}></div>
          </div>
        </div>
      );
    }
  }
  render() {
    return <div>{this.renderProducts()}</div>;
  }
}
function mapStateToProps({ products }) {
  return { products };
}
export default connect(mapStateToProps, { fetchProduct })(ProductDetail);
