import axios from 'axios';

const baseUrl = 'https://product-tinpet-app.herokuapp.com';

export const likeById = (pets_id) => async (dispatch) => {
    // console.log(likeById, 'ini jalan')
    // console.log(pets_id, 'ini datanya')
    const token = localStorage.getItem('token')
    try {
        const res = await axios.post(`${baseUrl}/api/v1/likes/${pets_id}`, {
            headers: {
                authorization: token
            }
        })
        console.log(res, 'like sukses')
        // console.log(res.data, ' res data like')
        dispatch({
            type: 'LIKE',
            payload: res.data
        })
    } catch (error) {
        // console.log(error, 'error like')
    }
}