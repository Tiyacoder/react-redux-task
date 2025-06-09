import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import ProductForm from './components/ProductForm';
import ProductTable from './components/ProductTable';

function App() {
  return (
    <Router>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/add-product" style={{ marginRight: '10px' }}>Add Product</Link>
        <Link to="/product-list">Product List</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Navigate to="/add-product" />} />
        <Route path="/add-product" element={<ProductForm />} />
        <Route path="/product-list" element={<ProductTable />} />
      </Routes>
    </Router>
  );
}

export default App;
