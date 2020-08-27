const initialState = {
	token: localStorage.getItem('token'),
	error: null,
	loading: false,
	getAllComment: []
}



const comment = (state = initialState, action) => {

	const {type, payload} = action;
	switch (type){
		case 'GET_ALL_COMMENT_SUCCESS':
			return{
				...state,
				getAllComment: payload
			};
		case 'GET_ALL_COMMENT_FAILED':
			return{
				...state,
            }
		default:
			return {...state};
	}
}

export default comment;