import axios from 'axios';

const baseUrl = 'https://product-tinpet-app.herokuapp.com';

export const getProfile = () => async (dispatch) => {
    const token = localStorage.getItem('token')
    try {
        const res = await axios.get(`${baseUrl}/api/v1/users`, {
            headers: {
                authorization: token
            }
        })
        // console.log(res, 'ini res geprofile')
        // console.log(res.data, 'ini res data profile')
        // console.log(res.data.data, 'ini res data data get profile')
        // console.log(res.data.data.userData, 'ini res data data get profile')
        // console.log(res.data.data.userData.Profile, 'ini res data data get profile')
        dispatch({
            type: 'GET_PROFILE',
            payload: res.data.data.userData.Profile,
            loading: false
        })
    } catch (error) {
        // console.log(error, 'error Get profile')
        dispatch({
            type: 'GET_PROFILE_FAILED'
        })
    }
}


