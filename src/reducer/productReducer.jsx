const ProductReducer = (state, action) => {
    switch (action.type) {
        case "Is_Loading":
            return {
                ...state,
                isLoading: true,

            };

        case "Get_Products":

            const categoryData = action.payload.filter((currElem) => {
                return currElem.featured === true;
            })

            return {
                ...state,
                isLoading: false,
                products: action.payload,
                category: categoryData,
            }

        case "is_Error":
            return {
                ...state,
                isError: true,
                isLoading: false,
            };

        case "Is_Single_Loading":
            return {
                ...state,
                Is_Single_Loading: true,

            };
        case "Get_Single_Products":
            return {
                ...state,
                Is_Single_Loading: false,
                singleProduct: action.payload,
            };

        case "single_Error":
            return {
                ...state,
                single_Error: true,
                Is_Single_Loading: false,
            };
        default:
            return state;
    }


    return state;
}


export default ProductReducer;