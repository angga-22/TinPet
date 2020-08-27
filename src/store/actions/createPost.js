import { CREATEPOST_SUCCESS, CREATEPOST_FAILED, CREATEPOST_LOADING } from './types';
import { getAllPets } from './post';
import axios from 'axios';
import Swal from 'sweetalert2';
const baseUrl = 'https://product-tinpet-app.herokuapp.com';

export const createPost = (data, props) => async dispatch => {
    let token = localStorage.getItem("token")
    try {
        dispatch({
            type: CREATEPOST_LOADING,
            loading: true,
        })
        const res = await axios.post(`${baseUrl}/api/v1/pets/`, data, {
            headers: {
                authorization: token
            }
        })
        console.log("respond createpost", res)
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Create Post Success',
        })
        dispatch({
            type: CREATEPOST_SUCCESS,
            loading: false,
        })
        dispatch(getAllPets())
    } catch (error) {
        dispatch({
            type: CREATEPOST_FAILED
        })
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: "Create Post Failed!",
        })
    }
}


