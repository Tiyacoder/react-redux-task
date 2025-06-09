import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../store/productSlice';

const ProductForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !price || !image || !category) {
      alert('Please fill all fields');
      return;
    }

    dispatch(addProduct({ name, price, image, category }));

    setName('');
    setPrice('');
    setImage('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Product</h2>

      <div>
        <label>Product Name:</label><br />
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>

      <div>
        <label>Product Price:</label><br />
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
      </div>

      <div>
        <label>Product Image URL:</label><br />
        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
      </div>

      <div>
        <label>Product Category:</label><br />
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
      </div>

      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
