import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/productSlice';
import './ProductForm.css';

function ProductForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Home');
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price || !category || !image) return;

    const newProduct = {
      id: Date.now(),
      name,
      price,
      category,
      image: preview
    };

    dispatch(addProduct(newProduct));
    setName('');
    setPrice('');
    setCategory('Home');
    setImage(null);
    setPreview(null);
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h2>Add Product</h2>
      <label>Product Name</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

      <label>Price</label>
      <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />

      <label>Category</label>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>Home</option>
        <option>Clothing</option>
        <option>Electronics</option>
        <option>Food</option>
        <option>Other</option>
      </select>

      <label>Upload Image</label>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {preview && <img src={preview} alt="preview" className="preview-image" />}

      <button type="submit">Add Product</button>
    </form>
  );
}

export default ProductForm;
