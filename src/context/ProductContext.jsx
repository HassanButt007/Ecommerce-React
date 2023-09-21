import { createContext, useEffect } from "react";
import axios from "axios";

const AppContext = createContext();
const API = "https://fakestoreapi.com/products"

const AppProvider = ({ children }) => {

    const getProducts = async (url) => {
        const res = await axios.get(url);
        const Products = await res.data;
        console.log("Products", Products)
    }

    

    useEffect(() => {
        getProducts(API);
    }, [])


    return (
        <>
            <AppContext.Provider value="Hassan">
                {children}
            </AppContext.Provider>
        </>
    )
}


export { AppContext, AppProvider };