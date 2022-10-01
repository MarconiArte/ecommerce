import React from "react";
import Product from "./product";

const ItemList = ({ items }) => {
    
    return (
        <div className="itemList">
            {
            items.map( item => (
                <Product details={item}
                key = {item.id}
                />
            ))
            }
        </div>
    );
}

export default ItemList;