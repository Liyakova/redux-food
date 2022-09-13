import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ChangeDishes from "../Cart/ChangeDishes";
import { addItemToCart } from "../../redux/CartSlice";


const Dish = ({dish}) => {

    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    return(
        <div className="dish">
            <img src={`${dish.img}.jpeg`} alt="dushPic"/>
            <h2>{dish.name}</h2>
            <p>$ {dish.price}</p>
            <ChangeDishes quantity={quantity} setQuantity={setQuantity} />
            <button className="addToCartBTN" onClick={() => {dispatch(addItemToCart({dish, quantity}))}}>Add to cart</button>
        </div>
    )
}

export default Dish;