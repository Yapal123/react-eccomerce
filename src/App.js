import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavItem from './NavItem';
import HeroBlock from './HeroBlock';
import TopProducts from './TopProducts';

function App() {
 const  products= [
    {
      title: "Product1",
      price: 199,
      img: "./img/prod.png"
    },
    {
      title: "Product2",
      price: 199,
      img: "./img/prod.png"
    },
    {
      title: "Product3",
      price: 199,
      img: "./img/prod.png"
    },
    {
      title: "Product4",
      price: 199,
      img: "./img/prod.png"
    },
    {
      title: "Product5",
      price: 199,
      img: "./img/prod.png"
    },
    {
      title: "Product6",
      price: 199,
      img: "./img/prod.png"
    },
    {
      title: "Product7",
      price: 199,
      img: "./img/prod.png"
    },
    {
      title: "Product8",
      price: 199,
      img: "./img/prod.png"
    },
    {
      title: "Product9",
      price: 199,
      img: "./img/prod.png"
    },
    {
      title: "Product10",
      price: 199,
      img: "./img/prod.png"
    },
    {
      title: "Product11",
      price: 199,
      img: "./img/prod.png"
    },
    {
      title: "Product12",
      price: 199,
      img: "./img/prod.png"
    }
  ]
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
        <TopProducts products={products} title={'Top products'}/>
      </div>
    </div>
  );
}

export default App;
