const filterReducer = (state, action) => {

    switch(action.type) {
        case "Load_Filter_Data": 
        return {
            ...state,
            filterProducts: [...action.payload],
            allProducts: [...action.payload],
        }
        case "set_Grid_View" : 
        return {
            ...state,
            Grid_view: true
        }


        case "set_List_View" : 
        return {
            ...state,
            Grid_view: false
        }


        default: return state
    }

}

export default filterReducer;