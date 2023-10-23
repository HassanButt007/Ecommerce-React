import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import reducer from "../reducer/filterReducer"

const FilterContext = createContext();

const initialState = {
    filterProducts: [],
    allProducts: [],
    Grid_view: true,
    sorting_value: "lowest"
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

    //Sorting
    const sorting = () => {
        return dispatch({ type: "set_sorting" });
    }

    useEffect(() => {
        dispatch({ type: "sort_product", payload: products });
    }, [state.sorting_value])

    useEffect(() => {
        dispatch({ type: "Load_Filter_Data", payload: products })
    }, [products])

    return (
        <>
            <FilterContext.Provider value={{ ...state, setGridView, setListView, sorting }}>{children}</FilterContext.Provider>
        </>
    )
}

// Custom Hook
export const useFilterContext = () => {
    return useContext(FilterContext);
};
