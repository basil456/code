import React, { useState } from 'react';

function AdminPanel() {
  const [activeSection, setActiveSection] = useState('products');

  const renderSection = () => {
    switch (activeSection) {
      case 'products':
        return (
          <div className="admin-section">
            <h2>Manage Products</h2>
            <p>Add, edit, or remove products.</p>
            <div className="product-list">
              <div className="product-item">
                <img src="data:image/webp;base64,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" alt="Brake Pads" className="product-image" />
                <span>Brake Pads - $50</span>
                <button className="edit-button">Edit</button>
                <button className="delete-button">Delete</button>
              </div>
              <div className="product-item">
                <img src="https://th.bing.com/th/id/OIP.c4fvZpbftCYrR4Ic2_AzKwHaHa?w=201&h=200&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="Oil Filter" className="product-image" />
                <span>Oil Filter - $10</span>
                <button className="edit-button">Edit</button>
                <button className="delete-button">Delete</button>
              </div>
              <div className="product-item">
                <img src="https://th.bing.com/th/id/OIP.ywHNx-Iqa9knVP98YIKjVQHaFS?w=260&h=186&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="Tire" className="product-image" />
                <span>Tire - $100</span>
                <button className="edit-button">Edit</button>
                <button className="delete-button">Delete</button>
              </div>
            </div>
            <button className="add-button">Add New Product</button>
          </div>
        );
      case 'orders':
        return (
          <div className="admin-section">
            <h2>Manage Orders</h2>
            <p>View and process orders.</p>
            <div className="order-list">
              <div className="order-item">
                <span>Order #123: Brake Pads x2 - Status: Pending</span>
                <button className="process-button">Process</button>
              </div>
              <div className="order-item">
                <span>Order #124: Oil Filter x1 - Status: Shipped</span>
                <button className="view-button">View Details</button>
              </div>
            </div>
          </div>
        );
      case 'users':
        return (
          <div className="admin-section">
            <h2>Manage Users</h2>
            <p>View user accounts.</p>
            <div className="user-list">
              <div className="user-item">
                <img src="https://via.placeholder.com/50?text=JD" alt="John Doe" className="user-avatar" />
                <span>User: John Doe - Email: john@example.com</span>
                <button className="edit-button">Edit</button>
              </div>
              <div className="user-item">
                <img src="https://via.placeholder.com/50?text=JS" alt="Jane Smith" className="user-avatar" />
                <span>User: Jane Smith - Email: jane@example.com</span>
                <button className="edit-button">Edit</button>
              </div>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="admin-section">
            <h2>Settings</h2>
            <p>Configure application settings.</p>
            <div className="settings-form">
              <div className="setting-item">
                <label>Store Hours:</label>
                <input type="text" defaultValue="9AM - 5PM" />
              </div>
              <div className="setting-item">
                <label>Tax Rate:</label>
                <input type="number" defaultValue="8.5" step="0.1" />
              </div>
              <button className="save-button">Save Settings</button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>
      <nav className="admin-nav">
        <button onClick={() => setActiveSection('products')} className={activeSection === 'products' ? 'active' : ''}>Products</button>
        <button onClick={() => setActiveSection('orders')} className={activeSection === 'orders' ? 'active' : ''}>Orders</button>
        <button onClick={() => setActiveSection('users')} className={activeSection === 'users' ? 'active' : ''}>Users</button>
        <button onClick={() => setActiveSection('settings')} className={activeSection === 'settings' ? 'active' : ''}>Settings</button>
      </nav>
      <section className="admin-content">
        {renderSection()}
      </section>
    </div>
  );
}

export default AdminPanel;
