import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext();

export const ProductsComponentContext = ({children}) => {
    const [listProducts, setListProducts] = useState([]);
    
    useEffect(() => {
        async function getData (){
            const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=sneakers`);
            const data = await response.json();
            setListProducts(data);
        }
        getData();
    }, [])
    
    return (
    <ProductsContext.Provider value={{listProducts, setListProducts}}>
        {children}
    </ProductsContext.Provider>
    )
}