import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ProductForm from './components/ProductForm';
import ProductTable from './components/ProductTable';
import CategoryForm from './components/CategoryForm';

export default function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flex: 1, padding: '20px' }}>
          <Routes>
            <Route path="/add-product" element={<ProductForm />} />
            <Route path="/product-list" element={<ProductTable />} />
            <Route path="/categories" element={<CategoryForm />} />
            <Route path="*" element={<ProductForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
