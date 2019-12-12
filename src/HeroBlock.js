import React from 'react';
import './App.css';
import CategoryItem from './CategoryItem';
import Slider from './Slider'

function HeroBlock(){
    const categories = ['Cat1','Cat2','Cat3','Cat4','Cat5'];
    const categoryItems = categories.map(categoryItem => (
      <CategoryItem key={categoryItem.toString()} title={categoryItem} />
    ));  
    return(
        <div className="heroPlace">
            <div className="categoriesPlace">
                <div className="cat-head">
                    <span>Категории</span>
                </div>
                <ul className="cat-list">
                    {categoryItems}
                </ul>
            </div>
            <div className="promo-place">
                <Slider />
            </div>
        </div>
    )
}


export default HeroBlock