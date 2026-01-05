import React, { useState } from 'react';

const mockProviders = [
  { id: 1, name: 'Quick Fix Auto', location: 'Downtown', phone: '123-456-7890', image: 'https://via.placeholder.com/100?text=Quick+Fix' },
  { id: 2, name: 'Roadside Heroes', location: 'Suburb', phone: '098-765-4321', image: 'https://via.placeholder.com/100?text=Roadside+Heroes' },
  { id: 3, name: 'Emergency Tow', location: 'Highway', phone: '555-123-4567', image: 'https://via.placeholder.com/100?text=Emergency+Tow' },
];

function ServiceProviders() {
  return (
    <div className="service-providers">
      <h2>Nearby Service Providers</h2>
      <div className="providers-list">
        {mockProviders.map(provider => (
          <div key={provider.id} className="provider-card">
            <img src={provider.image} alt={provider.name} className="provider-image" />
            <h3>{provider.name}</h3>
            <p>Location: {provider.location}</p>
            <p>Phone: {provider.phone}</p>
            <button className="contact-button">Contact</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function RoadsideAssistance() {
  const [location, setLocation] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [issue, setIssue] = useState('');

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleVehicleTypeChange = (event) => {
    setVehicleType(event.target.value);
  };

  const handleIssueChange = (event) => {
    setIssue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Assistance requested at ${location} for ${vehicleType} with issue: ${issue}`);
  };

  return (
    <div className="roadside-assistance-page">
      <h1>Roadside Assistance</h1>
      <form onSubmit={handleSubmit} className="assistance-form">
        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input type="text" id="location" value={location} onChange={handleLocationChange} placeholder="Enter your location" required />
        </div>
        <div className="form-group">
          <label htmlFor="vehicleType">Vehicle Type:</label>
          <select id="vehicleType" value={vehicleType} onChange={handleVehicleTypeChange} required>
            <option value="">Select vehicle type</option>
            <option value="Car">Car</option>
            <option value="Bike">Bike</option>
            <option value="Truck">Truck</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="issue">Issue:</label>
          <textarea id="issue" value={issue} onChange={handleIssueChange} placeholder="Describe the issue" required></textarea>
        </div>
        <button type="submit" className="submit-button">Request Assistance</button>
      </form>
      <ServiceProviders />
    </div>
  );
}

export default RoadsideAssistance;
