import React from "react";
import Item from "./Item";

const ItemList = ({ items }) => {
    
    return (
        <div className="itemList">
            
            {
            items.map( itm => (
                  
                  <div key = {itm.id}>
                  <Item
                  id={itm.id}
                  nombre = {itm.nombre}
                  imagen = {itm.imagen}
                  precio = {itm.precio}
                  ingredientes = {itm.ingredientes}
                />
                </div>
                
            ))
            }
        </div>
    );
}

export default ItemList;