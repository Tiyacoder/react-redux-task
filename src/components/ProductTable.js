import React from 'react';
import { useSelector } from 'react-redux';
import './ProductTable.css';

function ProductTable() {
  const products = useSelector((state) => state.products);

  return (
    <div className="product-table-container">
      <h2>Product List</h2>
      <table className="product-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>₹{product.price}</td>
              <td>{product.category}</td>
              <td><img src={product.image} alt="Product" className="thumbnail" /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
