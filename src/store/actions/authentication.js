import {
    REGISTER_SUCCESS, REGISTER_FAILED,
    LOGIN_SUCCESS, LOGIN_FAILED,
} from './types';
import Swal from 'sweetalert2';
import axios from 'axios';

const baseUrl = 'https://product-tinpet-app.herokuapp.com';

export const register = (data, props) => async dispatch => {
    try {
        const res = await axios.post(`${baseUrl}/api/v1/users/register`, data)
        console.log('respond', res)
        dispatch({
            type: REGISTER_SUCCESS,
            loading: false
        })
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Register Success',
        })
        props.history.push("/login")
    }
    catch (error) {
        dispatch({
            type: REGISTER_FAILED
        })
        Swal.fire({
            icon: 'error',
            title: "Password Doesn't Match!",
        })
    }
}


export const login = (data, props) => async dispatch => {

    try {
        const res = await axios.post(`${baseUrl}/api/v1/users/login`, data)

        if (res.data.status === 'success') {
            localStorage.setItem("token", res.data.data.token)
        }
        dispatch({
            type: LOGIN_SUCCESS,
            loading: false
        })
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Login Success',
        })
        props.history.push("/homepage")
    } catch (error) {
        dispatch({
            type: LOGIN_FAILED
        })
        Swal.fire({
            icon: 'error',
            title: 'Wrong Password',
            footer: '<a href>Forgot your Password ?</a>'
        })
    }

}

