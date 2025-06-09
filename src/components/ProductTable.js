import React from 'react';
import { useSelector } from 'react-redux';

const ProductTable = () => {
  const products = useSelector((state) => state.products);

  return (
    <table border="1" cellPadding="10" style={{ marginTop: '20px' }}>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Price</th>
          <th>Image</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {products.length === 0 ? (
          <tr>
            <td colSpan="4" style={{ textAlign: 'center' }}>No products added yet</td>
          </tr>
        ) : (
          products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>₹{product.price}</td>
              <td><img src={product.image} alt={product.name} style={{ width: '50px' }} /></td>
              <td>{product.category}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default ProductTable;
