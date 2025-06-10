import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h3>Dashboard</h3>
      <nav>
        <NavLink to="/add-product" className={({ isActive }) => isActive ? 'active' : ''}>
          Add Product
        </NavLink>
        <NavLink to="/product-list" className={({ isActive }) => isActive ? 'active' : ''}>
          Product List
        </NavLink>
        <NavLink to="/categories" className={({ isActive }) => isActive ? 'active' : ''}>
          Category Manager
        </NavLink>
      </nav>
    </aside>
  );
}
