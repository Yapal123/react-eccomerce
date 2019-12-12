import React from 'react';
import './App.css';

function NavItem(props){
    return(
    <span className="nav-item">{props.name}</span>
    )
}

export default NavItem;