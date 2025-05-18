// src/App.jsx
import React from 'react';
import Header from  './Header' ;
import Sidebar from './Sidebar';
import Content from './content';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Header />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <Content/>
      </div>
    </div>
  );
}

export default App;
