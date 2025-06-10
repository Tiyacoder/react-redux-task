import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, updateProduct } from '../redux/productSlice';
import './ProductForm.css';

export default function ProductForm() {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories.list);
  const editProd = useSelector(state => state.products.editProduct);

  const [form, setForm] = useState({
    name: '',
    price: '',
    category: '',
    subcategory: '',
    image: ''
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editProd) {
      setForm(editProd);
      setErrors({});
    }
  }, [editProd]);

  const subcats = categories.find(c => c.name === form.category)?.subcategories || [];

  const validate = () => {
    const err = {};
    if (!form.name.trim()) err.name = 'Name required';
    if (!form.price || isNaN(form.price) || Number(form.price) <= 0) err.price = 'Positive price required';
    if (!form.category) err.category = 'Select a category';
    if (!form.subcategory) err.subcategory = 'Select a subcategory';
    if (!form.image) err.image = 'Image required';
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = e => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setForm(prev => ({ ...prev, image: reader.result }));
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!validate()) return;

    if (editProd) {
      dispatch(updateProduct(form));
    } else {
      dispatch(addProduct({ ...form, id: Date.now() }));
    }

    setForm({ name: '', price: '', category: '', subcategory: '', image: '' });
  };

  return (
    <form className="product-form" onSubmit={handleSubmit} noValidate>
      <h2>{editProd ? 'Edit Product' : 'Add Product'}</h2>

      <input
        name="name"
        placeholder="Product Name"
        value={form.name}
        onChange={handleChange}
      />
      {errors.name && <p className="error">{errors.name}</p>}

      <input
        name="price"
        placeholder="Price"
        value={form.price}
        onChange={handleChange}
      />
      {errors.price && <p className="error">{errors.price}</p>}

      <select name="category" value={form.category} onChange={handleChange}>
        <option value="">Select Category</option>
        {categories.map(c => (
          <option key={c.name} value={c.name}>{c.name}</option>
        ))}
      </select>
      {errors.category && <p className="error">{errors.category}</p>}

      <select name="subcategory" value={form.subcategory} onChange={handleChange}>
        <option value="">Select Subcategory</option>
        {subcats.map(sub => (
          <option key={sub} value={sub}>{sub}</option>
        ))}
      </select>
      {errors.subcategory && <p className="error">{errors.subcategory}</p>}

      <label className="custom-file">
        Upload Image:
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </label>
      {errors.image && <p className="error">{errors.image}</p>}
      {form.image && <img src={form.image} alt="preview" className="preview-image" />}

      <button type="submit">
        {editProd ? 'Update Product' : 'Add Product'}
      </button>
    </form>
  );
}
