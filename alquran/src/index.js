// Import Requirements
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Custom Import's
import Header from "./components/header";

const App = () => {
  return (
    <div>
      <Header />
      <h3>Heloooooooos</h3>
    </div>
  );
}

// Render to display
ReactDOM.render(<App />, document.querySelector('#root'));

