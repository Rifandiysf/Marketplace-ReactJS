import { fecthApi } from "../utils"

const productTypeInit = {
    load: true,
    data: [],
    error: null,
    message: ""
}

const fecthProductType = () => async (dispatch) => {
    await dispatch({
        type: "PRODUCT_TYPE_INIT"
    })
    await fecthApi().get("/product_types").then(Response => dispatch({
        type: "PRODUCT_TYPE_FETCH_SUCCESS",
        payload: {
            data: Response?.data?.data
        }
    })).catch(err => dispatch({
        type: "PRODUCT_TYPE_FETCH_FAIL",
        payload: {
            error: err?.response
        }
    }))
}

const productTypeReducer = (state = productTypeInit, action) => {
    switch (action.type) {
        case "PRODUCT_TYPE_INIT":
            return {...state}
        case "PRODUCT_TYPE_FETCH_SUCCESS":
            return {
                ...state,
                load: false,
                data: action?.payload?.data,
            }
        case "PRODUCT_TYPE_FETCH_FAIL":
            return {
                ...state,
                load: false,
                error: action?.payload?.error
            } 
            default:
                return productTypeInit
    }
}

export {
    productTypeReducer,
    fecthProductType
}