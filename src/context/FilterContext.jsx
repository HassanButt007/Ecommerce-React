import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import reducer from "../reducer/filterReducer"

const FilterContext = createContext();

const initialState = {
    filterProducts: [],
    allProducts: [],
    Grid_view: true,
}

export const FilterContextProvider = ({ children }) => {
    const { products } = useProductContext();

    const [state, dispatch] = useReducer(reducer, initialState);

    const setGridView = () => {
        return dispatch({ type: "set_Grid_View" });
    }

    const setListView = () => {
        return dispatch({ type: "set_List_View" });
    }

    useEffect(() => {
        dispatch({ type: "Load_Filter_Data", payload: products })
    }, [products])

    return (
        <>
            <FilterContext.Provider value={{ ...state, setGridView, setListView }}>{children}</FilterContext.Provider>
        </>
    )
}

// Custom Hook
export const useFilterContext = () => {
    return useContext(FilterContext);
};
