import axios from 'axios';
import Swal from 'sweetalert2';

const baseUrl = 'https://product-tinpet-app.herokuapp.com';

export const getAllMessage = () => async (dispatch) => {
    const token = localStorage.getItem('token')
    try {
        const res = await axios.get(`${baseUrl}/api/v1/messages/all`, {
            headers: {
                authorization: token
            }
        })
        dispatch({
            type: 'GET_ALL_MESSAGE_SUCCESS',
            payload: res.data.data
        })
    } catch (error) {
        dispatch({
            type: 'GET_ALL_MESSAGE_FAILED'
        })
    }
}

export const getCountMessage = () => async (dispatch) => {
    const token = localStorage.getItem('token')
    try {
        const res = await axios.get(`${baseUrl}/api/v1/messages/count`, {
            headers: {
                authorization: token
            }
        })
        dispatch({
            type: 'GET_COUNT_MESSAGE_SUCCESS',
            payload: res?.data?.data
        })
    } catch (error) {
        dispatch({
            type: 'GET_COUNT_MESSAGE_FAILED'
        })
    }
}

export const postMessages = (data, id, props) => async dispatch => {
    // console.log(data, 'kirim pesan ni',)
    const token = localStorage.getItem('token')
    try {
        const res = await axios.post(`${baseUrl}/api/v1/messages/${id}`, data, { headers: { authorization: token } })
        console.log('res', res)
        dispatch({
            type: 'POST_MESSAGE_SUCCESS',
        })
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Message Sent',
        })
    } catch (error) {
        dispatch({
            type: 'POST_MESSAGE_FAILED'
        })
        Swal.fire({
            icon: 'error',
            title: "Message not sent!!",
        })
    }
}

export const deleteMessage = (id, props) => async dispatch => {
    const token = localStorage.getItem('token')
    try {
        const res = await axios.delete(`${baseUrl}/api/v1/messages/${id}`, { headers: { authorization: token } })
        console.log('res', res)
        dispatch({
            type: 'DELETE_MESSAGE_SUCCESS',
            payload: id
        })
        await Swal.fire({
            position: 'top-end',
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.value) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                Swal.fire(
                    'Cancelled',
                    'Your file is saved',
                    'error'
                )
            }
        })
        dispatch(getAllMessage())
    } catch (error) {
        dispatch({
            type: 'POST_MESSAGE_FAILED'
        })
    }
}
