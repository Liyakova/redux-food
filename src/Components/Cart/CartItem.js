import React from "react";
import dishesData from "../../Data/DataDishes";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../redux/CartSlice";

const CartItem = ({cartItem}) => {

    const dishes = dishesData.find(item => item.id === cartItem.dishId)
    const dispatch = useDispatch();
    console.log(cartItem)
    return(
        <div className="cartItem">
            <div  className="cartPrice">
                <p>{dishes.name} -   </p>
                <p> {cartItem.quantity} portion(s)</p>
            </div>
            <div className="cartPrice">
                <p>Price: {dishes.price * cartItem.quantity} $</p>
                <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))} className="icon">
                    <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" alt="delete"/> 
                </span>
            </div>

        </div>
    )
}

export default CartItem;