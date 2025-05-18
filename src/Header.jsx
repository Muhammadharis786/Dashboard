// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1>Dashboard</h1>
      <div>
        <span>User</span>
      </div>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    alignItems: 'center',
  },
};

export default Header;
