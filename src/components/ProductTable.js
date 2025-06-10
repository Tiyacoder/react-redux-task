import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct } from '../redux/productSlice';
import './ProductTable.css';

export default function ProductTable() {
  const products = useSelector(state => state.products.list);
  const [selectedId, setSelectedId] = useState(null);
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      dispatch(deleteProduct(selectedId));
      setSelectedId(null);
    }
  };

  return (
    <div className="product-table-container">
      <h2>Product List</h2>
      {products.length === 0 ? (
        <p>No products added yet.</p>
      ) : (
        <>
          <table className="product-table">
            <thead>
              <tr>
                <th>Select</th>
                <th>Name</th>
                <th>Category</th>
                <th>Subcategory</th>
                <th>Price</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr
                  key={product.id}
                  className={selectedId === product.id ? 'selected-row' : ''}
                >
                  <td>
                    <button
                      className="select-btn"
                      onClick={() =>
                        setSelectedId(selectedId === product.id ? null : product.id)
                      }
                    >
                      {selectedId === product.id ? 'Unselect' : 'Select'}
                    </button>
                  </td>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>{product.subcategory}</td>
                  <td>₹{product.price}</td>
                  <td>
                    {product.image && (
                      <img src={product.image} alt={product.name} className="table-img" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {selectedId && (
            <div className="action-buttons">
              <button className="delete-btn" onClick={handleDelete}>Delete Selected</button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
