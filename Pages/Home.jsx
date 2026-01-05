import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Search,
  Wrench,
  User,
  Menu,
  ShoppingCart,
  Truck,
  LifeBuoy
} from 'lucide-react';
import { useAuth } from "../../AuthContext";
import '../css/home.css';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleSearchSubmit = () => {
    if (searchTerm.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <>
      {/* ---------- HEADER ---------- */}
      <header className="main-header">
        <Link to="/" className="logo">
          <Wrench className="logo-icon" />
          <h1>Auto<span>Spare</span></h1>
        </Link>

        <nav className="main-nav">
          <ul>
            <li>
              <Link to="/" className="nav-link active">Home</Link>
            </li>

            {user && (
              <>
                <li>
                  <Link to="/products" className="nav-link">Products</Link>
                </li>
                <li>
                  <Link to="/roadside-assistance" className="nav-link">Assistance</Link>
                </li>
                <li>
                  <Link to="/admin-panel" className="nav-link">Admin</Link>
                </li>
              </>
            )}
          </ul>
        </nav>

        {/* CART BUTTON – ADDED */}
        {user && (
          <button
            className="cart-btn"
            onClick={() => navigate('/cart')}
            aria-label="Cart"
          >
            <ShoppingCart size={22} />
          </button>
        )}

        <button className="mobile-menu-btn">
          <Menu />
        </button>
      </header>

      {/* ---------- HERO SECTION ---------- */}
      <div className="hero-section">
        <div className="hero-bg">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="hero-content">
          <h1 className="hero-title">
            Premium Parts for<br />Every Journey
          </h1>

          <p className="hero-subtitle">
            Genuine components for cars and bikes. Delivered to your garage.
          </p>

          <div className="auth-wrapper">
            {user ? (
              <div className="welcome-badge">
                <User size={18} />
                <span>Hi, <strong>{user.name}</strong></span>
                <button onClick={logout} className="btn btn-logout">
                  Logout
                </button>
              </div>
            ) : (
              <div className="auth-buttons">
                <Link to="/login" className="btn btn-outline">Login</Link>
                <Link to="/register" className="btn btn-primary">Register</Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ---------- ABOUT SECTION ---------- */}
      <section className="section about-section">
        <div className="about-image"></div>
        <div className="about-content">
          <h2>About AutoSpare</h2>
          <p>
            We provide genuine spare parts for cars and bikes with assured quality,
            fast delivery, and trusted roadside assistance support.
          </p>
        </div>
      </section>

      {/* ---------- FEATURES SECTION ---------- */}
      <section className="section features-section">
        <h2>Why Choose AutoSpare</h2>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <ShoppingCart size={36} />
            </div>
            <h3>Wide Spare Parts Range</h3>
            <p>Original spare parts for all major vehicle brands.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Truck size={36} />
            </div>
            <h3>Fast Delivery</h3>
            <p>Doorstep delivery with secure packaging.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <LifeBuoy size={36} />
            </div>
            <h3>24/7 Assistance</h3>
            <p>Emergency roadside support anytime, anywhere.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
