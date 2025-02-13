// import { createSlice } from "@reduxjs/toolkit";
import { fecthApi } from "../utils";

const init = {
    load: true,
    data: [],
    error: null,
    message: ''
}

const getBanner = () => {
    return async (dispatch) => {
        dispatch({
            type: "BANNER_INIT"
        })
        fecthApi().get('/banners').then((Response) => {
            dispatch({
                type: "BANNER_FETCH_SUCCESS",
                payload: {
                    data: Response?.data?.data,
                    message: Response?.data?.message
                }
            })
        })
        .catch((error) => {
            dispatch({
                type: "BANNER_FETCH_FAIL",
                payload: {
                    error: error.Response
                }
            })
        })
    }
}

const bannerReducer = (state = init, action) => {
    switch (action.type) {
        case "BANNER_INIT":
            return state 
        case "PRODUCT_TO_CART": 
            return {
                ...state,
                data: action?.payload?.data
            }
        case "BANNER_FETCH_SUCCESS":
            return {
                ...state,
                load: false,
                data: action?.payload?.data,
                message: action?.payload?.message
            }
        case "BANNER_FETCH_FAIL":
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
    bannerReducer,
    getBanner
}