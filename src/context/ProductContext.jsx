import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/productReducer";

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialState = {
    isLoading: false,
    isError: false,
    products: [],   
    category: [],
    Is_Single_Loading: false,
    single_Error: false,
    singleProduct: {},
}

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const getProducts = async (url) => {
        dispatch({ type: "Is_Loading" });
        try {
            const res = await axios.get(url);
            const Products = await res.data;
            dispatch({ type: "Get_Products", payload: Products })

        } catch (err) {
            dispatch({ type: "Error" });
        }

    }


    const getSingleProduct = async (url) => {
        dispatch({ type: "Is_Single_Loading" });
        try {
            const res = await axios.get(url);
            const singleProduct = await res.data;
            dispatch({ type: "Get_Single_Products", payload: singleProduct })

        } catch (err) {
            dispatch({ type: "single_Error" });
        }

    }

    useEffect(() => {
        getProducts(API);
    }, [])


    return (
        <>
            <AppContext.Provider value={{ ...state, getSingleProduct }}>{children}</AppContext.Provider>
        </>
    )
}


// Custom Hook
const useProductContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider, useProductContext };