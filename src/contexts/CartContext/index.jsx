import { createContext, useEffect, useState } from "react";
import { getFireStore } from '../../firebase/client';

export const CartContext = createContext();

export const CartComponentContext = ({children}) => {
    const [cart, setCart] = useState([]);
    const [cartCounter, setCartCounter] = useState(0);

    const isInCart = (item) => {
        return cart
          .map((element) => element.itemList.id)
          .indexOf(item.id);
      };
    
      const addItem = ({ product, quantity, size }) => {
        if (isInCart(product) >= 0) {
          cart[isInCart(product)].cantidad += quantity;
          setCart([...cart]);
        } else {
          setCart([...cart,
            {
              itemList: product,
              cantidad: quantity,
              talle: size,
              subTotal: quantity * product.price
            },
          ]);
        }
      };

      const deleteItem = (id) => {
        var array = [...cart];
        var index = array.findIndex(element => element.itemList.id === id);
        if (index !== -1) {
          array.splice(index, 1);
          setCart([...array]);
        }
      };
    
      const deleteAll = () =>{
        setCart([]);
      };

      const saveCart = () => {
        localStorage.setItem("cart", JSON.stringify(cart));
      };
    
      const getCart = () => {
        const cartMemory = JSON.parse(localStorage.getItem("cart"));
        if (cartMemory && cartMemory.length !== 0) {
          setCart(cartMemory);
        }
      };
    
      const getTotal = () => {
        return cart.map(element => element.subTotal).reduce((a,b) => a + b, 0);
      };

      useEffect(() => {
        getCart();
        saveCart();
      }, []);
    
      useEffect(() => {
        const bufferCounter = cart
          .map((element) => element.cantidad)
          .reduce((a, b) => a + b, 0);
    
        setCartCounter(bufferCounter);
        saveCart();

      }, [cart]);

      const createOrder = ( name, email, phone ) => {
        const order = {
          buyer: {
            name,
            phone,
            email
          },
          item: cart,
          total: getTotal()
        }

        const DB = getFireStore();
        DB.collection('orders').add(order);
      }

    
    return (
      <CartContext.Provider value={{ cart, cartCounter, addItem, deleteItem, deleteAll, getTotal, createOrder }}>
          {children}
      </CartContext.Provider>
    );
};