// import { createSlice } from "@reduxjs/toolkit";
import { fecthApi } from "../utils";

const init = {
    load: true,
    data: [],
    error: null,
    message: ''
}

const getProduct = () => {
    return async (dispatch) => {
        dispatch({
            type: "PRODUCT_INIT"
        })
        fecthApi().get('/products').then((Response) => {
            dispatch({
                type: "PRODUCT_FETCH_SUCCESS",
                payload: {
                    data: Response?.data?.data,
                    message: Response?.data?.message
                }
            })
        })
        .catch((error) => {
            dispatch({
                type: "PRODUCT_FETCH_FAIL",
                payload: {
                    error: error.Response
                }
            })
        })
    }
}

const addToCart = (product, id) => {
    let productChoose = product?.map((p) => 
        p.id === id ? {...p, stock: p.stock - 1} : p)
    return {
        type: "PRODUCT_TO_CART",
        payload: {
            data: productChoose
        }
    }
}

const productReducer = (state = init, action) => {
    switch (action.type) {
        case "PRODUCT_INIT":
            return state 
        case "PRODUCT_TO_CART": 
            return {
                ...state,
                data: action?.payload?.data
            }
        case "PRODUCT_FETCH_SUCCESS":
            return {
                ...state,
                load: false,
                data: action?.payload?.data,
                message: action?.payload?.message
            }
        case "PRODUCT_FETCH_FAIL":
            return {
                ...state,
                load: false,
                error: action?.payload?.error
            } 
            default:
                return init
    }
}


export {
    productReducer,
    addToCart,
    getProduct
}