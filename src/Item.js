import React from 'react';
import './Item.css';

const Item = ({item, onAddToCart}) => {
    return <div className="Item">
        <div className="Item-left">
            <div className="Item-image">
                <div className="Item-title">
                    {Item.name}
                </div>
                <div className="Item-description">
                    {item.description}
                </div>
            </div>
        </div>
        <div class="Item-right">
            <div className="Item-price">
                ${item.price}
            </div>
            <button className="Item-addToCart" onClick={onAddToCart}>
                Add to Cart
            </button>
        </div>
    </div>
}

export default Item;