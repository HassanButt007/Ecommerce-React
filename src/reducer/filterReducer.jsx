const filterReducer = (state, action) => {

    switch (action.type) {
        case "Load_Filter_Data":
            return {
                ...state,
                filterProducts: [...action.payload],
                allProducts: [...action.payload],
            }
        case "set_Grid_View":
            return {
                ...state,
                Grid_view: true
            }


        case "set_List_View":
            return {
                ...state,
                Grid_view: false
            }

        case "set_sorting":
            let userSortValue = document.getElementById("sort");
            let sortValue = userSortValue.options[userSortValue.selectedIndex].value;
            console.log("sortValue", sortValue)
            return {
                ...state,
                sorting_value: sortValue,
            }

        case "sort_product":
            let newSortData;
            let tempSortProduct = [...action.payload];

            if (state.sorting_value === "a-z") {
                newSortData = tempSortProduct.sort((a, b) => {
                    return a.name.localeCompare(b.name);
                });
            }

            if (state.sorting_value === "z-a") {
                newSortData = tempSortProduct.sort((a, b) => {
                    return b.name.localeCompare(a.name);
                });
            }

            if(state.sorting_value === "lowest"){
                const sortProducts = (a,b) => {
                    return a.price - b.price;
                }
                newSortData = tempSortProduct.sort(sortProducts);
            }

            if(state.sorting_value === "highest"){
                const sortProducts = (a,b) => {
                    return b.price - a.price;
                }
                newSortData = tempSortProduct.sort(sortProducts);
            }


            return {
                ...state,
                filterProducts: newSortData,
            }


        default: return state
    }

}

export default filterReducer;