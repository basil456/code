import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const mockProducts = [
  { id: 1, name: 'Brake Pads', price: 50, category: 'Brakes', image: 'https://th.bing.com/th/id/OIP.5DqI2EOKYo9VL3eH7GBZ5wHaGm?w=204&h=182&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3', description: 'High-quality brake pads for safe stopping.' },
  { id: 2, name: 'Oil Filter', price: 10, category: 'Engine', image: 'https://th.bing.com/th/id/OIP.c4fvZpbftCYrR4Ic2_AzKwHaHa?w=194&h=194&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3', description: 'Essential oil filter for engine maintenance.' },
  { id: 3, name: 'Tire', price: 100, category: 'Wheels', image: 'https://th.bing.com/th/id/OIP.ywHNx-Iqa9knVP98YIKjVQHaFS?w=251&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3', description: 'Durable tires for all weather conditions.' },
  { id: 4, name: 'Spark Plug', price: 5, category: 'Engine', image: 'https://th.bing.com/th/id/OIP.nEMmpMc00IUWmTJDX63r-QHaHa?w=205&h=205&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3', description: 'Reliable spark plugs for optimal performance.' },
  { id: 5, name: 'Air Filter', price: 15, category: 'Engine', image: 'https://th.bing.com/th/id/OIP.jXaTuMzZtyaXsn1jku9WVgHaHa?w=174&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3', description: 'Clean air filter for better engine efficiency.' },
];

function ProductList({ searchTerm }) {
  const filteredProducts = mockProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-list">
      {filteredProducts.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <h3>{product.name}</h3>
          <p className="product-category">{product.category}</p>
          <p className="product-description">{product.description}</p>
          <p className="product-price">${product.price}</p>
          <button className="add-to-cart-button">Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

function Product() {
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const search = params.get('search');
    if (search) {
      setSearchTerm(search);
    }
  }, [location.search]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="products-page">
      <h1>Products</h1>
      <div className="search-section">
        <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search for parts..." className="search-input" />
      </div>
      <ProductList searchTerm={searchTerm} />
    </div>
  );
}

export default Product;
