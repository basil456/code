import React, { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import '../css/product.css';

const mockProducts = [
  {
    id: 1,
    name: 'Brake Pads',
    price: 50,
    category: 'Brakes',
    stock: 10,
    image: 'https://dummyimage.com/300x200/cccccc/000000&text=Brake+Pads',
    description: 'High-quality brake pads for safe stopping.'
  },
  {
    id: 2,
    name: 'Oil Filter',
    price: 10,
    category: 'Engine',
    stock: 25,
    image: 'https://dummyimage.com/300x200/cccccc/000000&text=Oil+Filter',
    description: 'Essential oil filter for engine maintenance.'
  },
  {
    id: 3,
    name: 'Battery',
    price: 80,
    category: 'Electrical',
    stock: 5,
    image: 'https://dummyimage.com/300x200/cccccc/000000&text=Battery',
    description: 'Reliable battery for vehicle starts.'
  },
  {
    id: 4,
    name: 'Spark Plug',
    price: 15,
    category: 'Engine',
    stock: 30,
    image: 'https://dummyimage.com/300x200/cccccc/000000&text=Spark+Plug',
    description: 'Improves engine ignition and fuel efficiency.'
  },
  {
    id: 5,
    name: 'Timing Belt',
    price: 120,
    category: 'Engine',
    stock: 7,
    image: 'https://dummyimage.com/300x200/cccccc/000000&text=Timing+Belt',
    description: 'Synchronizes engine camshaft and crankshaft.'
  },
  {
    id: 6,
    name: 'Air Filter',
    price: 18,
    category: 'Engine',
    stock: 40,
    image: 'https://dummyimage.com/300x200/cccccc/000000&text=Air+Filter',
    description: 'Ensures clean air intake for the engine.'
  },
  {
    id: 7,
    name: 'Brake Disc',
    price: 95,
    category: 'Brakes',
    stock: 8,
    image: 'https://dummyimage.com/300x200/cccccc/000000&text=Brake+Disc',
    description: 'Durable brake disc for effective braking.'
  },
  {
    id: 8,
    name: 'Brake Caliper',
    price: 140,
    category: 'Brakes',
    stock: 6,
    image: 'https://dummyimage.com/300x200/cccccc/000000&text=Brake+Caliper',
    description: 'Holds brake pads and applies pressure.'
  },
  {
    id: 9,
    name: 'Alternator',
    price: 220,
    category: 'Electrical',
    stock: 4,
    image: 'https://dummyimage.com/300x200/cccccc/000000&text=Alternator',
    description: 'Charges battery and powers electrical systems.'
  },
  {
    id: 10,
    name: 'Starter Motor',
    price: 180,
    category: 'Electrical',
    stock: 6,
    image: 'https://dummyimage.com/300x200/cccccc/000000&text=Starter+Motor',
    description: 'Starts the engine efficiently.'
  },
  {
    id: 11,
    name: 'Headlight Bulb',
    price: 25,
    category: 'Electrical',
    stock: 20,
    image: 'https://dummyimage.com/300x200/cccccc/000000&text=Headlight+Bulb',
    description: 'Bright LED headlight bulb.'
  },
  {
    id: 12,
    name: 'Shock Absorber',
    price: 130,
    category: 'Suspension',
    stock: 9,
    image: 'https://dummyimage.com/300x200/cccccc/000000&text=Shock+Absorber',
    description: 'Improves ride comfort and stability.'
  },
  {
    id: 13,
    name: 'Steering Rack',
    price: 260,
    category: 'Suspension',
    stock: 3,
    image: 'https://dummyimage.com/300x200/cccccc/000000&text=Steering+Rack',
    description: 'Provides precise vehicle steering control.'
  },
  {
    id: 14,
    name: 'Radiator',
    price: 200,
    category: 'Cooling',
    stock: 5,
    image: 'https://dummyimage.com/300x200/cccccc/000000&text=Radiator',
    description: 'Keeps engine temperature under control.'
  },
  {
    id: 15,
    name: 'Coolant Hose',
    price: 22,
    category: 'Cooling',
    stock: 18,
    image: 'https://dummyimage.com/300x200/cccccc/000000&text=Coolant+Hose',
    description: 'Transfers coolant efficiently.'
  },
  {
    id: 16,
    name: 'Alloy Wheel',
    price: 300,
    category: 'Wheels',
    stock: 4,
    image: 'https://dummyimage.com/300x200/cccccc/000000&text=Alloy+Wheel',
    description: 'Stylish and durable alloy wheel.'
  },
  {
    id: 17,
    name: 'Car Tyre',
    price: 150,
    category: 'Wheels',
    stock: 12,
    image: 'https://dummyimage.com/300x200/cccccc/000000&text=Car+Tyre',
    description: 'High-grip tyre for all terrains.'
  },
  {
    id: 18,
    name: 'Fuel Pump',
    price: 170,
    category: 'Engine',
    stock: 6,
    image: 'https://dummyimage.com/300x200/cccccc/000000&text=Fuel+Pump',
    description: 'Supplies fuel from tank to engine.'
  },
  {
    id: 19,
    name: 'Clutch Plate',
    price: 110,
    category: 'Transmission',
    stock: 8,
    image: 'https://dummyimage.com/300x200/cccccc/000000&text=Clutch+Plate',
    description: 'Smooth power transmission.'
  },
  {
    id: 20,
    name: 'Gear Oil',
    price: 35,
    category: 'Transmission',
    stock: 20,
    image: 'https://dummyimage.com/300x200/cccccc/000000&text=Gear+Oil',
    description: 'Lubricates gearbox components.'
  },
  {
    id: 21,
    name: 'Windshield Wiper',
    price: 12,
    category: 'Accessories',
    stock: 50,
    image: 'https://dummyimage.com/300x200/cccccc/000000&text=Wiper',
    description: 'Clear visibility in rain.'
  },
  {
    id: 22,
    name: 'Side Mirror',
    price: 65,
    category: 'Body',
    stock: 10,
    image: 'https://dummyimage.com/300x200/cccccc/000000&text=Side+Mirror',
    description: 'Wide-angle side mirror.'
  },
  {
    id: 23,
    name: 'Seat Cover',
    price: 45,
    category: 'Accessories',
    stock: 15,
    image: 'https://dummyimage.com/300x200/cccccc/000000&text=Seat+Cover',
    description: 'Premium leather seat cover.'
  }
];

function Products() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');
  const [sortBy, setSortBy] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const search = params.get('search');
    if (search) setSearchTerm(search);
  }, [location.search]);

  let filteredProducts = mockProducts.filter(p =>
    (category === 'All' || p.category === category) &&
    (p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     p.category.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  if (sortBy === 'priceLow') filteredProducts.sort((a, b) => a.price - b.price);
  if (sortBy === 'priceHigh') filteredProducts.sort((a, b) => b.price - a.price);
const handleBuy = (product) => {
  navigate('/payment-options', { state: { product } });
};


  return (
    <div className="products-page">
      <h1>Spare Parts</h1>

      <div className="filters-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select onChange={(e) => setCategory(e.target.value)}>
          <option value="All">All Categories</option>
          <option value="Engine">Engine</option>
          <option value="Brakes">Brakes</option>
          <option value="Electrical">Electrical</option>
        </select>

        <select onChange={(e) => setSortBy(e.target.value)}>
          <option value="">Sort By</option>
          <option value="priceLow">Price: Low to High</option>
          <option value="priceHigh">Price: High to Low</option>
        </select>
      </div>

      <div className="products-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />

            <h3>{product.name}</h3>
            <span className="category">{product.category}</span>
            <p>{product.description}</p>
            <p className="stock">Stock: {product.stock}</p>

            {/* ✅ BUY BUTTON ADDED */}
            <button
  className="buy-btn"
  onClick={() => handleBuy(product)}
>
  Buy
</button>


            <Link to={`/products/${product.id}`} className="details-link">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
