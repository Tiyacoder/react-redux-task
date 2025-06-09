import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductForm from './components/ProductForm';
import ProductTable from './components/ProductTable';
import './App.css';

function App() {
  return (
    <Router>
      <div className="dashboard">
        <aside className="sidebar">
          <h2>Dashboard</h2>
          <nav>
            <ul>
              <li><Link to="/add-product">Add Product</Link></li>
              <li><Link to="/product-list">Product List</Link></li>
            </ul>
          </nav>
        </aside>
        <main className="main-content">
          <Routes>
            <Route path="/add-product" element={<ProductForm />} />
            <Route path="/product-list" element={<ProductTable />} />
            <Route path="*" element={<ProductForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
