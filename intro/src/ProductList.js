import React, { Component } from "react";
import { Table, Button } from "reactstrap";
export default class ProductList extends Component {
  render() {
    return (
      <div>
        <h3>
          {this.props.info.title}-{this.props.currentCategory}
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Unit Price</th>
                <th>Quantity Per Unit</th>
                <th>Units In Stock</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.props.products.map(
                (
                  product //propsla gelen productu map ediyoruz
                ) => (
                  <tr key={product.id}>
                    {/* her bir gelen değer için tr oluşturuyoruz */}
                    <th scope="row">{product.id}</th>
                    <td>{product.productName}</td>
                    <td>{product.unitPrice}</td>
                    <td>{product.quantityPerUnit}</td>
                    <td>{product.unitsInStock}</td>
                    <td>
                      <Button
                        on
                        onClick={() => this.props.addToCart(product)}
                        color="info"
                      >
                        add
                      </Button>
                      {/* sepete ekleme */}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </Table>
        </h3>
        {/* props için */}
      </div>
    );
  }
}
