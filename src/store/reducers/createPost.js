

const initialState = {
    token: localStorage.getItem('token'),
    loading: false,
    success: false,
    userData: [],
}

const createPost = (state = initialState, action) => {
    const { type, payload, loading } = action;
    switch (type) {
        case 'CREATEPOST_SUCCESS':
            return {
                ...state,
                userData: payload,
                success: true,
                loading
            }
        case 'CREATEPOST_LOADING':
            return {
                ...state,
                loading
            }
        default:
            return state
    }
}

export default createPost;