import React from 'react';
import './App.css';


function Product(props){
    return(
        <div className="product-item">
            <img src={props.data.img} alt=""/>
            <p>
                {props.data.title}
            </p>
            <span>
                <strong>
                 ${props.data.price}   
                </strong>
            </span>
        </div>
    )
}

export default Product;