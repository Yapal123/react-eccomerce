import React from 'react';
import './App.css';

function CategoryItem(props){
    return(
        <li className="category-item">
            {props.title}
        </li>
    )
}
export default CategoryItem;