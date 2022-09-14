import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../../actions";

class ProductList extends Component {
  componentDidMount() {
    this.props.fetchProducts();
    this.platform = "blurb";
  }

  renderSection(product) {
    if (product.Geschäft !== this.platform) {
      this.platform = product.Geschäft;
      return (
        <div>
          <div className="col s12 m12 l12 green-text text-darken-4">
            <h5>{product.Geschäft}</h5>
            <div className="divider"></div>
          </div>
        </div>
      );
    }
    return;
  }

  renderCardHeader(Status) {
    if (Status === "Offen") {
      return (
        <div className="green darken-4">
          <h5 className="center green-text text-lighten-5">{Status}</h5>
        </div>
      );
    }
    return (
      <div className="grey lighten-3">
        <h5 className="center">{Status}</h5>
      </div>
    );
  }

  renderProducts() {
    return this.props.products.reverse().map((product) => {
      const image =
        window.location.origin + "/images/products/" + product.image;
      return (
        <div key={product.Name}>
          {this.renderSection(product)}
          <div className="col s12 m6 l3">
            <div className="card">
              <div>{this.renderCardHeader(product.Status)}</div>
              <div className="card-image" style={{ minHeight: "125px" }}>
                <img
                  className="responsive-img"
                  src={image}
                  alt={product.Name}
                />
                <span className="card-title">{product.Name}</span>
              </div>
              <div className="card-content">
                <p>Volumen: {product.Emissionsvolumen}</p>
                <p>Mindest: {product.Mindestinvestitionsvolumen}</p>
                <p>Zielrendits:</p>
                <p>{product.Zielrendite}</p>
              </div>
              <div className="card-action">
                <Link
                  to={`/market/${product._id}`}
                  className="ui button primary"
                >
                  Zum Asset
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }
  render() {
    return <div>{this.renderProducts()}</div>;
  }
}
function mapStateToProps({ products }) {
  return { products };
}
export default connect(mapStateToProps, { fetchProducts })(ProductList);
