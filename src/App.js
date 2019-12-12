import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavItem from './NavItem';
import HeroBlock from './HeroBlock';
import TopProducts from './TopProducts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="navbar">
          <NavItem name={`One`} />
          <NavItem name={`Two`} />
          <NavItem name={`Three`} />
          <NavItem name={`Four`} />
        </div>
      </header>
      <div className="container">
        <HeroBlock />
        <TopProducts />
      </div>
    </div>
  );
}

export default App;
