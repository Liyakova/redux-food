import React from "react";
import { useSelector } from 'react-redux';
import { getCartItems } from '../../redux/CartSlice';
import { getTotalPrice} from '../../redux/CartSlice';
import CartItem from "./CartItem";

const Cart = () => {

    const CartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);

    return(
        <div>
            <img className="cartIcon" src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/000000/external-shopping-cart-cyber-monday-xnimrodx-lineal-color-xnimrodx.png" alt="cart"/>
            <div>
                {CartItems.map(cartItem => <CartItem cartItem = {cartItem}/> )}
                <h3>TOTAL: $ {totalPrice}</h3>
            </div>

        </div>
    )
}

export default Cart;