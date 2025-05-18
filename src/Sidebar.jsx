// src/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside style={styles.sidebar}>
      <nav>
        <ul style={styles.navList}>
          <li><Link style={styles.link} to="/">Home</Link></li>
          <li><Link style={styles.link} to="/analytics">Analytics</Link></li>
          <li><Link style={styles.link} to="/settings">Settings</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

const styles = {
  sidebar: {
    width: '250px',
    height: '100vh',
    backgroundColor: '#333',
    color: 'white',
    paddingTop: '20px',
    position: 'fixed',
  },
  navList: {
    listStyle: 'none',
    padding: 0,
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    display: 'block',
    padding: '10px 20px',
  },
};

export default Sidebar;
