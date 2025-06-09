import React from 'react';
import { useSelector } from 'react-redux';
import './ProductTable.css';

export default function ProductTable() {
  const products = useSelector((state) => state.product.items);

  return (
    <div className="product-table">
      <h2>Product List</h2>
      {products.length === 0 ? (
        <p>No products added yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p, index) => (
              <tr key={index}>
                <td><img src={p.image} alt={p.name} /></td>
                <td>{p.name}</td>
                <td>₹{p.price}</td>
                <td>{p.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
