import axios from 'axios';
import { SEARCH_PET_SUCCESS, SEARCH_PET_FAILED } from './types';
import { getPostComment, getAllComment } from './comment';

const baseUrl = 'https://product-tinpet-app.herokuapp.com';

export const searchPet = (data) => async dispatch => {
    let token = localStorage.getItem('token')
    try {
        const res = await axios.get(`${baseUrl}/api/v1/searches?location=${data.location}&category=${data.category}`,
            { headers: { authorization: token } })
        dispatch({ type: SEARCH_PET_SUCCESS, payload: res.data.data, loading: false })
        dispatch(getPostComment(), getAllComment())

    } catch (error) {
        dispatch({ type: SEARCH_PET_FAILED })
    }
}