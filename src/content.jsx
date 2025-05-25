// src/components/Content.jsx
import React from 'react';

const Content = () => {
  return (
    <main style={styles.mainContent}>
      <h2>Welcome to the maju Dashboards</h2>
      <p>Here is your content area. You can display charts, data, or anything you like.</p>
    </main>
  );
};

const styles = {
  mainContent: {
    marginLeft: '250px',
    padding: '20px',
    backgroundColor: '#f4f4f4',
    height: '100vh',
  },
};

export default Content;
