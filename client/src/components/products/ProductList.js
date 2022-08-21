import React, { Component } from "react";
import { connect } from "react-redux";
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

  renderProducts() {
    return this.props.products.reverse().map((product) => {
      const image = window.location.origin + "/images/" + product.image;
      return (
        <div>
          {this.renderSection(product)}
          <div className="col s12 m6 l3">
            <div className="card">
              <div className="card-image">
                <img className="responsive-img" src={image} />
                <span className="card-title">{product.Name}</span>
              </div>
              <div className="card-content" style={{ minHeight: "240px" }}>
                <p>Laufzeit: {product.Laufzeit}</p>
                <p>Zielrendits: {product.Zielrendite}</p>
                <p>Volumen: {product.Emissionsvolumen}</p>
                <p>Mindest: {product.Mindestinvestitionsvolumen}</p>
              </div>
              <div className="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }
  render() {
    return <div>{this.renderProducts()}</div>;
    //console.log(this.props);
    //return <div>Survey List</div>;
  }
}
function mapStateToProps({ products }) {
  return { products };
}
export default connect(mapStateToProps, { fetchProducts })(ProductList);
