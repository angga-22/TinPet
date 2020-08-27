import axios from 'axios';
import Swal from 'sweetalert2';

const baseUrl = 'https://product-tinpet-app.herokuapp.com';

export const getSinglePets = () => async (dispatch) => {
    const token = localStorage.getItem('token')
    try {
        const res = await axios.get(`${baseUrl}/api/v1/pets/`, {
            headers: {
                authorization: token
            }
        })
        dispatch({
            type: 'GET_OWN_PETS',
            payload: res.data.data
        })
    } catch (error) {
        dispatch({
            type: 'GET_OWN_PETS_FAILED'
        })
    }
}

export const deletePost = (id, props) => async dispatch => {
    const token = localStorage.getItem('token')
    try {
        const res = await axios.delete(`${baseUrl}/api/v1/pets/${id}`, { headers: { authorization: token } })
        console.log('res', res)
        dispatch({
            type: 'DELETE_POST_SUCCESS',
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
        dispatch(getSinglePets())

    } catch (error) {
        dispatch({
            type: 'POST_MESSAGE_FAILED'
        })
    }
}
