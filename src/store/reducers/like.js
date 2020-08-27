const initialState = {
	token: localStorage.getItem('token'),
    loading: false,
	likeCounter: (null),
}



const like = (state = initialState, action) => {

	const {type, payload} = action;
	switch (type){
		case 'LIKE':
			return{
				...state,
				likeCounter:payload
			}
		default:
			return {...state};
	}
}

export default like;