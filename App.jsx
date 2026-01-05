import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Product from './Components/Pages/Product';
import PaymentOptions from './Components/Pages/PaymentOptions';
import RoadsideAssistance from './Components/Pages/RoadsideAssistance';
import AdminPanel from './Components/Pages/AdminPanel';
import Login from './Components/Pages/Login';
import Register from './Components/Pages/Register';
import './index.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/payment-options" element={<PaymentOptions />} />
        <Route path="/roadside-assistance" element={<RoadsideAssistance />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;