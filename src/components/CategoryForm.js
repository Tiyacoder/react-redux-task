import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory } from '../redux/categorySlice';
import './CategoryForm.css';

export default function CategoryForm() {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories.list);

  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (category && subcategory) {
      dispatch(addCategory({ category, subcategory }));
      setCategory('');
      setSubcategory('');
    }
  };

  return (
    <div className="category-form-container">
      <form onSubmit={handleSubmit}>
        <h2>Category Manager</h2>
        <input
          placeholder="Category"
          value={category}
          onChange={e => setCategory(e.target.value)}
          required
        />
        <input
          placeholder="Subcategory"
          value={subcategory}
          onChange={e => setSubcategory(e.target.value)}
          required
        />
        <button>Add Subcategory</button>
      </form>

      <ul className="category-list">
        {categories.map(c => (
          <li key={c.name}>
            <strong>{c.name}</strong>: {c.subcategories.join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
}
