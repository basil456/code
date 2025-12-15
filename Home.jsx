import React from 'react';
import SearchBar from '../components/SearchBar';
import AuthButtons from '../components/AuthButtons';

function Home() {
  return (
    <div style={{
      backgroundImage: 'url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>Welcome to the Automobile Spare Parts Store!</h1>
      <p style={{ fontSize: '1.5rem', marginBottom: '2rem', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>Find the spare parts you need for your car or bike.</p>
      <AuthButtons />
      <SearchBar />
    </div>
  );
}

export default Home;
