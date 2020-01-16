import { AUTH_USER, AUTH_ERROR } from "./types";
import axios from "axios";

export const signUser = (values, redir) => {
    return async dispatch => {
        try {
            const req = await axios.post("https://reqres.in/api/register", values);
            dispatch({ type: AUTH_USER, payload: req.data.token });
            localStorage.setItem("token", req.data.token);
            redir();
        } catch (error) {
            dispatch({ type: AUTH_ERROR, payload: "You are not Authorized!" });
        }
    };
};
export const signout = () => {
    localStorage.removeItem("token");
    return {
        type: AUTH_USER,
        payload: ""
    };
};