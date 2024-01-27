// CartContext.js
import React, { useState, createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  function totalItems() {
    let totalItems = 0;
    cart.forEach(item => {
      console.log(item.qty)
      console.log(totalItems)
      totalItems = Number(totalItems) + Number(item.qty);
    })
    if(!totalItems){return 0}
    return totalItems;
  }

  function clearCart() {
    setCart([{}])
  }

  function subTotal() {
    subTotal = 0;
    cart.forEach(item => {
      console.log(item.qty)
      console.log(totalItems)
      subTotal = subTotal + item.qty * item.price;
    })
    if(!subTotal){return 0}
    return subTotal;
  }

  function handleDelete(id) {
    setCart(prevCart => {
      let newCart = prevCart.filter(item => item.id != id)
      return newCart;
    })
  }

  return (
    <CartContext.Provider value={{ cart, setCart, totalItems, subTotal, handleDelete , clearCart }}>
      {children}
    </CartContext.Provider>
  );
};