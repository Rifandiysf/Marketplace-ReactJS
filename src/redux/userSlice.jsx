import { fecthApi } from "../utils"


const init = {
    load: true,
    data: [],
    message: "",
    err: null
}

export const registerSubmit = (data) => {
    return (dispatch) => {
        fecthApi().post("register", data).then(Response => {
            dispatch({
                type: "REGISTER_SUCCESS",
                message: Response.data.message
            })
        })
        .catch(err => dispatch({
            type: "REGISTER_FAIL",
            payload: {
                error: err.response.data
            }
        }))
    }
}

export const loginSubmit = (data) => {
    return (dispatch) => {
        fecthApi().post("auth", data).then(Response => {
            let token = Response?.data?.access_token;
            localStorage.setItem("token", token)
            dispatch({
                type: "LOGIN_SUCCESS",
                message: Response.data.message
            })
        })
        .catch(err => dispatch({
            type: "LOGIN_FAIL",
            payload: {
                error: err.response.data
            }
        }))
    }
}

const userReducer = (state = init, action) => {
    switch (action?.type) {
        case "AUTH_INIT":
            return state
        case "AUTH_SUCCESS":
                return {
                    ...state,
                    err: action?.payload?.data
                }
        case "AUTH_FAIL":
            return {
                ...state,
                err: action?.payload?.error
            }
        case "LOGIN_FAIL":
            return {
                ...state,
                err: action?.payload?.error
            }
        case "LOGIN_SUCCESS":
            return {
                ...state,
                message: action?.payload?.message
            }
        case "REGISTER_FAIL":
            return {
                ...state,
                err: action?.payload?.error
            }
        case "REGISTER_SUCCESS":
            return {
                ...state,
                message: action?.payload?.message
            }
        default:
            return init
    }
}

export {
    userReducer
}