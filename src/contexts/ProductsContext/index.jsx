import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext();

export const ProductsComponentContext = ({children}) => {
    const [listProducts, setListProducts] = useState([]);
    const [cart, setCart] = useState([]);
    
    useEffect(() => {
        async function getData (){
            const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=sneakers`);
            const data = await response.json();
            setListProducts(data);
        }
        getData();
    }, []);

    const addToCart = async (newProd, counter) => {
        const itemCart = {...newProd, cantidad: counter}
        if (cart){
            cart.map(item => {
                if(item.id === itemCart.id){
                    item.cantidad = item.cantidad + itemCart.cantidad;
                }
            })
        }
        await setCart(cart => [...cart, itemCart])
    }
    
    return (
    <ProductsContext.Provider value={{listProducts, setListProducts, addToCart}}>
        {children}
    </ProductsContext.Provider>
    )
}