import React from "react";

const ChangeDishes = ( {quantity, setQuantity} ) => {

    const AddItem = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
    }

    const RemoveItem = () => {
        const newQuantity = quantity - 1;
        if (newQuantity < 0) return 0;
        setQuantity(newQuantity);
    }

    return(
        <div>
            <button className="btnDish" onClick={RemoveItem}>-</button>
            <span>{quantity}</span>
            <button  className="btnDish" onClick={AddItem}>+</button>
        </div>
    )
}

export default ChangeDishes;