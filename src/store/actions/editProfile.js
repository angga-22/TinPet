import { EDIT_PROFILE_SUCCESS, EDIT_PROFILE_FAILED } from './types';
import axios from 'axios';
import Swal from 'sweetalert2';
import { getProfile } from './profile';

const baseUrl = 'https://product-tinpet-app.herokuapp.com';

export const editProfile = (data) => async dispatch => {
    let token = localStorage.getItem("token")
    try {
        const res = await axios.put(`${baseUrl}/api/v1/users/profile`, data, {
            headers: {
                authorization: token
            }
        })
        console.log(res)
        dispatch({
            type: EDIT_PROFILE_SUCCESS
        })
        dispatch(getProfile())
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Profile Edited',
        })
    } catch (error) {
        dispatch({
            type: EDIT_PROFILE_FAILED
        })
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: " Edit Profile Failed!",
        })
    }
}



