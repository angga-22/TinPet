import axios from 'axios';


const baseUrl = 'https://product-tinpet-app.herokuapp.com';

export const getAllPets = () => async (dispatch) => {
    const token = localStorage.getItem('token')
    try {
        const res = await axios.get(`${baseUrl}/api/v1/pets/all`, {
            headers: {
                authorization: token
            }
        })
        dispatch({
            type: 'GET_ALL_POST',
            payload: res.data.data,
            loading: false
        })
    } catch (error) {
        dispatch({
            type: 'GET_ALL_POST_FAILED'
        })
    }
}


