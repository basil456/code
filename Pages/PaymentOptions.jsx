import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../css/payment.css';

function PaymentOptions() {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {};
  const [selectedPayment, setSelectedPayment] = useState('');

  if (!product) {
    return <div>Product not found</div>;
  }

  const handlePaymentSelect = (method) => {
    setSelectedPayment(method);
  };

  const handleConfirmOrder = async () => {
    if (!selectedPayment) {
      alert('Please select a payment method');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          productId: product._id || product.id,
          quantity: 1,
          paymentMethod: selectedPayment
        })
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || 'Order failed');
        return;
      }

      alert('Order placed successfully!');
      navigate('/products');
    } catch (error) {
      console.error(error);
      alert('Server error');
    }
  };

  return (
    <div className="payment-options-page">
      <h1>Select Payment Method</h1>
      <div className="product-summary">
        <h2>{product.name}</h2>
        <p>Price: ${product.price}</p>
        <p>Description: {product.description}</p>
      </div>
      <div className="payment-methods">
        <h3>Choose Payment Method:</h3>
        <div className="payment-list">
          <button
            className={selectedPayment === 'Credit Card' ? 'selected' : ''}
            onClick={() => handlePaymentSelect('Credit Card')}
          >
            Credit Card
          </button>
          <button
            className={selectedPayment === 'PayPal' ? 'selected' : ''}
            onClick={() => handlePaymentSelect('PayPal')}
          >
            PayPal
          </button>
          <button
            className={selectedPayment === 'Cash on Delivery' ? 'selected' : ''}
            onClick={() => handlePaymentSelect('Cash on Delivery')}
          >
            Cash on Delivery
          </button>
          <button
            className={selectedPayment === 'UPI' ? 'selected' : ''}
            onClick={() => handlePaymentSelect('UPI')}
          >
            UPI
          </button>
          <button
            className={selectedPayment === 'Net Banking' ? 'selected' : ''}
            onClick={() => handlePaymentSelect('Net Banking')}
          >
            Net Banking
          </button>
        </div>
      </div>
      <button className="confirm-btn" onClick={handleConfirmOrder}>
        Confirm Order
      </button>
    </div>
  );
}

export default PaymentOptions;
